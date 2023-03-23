import { useRouter } from 'next/router';

export const useRouterHandler = () => {
  const router = useRouter();
  const handleBackButton = () => {
    router.back();
  };

  return { handleBackButton };
};
