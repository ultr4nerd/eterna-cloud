import firebase from './firebase';
import {
  gcsUri2Url
} from './storage';
const db = firebase.firestore();

async function getImages() {
  try {
    const snapshot = await db.collection('images').get();
    const images = await snapshot.docs.map(async doc => {
      const imageData = doc.data();
      const url = await gcsUri2Url(imageData.gcsUri);
      return {
        url,
        id: doc.id,
        ...imageData,
      }
    });
    return await Promise.all(images);
  } catch (err) {
    console.log('Error getting documents', err);
  }
}

export {
  getImages
}