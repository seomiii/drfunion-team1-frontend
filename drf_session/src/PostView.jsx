import React from "react";
//import styled from "styled-components";
import { useParams } from "react-router-dom";
import items from "./mockup.json";
import {
  GominPost,
  PostBoxName,
  PostBox,
  PostBoxLine,
  CategoryBox,
  ReplAdd,
  CommentButton,
  CommentBox,
} from "./styledComponent.js";

const PostView = () => {
  const { id } = useParams();
  const idd=useParams();
  console.log(idd);
  const { data, comment } = items;
  const [postData] = data.filter((item) => item.id === parseInt(id));
  
  return (
    <>
      <GominPost>고민 게시판</GominPost>
      {comment.map((item) => (
        <>
          <PostBoxName>title={item.title}</PostBoxName>
          <PostBox></PostBox>
          <PostBoxLine />
          <CategoryBox></CategoryBox>
          <ReplAdd></ReplAdd>
          <CommentButton></CommentButton>
          <CommentBox></CommentBox>
        </>
      ))}
    </>
  );
};

export default PostView;
