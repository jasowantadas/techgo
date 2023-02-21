import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiAutoRepair } from "react-icons/gi";

function NaVBar() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const links = [
    { linkName: "Products", path: "/products" },
    { linkName: "ShopingCart", path: "/cart" },
  ];
  const NavLink = ({ path, content }) => (
    <Link
      as={ReactLink}
      to={path}
      px={2}
      py={2}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"), //IMPORTANT CONCEPT
      }}
    >
      {content}
    </Link>
  );
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack>
          <Link as={ReactLink} to="/" _hover={{ textDecoration: "none" }}>
            <Flex alignItems="center">
              <Icon as={GiAutoRepair} h={6} w={6} color="orange.400" />
              <Text fontWeight="extrabold">TechGO</Text>
            </Flex>
          </Link>
          <HStack display={{ base: "none", md: "inline-flex" }}>
            {links.map((i) => (
              <NavLink key={i.linkName} path={i.path} content={i.linkName} />
            ))}
          </HStack>
        </HStack>
        <Flex alignContent="center">
          <IconButton
            alignSelf="center"
            size="sm"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={() => toggleColorMode()}
          />
          <Button
            p={2}
            as={ReactLink}
            to="/login"
            alignSelf="center"
            variant="link"
            fontSize="sm"
            fontWeight={400}
            _hover={{ textDecoration: "none" }}
          >
            Sign in
          </Button>
          <Button
            p={2}
            as={ReactLink}
            display={{ base: "none", md: "inline-flex" }}
            to="/registration"
            alignSelf="center"
            bg="orange.500"
            _hover={{ bg: "orange.400" }}
            fontSize="sm"
            fontWeight={400}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box>
          <Stack as="nav" display={{ md: "none", base: "flex" }} spacing={4}>
            {links.map((i) => (
              <NavLink key={i.linkName} path={i.path} content={i.linkName} />
            ))}
            <NavLink key="signup" path="/registration" content="Sign Up" />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default NaVBar;
