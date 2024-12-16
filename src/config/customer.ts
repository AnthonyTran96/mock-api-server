import {
  fakeGenCaptcha,
  fakeValidateAllowMe
} from '@/data/customer';
import {
  RequestCaptchaResult,
  ValidateAllowMeParams,
  ValidateAllowMeResult,
  VerifyCaptchaParams,
  VerifyCaptchaResult
} from '@/model/customer/customer';
import { MockApiConfig } from './mockConfig';

export const mockCustomerApi: MockApiConfig[] = [
  {
    name: 'validateAllowMeRequest',
    url: '/services/data/v1/PvbCustomerSme/operations/PvbSmeVerify/validateAllowMeRequest',
    method: 'POST',
    handler: (params: ValidateAllowMeParams): ValidateAllowMeResult => {
      if (params.allowMe === 'false') {
        return { ...fakeValidateAllowMe, allowMe: 'false' };
      }
      return fakeValidateAllowMe;
    }
  },
  {
    name: 'requestCaptcha',
    url: '/services/data/v1/PvbSmeCaptchaObj/operations/Captcha/generateCaptcha',
    method: 'POST',
    handler: (): RequestCaptchaResult => {
      return fakeGenCaptcha;
    }
  },
  {
    name: 'verifyCaptcha',
    url: '/services/data/v1/PvbSmeCaptchaObj/operations/Captcha/verifyCaptcha',
    method: 'POST',
    handler: (params: VerifyCaptchaParams): VerifyCaptchaResult => {
      return {};
    }
  }
];
