import request from './instance';

export const kakaoLogin = (authorizationCode?: string | string[]) => {
  console.log('또잉', authorizationCode);
  return request({
    url: '/req/members/login',
    method: 'post',
    withCredentials: false,
    data: {
      authorizationCode,
      oAuthType: 'KAKAO'
    }
  });
};
