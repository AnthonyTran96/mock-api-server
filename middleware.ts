import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Cấu hình CORS
const cors = Cors({
  // methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  methods: ['POST'],
  origin: '*', // Thay '*' bằng danh sách các origin bạn muốn cho phép
  credentials: true // Cho phép gửi cookie nếu cần
});

// Helper để chạy middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function corsMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) {
  await runMiddleware(req, res, cors);
  next();
}
