import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ItemList from "../src/component/ItemList";
import { Divider, Header, Dimmer, Loader } from "semantic-ui-react";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>My next app</title>
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

// PRE-rendering 정적 생성!!
export async function getStaticProps() {
  const apiUrl =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
