import type { Hashtag } from '../types';
const useHashtag = () => {
  const convertHashtagFormat = (hashtag: string): Hashtag => {
    return `#${hashtag}`;
  };

  return { convertHashtagFormat };
};

export default useHashtag;
