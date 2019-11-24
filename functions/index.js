const functions = require('firebase-functions');
const { ImageAnnotatorClient } = require('@google-cloud/vision');

exports.processImage = functions.storage.object().onFinalize(async (object) => {
  const client = new ImageAnnotatorClient();
  const gcsUri = `gs://${object.bucket}/${object.name}`;

  const [result] = await client.objectLocalization(gcsUri);
  const objects = result.localizedObjectAnnotations;
  objects.forEach(object => {
    console.log(`Name: ${object.name}`);
    // console.log(`Confidence: ${object.score}`);
    // const vertices = object.boundingPoly.normalizedVertices;
    // vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
  });
});