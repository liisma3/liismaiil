import { useContext } from 'react';
import { SliceContext } from '@/store/contexts/SliceContext'
const useSlice = () => {
  return useContext(SliceContext);
};

export default useSlice