import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import admin from "firebase-admin";

const certification: any = {
  type: process.env.GCP_TYPE,
  project_id: process.env.GCP_PROJECT_ID,
  private_key_id: process.env.GCP_PRIVATE_KEY_ID,
  private_key: process.env.GCP_PRIVATE_KEY?.split(String.raw`\n`).join("\n"),
  client_email: process.env.GCP_CLIENT_EMAIL,
  client_id: process.env.GCP_AUTH_URI,
  auth_uri: process.env.GCP_TOKEN_URI,
  token_uri: process.env.GCP_AUTH_PROVIDER_X509_CERT_URL,
  auth_provider_x509_cert_url: process.env.GCP_CLIENT_X509_CERT_URL,
  client_x509_cert_url: process.env.GCP_CLIENT_X509_CERT_URL,
  universe_domain: process.env.GCP_UNIVERSE_DOMAIN,
};


export const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(certification),
});

export const auth = getAuth();
