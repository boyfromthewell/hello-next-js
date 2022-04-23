import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  useEffect(() => {
    if (id && id > 0) {
      axios.get(API_URL).then((res) => {
        console.log(res.data);
      });
    }
  }, [id]);
  return <p>Post: {id}</p>;
};

export default Post;
