import {
  Link as ChakraLink,
  Text,
  Flex,
  Box,
  List,
  ListIcon,
  ListItem,
  layout,
  Center,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { React } from "react";
import { Layout } from "../components/layout/layout";
import "@fontsource/merriweather/400.css";
import "@fontsource/lora/400.css";
import { Header } from "../components/layout/Header";
import ShopItems from "../components/ShopItems";

const Shop = () => (
  <Layout>
    <Header />
    <ShopItems />
  </Layout>
);

export default Shop;
