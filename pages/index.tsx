import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { Product } from "../utilities/types";
import Navigation from "../components/Navigation/Navigation";
import Cart from "../components/Cart/Cart";
import { BackDrop } from "../components/Cart/Cart.styles";
import Body from "../components/Body/Body";
import { ProductService } from "../services/ProductService";

const Home = ({ products, error,currency,cart }: { products: Product[]; error: boolean,currency: string,cart:boolean}) => {
  const [cartOpen, setCartOpen] = useState<boolean>(cart);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Cart open={cartOpen} close={setCartOpen} products={products} currentCurrency={currency}/>
      {cartOpen ? <BackDrop /> : null}
      <Navigation toggleCart={setCartOpen} cartOpen={cartOpen} />
      <Body products={products}  currency={currency}/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const _productService = new ProductService();
  const currency = ctx.query.currency ? ctx.query.currency as string : 'NGN';

  try {
    const { data } = await _productService.getAllProducts(currency);
    console.log({ data });
    return {
      props: {
        products: data,
        error: false,
        currency,
        cart:ctx.query.cart ? ctx.query.cart as unknown as boolean : false
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: true,
        products: null,
      },
    };
  }
};

export default Home;
