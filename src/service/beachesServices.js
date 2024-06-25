import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'
export const loadBeaches = async () => {
	const querySnapshot = await getDocs(collection(db, "playas"));
	const playasArray = querySnapshot.docs.map(doc => ({
		id: doc.id,
		name: doc.data().name,
		images: doc.data().images,
		location: doc.data().location
	}));

	return playasArray
}
