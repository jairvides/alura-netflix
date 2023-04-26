import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useMovies = () => {
  const { data, error, isLoading, mutate } = useSwr('https://alura-netflix-lime.vercel.app/api/favorites', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useMovies;
