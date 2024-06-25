import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'
export const loadUsers = async () => {
	const querySnapshot = await getDocs(collection(db, "usuarios"));
	const users = querySnapshot.docs.map(doc => {
		return ({
			email: doc.data().email,
		})
	});
	return users
}