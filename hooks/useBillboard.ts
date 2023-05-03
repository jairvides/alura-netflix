import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useBillboard = () => {
  const { data, error, isLoading } = useSwr('https://alura-netflix-lime.vercel.app/api/random', fetcher, { 
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

export default useBillboard;
