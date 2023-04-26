import useSwr from 'swr'

import fetcher from '@/libs/fetcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSwr('https://alura-netflix-lime.vercel.app/current', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  }
};

export default useCurrentUser;
