const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// const firestore = admin.firestore();

exports.getAllWords = functions.https.onRequest(async (request, response) => {
  const snapshot = await admin
    .firestore()
    .collection("words")
    .get();

  const words = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  response.json({ words });
});

exports.sanitizeContent = functions.firestore
  .document("words/{wordId}")
  .onWrite(async change => {
    if (!change.after.exists) return;

    const { expected, sanitized } = change.after.data();

    if (expected && !sanitized) {
      return change.after.ref.update({
        expected: expected.toUpperCase(),
        sanitized: true
      });
    }

    return null;
  });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });
