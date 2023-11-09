import admin from "firebase-admin"

const serviceAccount = "./sos-app-6bd86-firebase-adminsdk-ewfsq-0ce893fb9f.json"

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
})
export const messaging = admin.messaging()