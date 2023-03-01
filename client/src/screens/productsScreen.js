import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import ProductCard from "../components/productCard";
import { products } from "../products";
function ProductsScreens() {
  return (
    <>
      <Wrap pt={10} spacing="45px" justify="center" minHeight="100vh">
        {products.map((i) => (
          <WrapItem key={i._id}>
            <Center w="250px" h="320px">
              <ProductCard product={i} />
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}

export default ProductsScreens;
