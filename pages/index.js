import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ItemList from "../src/component/ItemList";
import { Divider, Header, Dimmer, Loader } from "semantic-ui-react";

export default function Home() {
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      console.log(res);
      setList(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>my next app</title>
      </Head>
      {loading && (
        <div style={{ paddingTop: 40 }}>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </div>
      )}
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
    </div>
  );
}
