const functions = require('firebase-functions');
const admin = require('firebase-admin');
const {
  ImageAnnotatorClient
} = require('@google-cloud/vision');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.processImage = functions.storage.object().onFinalize(async (object) => {
  const client = new ImageAnnotatorClient();
  const gcsUri = `gs://${object.bucket}/${object.name}`;

  const [result] = await client.objectLocalization(gcsUri);
  const objects = result.localizedObjectAnnotations;
  const docRef = db.collection('images').doc();
  const setAda = docRef.set({
    gcsUri: gcsUri,
    objects: objects.map(object => object.name),
    timestamp: admin.firestore.FieldValue.serverTimestamp()
  });
});