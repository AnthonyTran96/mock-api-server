import mockConfig from '@/config/mockConfig';
import { delayFakeData } from '@/utils/mock-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import corsMiddleware from '../../../../middleware';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await corsMiddleware(req, res, () => {});

  const BASE_API = '/api/mock';

  const { method, url } = req;

  // Tìm endpoint tương ứng
  const endpoint = mockConfig.find(
    (endpoint) => BASE_API + endpoint.url === url && endpoint.method === method
  );

  if (!endpoint) {
    return res.status(404).json({ error: 'API not found' });
  }

  // Xử lý request
  const result = await delayFakeData(
    endpoint.handler(req.method === 'GET' ? req.query : req.body),
    endpoint.delay
  );

  return res.status(200).json(result);
}
