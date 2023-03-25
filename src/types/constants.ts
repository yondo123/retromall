type Constants = {
  colors: Record<ColorTokens, `#${string}`>;
  urls: Record<UrlTokens, string>;
};

export type UrlTokens = 'kakao';
export type ColorTokens = 'font' | 'border' | 'primary' | 'secondary' | 'tertiary' | 'accent' | 'white' | 'black';

export const constants: Constants = {
  colors: {
    font: '#2f4858',
    border: '#dfe0df',
    primary: '#f78018',
    secondary: '#c55089',
    tertiary: '#825795',
    accent: '#f2585e',
    white: '#fff',
    black: '#000'
  },
  urls: {
    kakao: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_DEV}`
  }
};
