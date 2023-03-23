import request from './instance';

export const kakaoLogin = (authorizationCode?: string | string[]) => {
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
