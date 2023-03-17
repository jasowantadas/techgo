import {
  Center,
  Wrap,
  WrapItem,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import ProductCard from "../components/productCard";
//import { products } from "../products";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import { useEffect } from "react";
import { productSelector } from "../redux/slices/product";

function ProductsScreens() {
  const dispatch = useDispatch();
  const productList = useSelector(productSelector); //*TEMp*study about useSelector
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Wrap pt={10} spacing="45px" justify="center" minHeight="100vh">
        {loading ? (
          <Spinner size="xl" thickness="2px" />
        ) : error ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>We are Sorry!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          products.map((i) => (
            <WrapItem key={i._id}>
              <Center w="250px" h="320px">
                <ProductCard product={i} />
              </Center>
            </WrapItem>
          ))
        )}
      </Wrap>
    </>
  );
}

export default ProductsScreens;
