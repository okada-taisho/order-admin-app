import {
  collection,
  getDocs,
  doc,
  getDoc,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import {
  CollectionReferenceType,
  DocumentReferenceType,
  DocumentSnapshotType,
  QuerySnapshotType,
} from "@/types/firebase";



const useFetch = () => {

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
      console.error("Error:", err);
    }
  };
  const fetchDataById = async (
    documentId: string,
    tabelName: string
  ): Promise<DocumentData | null> => {
    try {
      const MenusCol: CollectionReferenceType = collection(db, tabelName);
      const MenuDocRef: DocumentReferenceType = doc(MenusCol, documentId);

      const MenuSnapshot: DocumentSnapshotType = await getDoc(MenuDocRef);

      if (MenuSnapshot.exists()) {
        const MenuData: DocumentData = MenuSnapshot.data();
        return MenuData;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  return {
    fetchData,
    fetchDataById,
  };
};

export default useFetch;
