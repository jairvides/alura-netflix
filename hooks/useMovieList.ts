import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useMovies = () => {
  const { data, error, isLoading } = useSwr('https://alura-netflix-lime.vercel.app/api/movies', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useMovies;
