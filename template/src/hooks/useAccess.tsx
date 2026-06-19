
import { useStore } from "../services";
import { get } from "lodash";


const useAccess = (role: any): any => {
  const { user } = useStore();
  return  get(user, "data.role", []).includes(role)
}

export default useAccess;
