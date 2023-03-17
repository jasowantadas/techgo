//API
import axios from "axios";
import { setError, setLoading, setProducts } from "../slices/product";

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("api/products");
    dispatch(setProducts(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Somthing went Wrong! Please try again later"
      )
    );
  }
};
