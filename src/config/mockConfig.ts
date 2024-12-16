import { mockCustomerApi } from './customer';

export type MockApiHandler = (params: any) => any;

export interface MockApiConfig {
  name?: string;
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  delay?: number;
  handler: MockApiHandler;
}

const mockConfig: MockApiConfig[] = [
  {
    url: '/getData',
    method: 'GET',
    handler: (params) => {
      return { message: 'This is a GET request', params };
    }
  },
  {
    url: '/postData',
    method: 'POST',
    handler: (params) => {
      return { message: 'This is a POST request', data: params };
    }
  },
  // Thêm các endpoint khác ở đây
  ...mockCustomerApi
];

export default mockConfig;
