import { DocumentReference,DocumentData,CollectionReference,QuerySnapshot, DocumentSnapshot } from "firebase/firestore";

type DocumentReferenceType = DocumentReference<DocumentData, DocumentData>
type CollectionReferenceType = CollectionReference<DocumentData, DocumentData>
type QuerySnapshotType =  QuerySnapshot<DocumentData, DocumentData>
type DocumentSnapshotType = DocumentSnapshot<DocumentData, DocumentData>


type FoodDataType = {
    [FoodData:string | number]:string | number
}[]


type User = {
    id: string;
    name: string;
  };
export type {DocumentReferenceType,CollectionReferenceType,QuerySnapshotType,DocumentSnapshotType,FoodDataType,User}
