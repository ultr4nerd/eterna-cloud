import firebase from './firebase';

async function uploadImage(file) {
  const storageRef = firebase.storage().ref();
  const imageRef = storageRef.child(`images/${file.name}`);
  return await imageRef.put(file);
}

export {
  uploadImage
};