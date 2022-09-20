import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import axios from "axios";
import styles from "./Detail.module.scss";
import { MoonLoader } from "react-spinners";

const Detail = ({ setIncompleteDataError }) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(undefined);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getPostById = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/posts/${postId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (postId) {
      setLoading(true);
      getPostById(postId)
        .then((_post) => {
          setPost(_post);
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
          setErrorMessage(error.response.data.message);
          setLoading(false);
        });
    }
  }, [postId]);

  useEffect(() => {
    if (post && (post.title === null || post.body === null)) {
      navigate("/");
      setIncompleteDataError(true);
    }
  }, [post]);

  return (
    <Layout>
      <div className={styles.wrapper}>
        {loading && !post ? (
          <div className={styles.loaderWrapper}>
            <MoonLoader color="#22a6b3" />
          </div>
        ) : null}
        {!loading && post ? (
          <div className={styles.post}>
            <div className={styles.title}>{post?.title}</div>
            <div className={styles.body}>{post?.body}</div>
          </div>
        ) : null}
        {!loading && error ? (
          <div className={styles.errorWrapper}>
            <div className={styles.error}>{errorMessage}</div>
          </div>
        ) : null}
        <div className={styles.spacer}></div>
      </div>
    </Layout>
  );
};

export default Detail;
