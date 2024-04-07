"use server";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  DocumentData,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { DocumentReferenceType } from "@/types/firebase";
import { createCurrentDate } from "@/utils";
import { FormState } from "@/components/form/types";
import { OrderState } from "@/components/order/types";
import { revalidatePath } from "next/cache";


const addData = async (param: FormState, tabelName: string): Promise<void> => {
  const { uid,currentDate } = createCurrentDate();

  try {
    await setDoc(doc(db, tabelName, uid), {
      ...param,
      id: uid,
      created_date: currentDate,
    });
  } catch (err) {
    
    throw err
  }
};

const deleteData = async (id: string, tableName: string) => {
  try {
    const docRef: DocumentReferenceType = doc(collection(db, tableName), id);
    await deleteDoc(docRef);
    
  } catch (err) {
    throw err
  }
};

const updateData = async (param: FormState | OrderState, tableName: string) => {
  try {
    const docRef = doc(collection(db, tableName), param.id);

    await updateDoc(docRef, param);
    revalidatePath("/");
  } catch (err) {
    throw err
  }
};

const fetchData = async (
  tableName: string,
  callback: (dataList: DocumentData[]) => void
) => {
  try {
    const dataCollection = collection(db, tableName);

    const initialSnapshot = await getDocs(dataCollection);
    const initialDataList: DocumentData[] = initialSnapshot.docs
      .map((doc) => doc.data())
      .sort((a, b) => b.created_date - a.created_date);

    callback(initialDataList);

    const unsubscribe = onSnapshot(dataCollection, (snapshot) => {
      const updatedDataList: DocumentData[] = snapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => b.created_date - a.created_date);
      callback(updatedDataList);
    });
    return unsubscribe;
  } catch (err) {
    throw err
  }
};

export { addData, deleteData, updateData, fetchData };
