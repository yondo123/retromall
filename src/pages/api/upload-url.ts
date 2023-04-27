import { bucket } from '../../utils/googleStorageConfigure';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const file = bucket.file(req.query.file as string);
  const options = {
    expires: Date.now() + 1 * 60 * 1000, //  1 minute,
    fields: { 'x-goog-meta-test': 'data' }
  };

  const [response] = await file.generateSignedPostPolicyV4(options);
  res.status(200).json(response);
}
