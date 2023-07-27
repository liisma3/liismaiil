// Top level App component
import { useContext } from "react";
import { guestContext } from '@/store/contexts/GuestContext'

const useGuest = () => {
  return useContext(guestContext);
};
export default useGuest