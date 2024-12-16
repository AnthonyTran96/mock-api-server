
export interface RequestCaptchaResult {
  encodedImage: string;
  serviceKey: string;
}

export interface VerifyCaptchaParams {
  captchaValue: string;
  serviceKey: string;
}

export interface VerifyCaptchaResult {
  dbpErrCode?: string;
  dbpErrMsg?: string;
  encodedImage?: string;
}


export interface ValidateAllowMeParams {
  token: string;
  allowMe: string;
}

export interface ValidateAllowMeResult {
  dbpErrCode?: string;
  dbpErrMessage?: string;
  errorMessage?: string;
  opstatus?: number;
  dbpErrMsg?: string;
  httpStatusCode?: number;
  allowMe?: string;
  message?: string;
  status?: string;
}