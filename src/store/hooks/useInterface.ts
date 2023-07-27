import { useContext } from "react";
import { InterfaceContext } from "@/store/contexts/InterfaceContext";

const useInterface = () => useContext(InterfaceContext);

export default useInterface;
