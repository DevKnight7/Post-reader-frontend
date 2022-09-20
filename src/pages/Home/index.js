import React, { useEffect, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import styles from "./Home.module.scss";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = ({ incompleteDataError, setIncompleteDataError }) => {
  const [postId, setPostId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (incompleteDataError) {
      toast.error("Post data is incomplete.");
      setIncompleteDataError(false);
    }
  }, [incompleteDataError]);

  const handleReadPost = () => {
    if (postId <= 0) {
      toast.error("Post id must be greater than 0");
      return;
    }
    navigate(`/post/${postId}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Post Reader App</div>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="number"
          placeholder="Enter Post ID - Must Be A Number"
          onChange={(e) => {
            setPostId(e.target.value);
          }}
        />
        <div className={styles.buttonWrapper}>
          <PrimaryButton onClick={handleReadPost} text={"Read Post"} />
        </div>
      </form>
      <div className={styles.spacer}></div>
    </div>
  );
};

export default Home;
