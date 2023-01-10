import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import CommentsForm from "./CommentsForm";

import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const { login } = useContext(UserContext);
  const [comments, setComments] = useState(() => props.comments);

  return (
    <>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      <div>{login && <CommentsForm id={props.id} setComments={setComments} />}</div>
    </>
  );
};

export default PhotoComments;
