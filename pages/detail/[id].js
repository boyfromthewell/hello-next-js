import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item.js";
import { Dimmer, Loader } from "semantic-ui-react";
const Post = ({ item, name }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }
  /*const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (id && id > 0) {
      axios.get(API_URL).then((res) => {
        console.log(res.data);
        setItem(res.data);
        setLoading(false);
      });
    }
  }, [id]);*/

  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      {name} 환경입니다.
      {item && <Item item={item} />}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const apiUrl =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    /* paths: [
      { params: { id: "495" } },
      { params: { id: "488" } },
      { params: { id: "477" } },
    ], */
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
