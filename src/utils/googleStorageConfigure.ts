import { Storage } from '@google-cloud/storage';

const storage = new Storage({
  projectId: process.env.NEXT_PUBLIC_GCP_PROJECT_ID,
  credentials: {
    private_key: process.env.NEXT_PUBLIC_GCP_PRIVATE_KEY,
    client_email: process.env.NEXT_PUBLIC_GCP_CLIENT_EMAIL
  }
});

export const bucket = storage.bucket(`${process.env.NEXT_PUBLIC_GCP_BUCKET_NAME}`);
