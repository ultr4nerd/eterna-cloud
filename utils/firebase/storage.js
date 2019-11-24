import firebase from './firebase';


async function uploadImage(file) {
  const storageRef = firebase.storage().ref();
  const imageRef = storageRef.child(`images/${file.name}`);
  return await imageRef.put(file);
}

async function gcsUri2Url(gcsUri) {
  try {
    const url = await firebase.storage().refFromURL(gcsUri).getDownloadURL();
    console.log(url);
    return url;
  } catch (error) {
    console.error(error);
  }
}

export {
  uploadImage,
  gcsUri2Url
};