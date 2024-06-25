import { db } from '../firebase'
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from 'uuid';


export const createUser = async (value) => {
	try {
		const newUuid = uuid();
		await setDoc(doc(db, "administrador", newUuid), {
			...value,
		});
		console.log('Documento establecido en modo offline');
	} catch (error) {
		console.error('Error al establecer documento:', error);
	}
}