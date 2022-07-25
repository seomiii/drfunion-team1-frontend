import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import items from "./mockup.json";

const PostBox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 1308px;
  height: 808px;
  left: 102px;
  top: 312px;

  border: 1px solid #202437;
`;

const GominPost = styled.div`
  position: absolute;
  width: 150px;
  height: 29px;
  left: 125px;
  top: 253px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #000000;
`;

const PostBoxName = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 1308px;
  height: 57px;
  left: 102px;
  top: 239px;

  border: 1px solid #202437;
`;

const PostBoxLine = styled.div`
  position: absolute;
  width: 1223.01px;
  height: 0px;
  left: 144px;
  top: 422px;

  border: 1px solid #6f6c6c;
`;

const CategoryBox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 127px;
  height: 41px;
  left: 163px;
  top: 448px;

  border: 1px solid #000000;
  border-radius: 20px;
`;

const ReplAdd = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 1248px;
  height: 60px;
  left: 102px;
  top: 1148px;

  border: 1px solid #202437;
`;

const CommentButton = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 60px;
  height: 60px;
  left: 1350px;
  top: 1148px;

  background: #e68d6c;
  border: 1px solid #000000;
`;

const CommentBox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 1308px;
  height: 500px;
  left: 102px;
  top: 1227px;

  border: 1px solid #000000;
`;

const PostView = () => {
  const { id } = useParams();
  const { data } = items;
  const [postData] = data.filter((item) => item.id === parseInt(id));

  return (
    <>
      {postData.comment.map((item) => {
        console.log(item);
      })}
      <GominPost>고민 게시판</GominPost>
      <PostBoxName>{postData.title}</PostBoxName>
      <PostBox></PostBox>
      <PostBoxLine />
      <CategoryBox></CategoryBox>
      <ReplAdd></ReplAdd>
      <CommentButton></CommentButton>
      <CommentBox></CommentBox>
    </>
  );
};

export default PostView;
