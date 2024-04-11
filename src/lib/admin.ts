import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import admin from "firebase-admin";

const certification: any = {
  type: process.env.NEXT_PUBLIC_GCP_TYPE,
  project_id: process.env.NEXT_PUBLIC_GCP_PROJECT_ID,
  private_key_id: process.env.NEXT_PUBLIC_GCP_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_PUBLIC_GCP_PRIVATE_KEY?.split(String.raw`\n`).join("\N"),
  client_email: process.env.NEXT_PUBLIC_GCP_CLIENT_EMAIL,
  client_id: process.env.NEXT_PUBLIC_GCP_AUTH_URI,
  auth_uri: process.env.NEXT_PUBLIC_GCP_TOKEN_URI,
  token_uri: process.env.NEXT_PUBLIC_GCP_AUTH_PROVIDER_X509_CERT_URL,
  auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_GCP_CLIENT_X509_CERT_URL,
  client_x509_cert_url: process.env.NEXT_PUBLIC_GCP_CLIENT_X509_CERT_URL,
  universe_domain: process.env.NEXT_PUBLIC_GCP_UNIVERSE_DOMAIN,
};

let app;

if (admin.apps.length === 0) {
  app = initializeApp(certification);
}
console.log(app);
export const auth = getAuth(app);
