import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
    const transactionCollectionRef =collection(db,"transactions");
    const {userID}=useGetUserInfo();
    // const addTransaction =async ({
    //     description, 
    //     transactionAmount,
    //     transactionType,
    // }) => {
    //     await addDoc(transactionCollectionRef, {
    //         userID,
    //         description,
    //         transactionAmount,
    //         transactionType,
    //         createdAt: serverTimestamp(),
    //     });
    // };
    const addTransaction = async ({ description, transactionAmount, transactionType }) => {
        console.log("Transaction Data:", { description, transactionAmount, transactionType }); // Check if any of these is undefined
        if (!description || !transactionAmount || !transactionType) {
          console.error("Missing required fields.");
          return;
        }
      
        await addDoc(transactionCollectionRef, {
          userID,
          description,
          transactionAmount,
          transactionType,
          createdAt: serverTimestamp(),
        });
      };
    return {addTransaction};
};