import {
  Image,
  Flex,
  Circle,
  Box,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Stack,
  Link,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { StarIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";

const Review = ({ rating, numberOfReviews }) => {
  return (
    <Flex>
      <HStack display={numberOfReviews < 1 ? "none" : true} pr={2}>
        <StarIcon color={rating >= 1 ? "orange" : "gray.400"} />
        <StarIcon color={rating >= 2 ? "orange" : "gray.400"} />
        <StarIcon color={rating >= 3 ? "orange" : "gray.400"} />
        <StarIcon color={rating >= 4 ? "orange" : "gray.400"} />
        <StarIcon color={rating >= 5 ? "orange" : "gray.400"} />
      </HStack>
      <Text fontWeight="bold" alignItems="center">
        {numberOfReviews < 1
          ? `No Review`
          : numberOfReviews > 1
          ? `${numberOfReviews} Reviews`
          : `${numberOfReviews} Review`}
      </Text>
    </Flex>
  );
};

function ProductCard({ product }) {
  return (
    <>
      <Stack
        p={4}
        spacing="3px"
        minW="250px"
        h="350px"
        bg={useColorModeValue("white", "gray.700")}
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {product.ProductisNew && (
          <Circle
            size="10px"
            top={2}
            right={2}
            bg="green.400"
            position="absolute"
          />
        )}
        {product.stock <= 0 && (
          <Circle
            size="10px"
            top={2}
            right={2}
            bg="red.400"
            position="absolute"
          />
        )}
        <Image src={product.image} roundedTop="lg" />
        <Box>
          {product.ProductisNew && (
            <Badge rounded="full" fontSize="0.8em" colorScheme="green">
              New
            </Badge>
          )}
          {product.stock <= 0 && (
            <Badge rounded="full" fontSize="0.8em" colorScheme="red">
              Sold out
            </Badge>
          )}
        </Box>
        <Flex justifyContent="space-between" alignContent="center">
          <Link as={ReactLink} to={`product${product._id}`} pt={2}>
            <Box flex={1} fontSize="2xl" fontWeight="semibold">
              {product.name}
            </Box>
          </Link> 
        </Flex>
        <Review rating={product.rating} numberOfReviews={product.numberOfReviews} />
        <Flex
          pt={2}
          position="absolute"
          bottom={3}
          alignItems="center"
          fontSize="large"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "white")}
        >
          <Text fontSize="medium" fontWeight="small">
            Rs:&nbsp;
          </Text>
          {product.price.toFixed(2)}
        </Flex>
        <Button
          position="absolute"
          bottom={2}
          right={2}
          variant="ghost"
          display="flex"
          rounded="lg"
          isDisabled={product.stock <= 0}
        >
          <Icon as={FiShoppingCart} alignSelf="center" />
        </Button>
      </Stack>
    </>
  );
}

export default ProductCard;
/*<Flex
          pt={2}
          justifyContent="space-between"
          alignItems="center"
          fontSize="large"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "white")}
        >
          Rs: {product.price.toFixed(2)}
          <Button
            variant="ghost"
            display="flex"
            rounded="lg"
            isDisabled={product.stock <= 0}
          >
            <Icon as={FiShoppingCart} size="large" alignSelf="center" />
          </Button>
        </Flex>*/
