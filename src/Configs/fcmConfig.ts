import admin from "firebase-admin"

var serviceAccount = "./sos-app-6bd86-firebase-adminsdk-ewfsq-5a1430f510.json"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export const messaging = admin.messaging()