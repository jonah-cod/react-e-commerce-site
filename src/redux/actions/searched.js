import { addtocart, searched} from "../types";

export const searchedAction = (search) => {
  return {
    type: searched,
    payload: search,
  };
};