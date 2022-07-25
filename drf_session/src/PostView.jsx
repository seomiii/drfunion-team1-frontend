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
  PostBoxNameDiv,
  Rec2,
  Rec3,
  CategoryBoxDiv,
  PostBoxDiv,
  CommentPro,
  ReCommentBox,
  ReCommentBoxPro,
  ReplyAddContainer,
  CommentContainer,
  CommentAuthorContainer,
  CommentInfo,
  CommentBoxDiv,
} from "./styleComponent.js";
import Header from "./Header";
//import Comments from "./Comments";

const PostView = () => {
  const { id } = useParams();
  const { data } = items;
  const [postData] = data.filter((item) => item.id === parseInt(id));

  return (
    <>
      <Header></Header>
      <Rec2></Rec2>
      <Rec3></Rec3>
      <GominPost>고민 게시판</GominPost>
      <PostBoxName>
        <PostBoxNameDiv>{postData.title}</PostBoxNameDiv>
      </PostBoxName>
      <PostBox>
        <PostBoxDiv>{postData.content}</PostBoxDiv>
      </PostBox>
      <PostBoxLine />
      <CategoryBox>
        <CategoryBoxDiv>{postData.category}</CategoryBoxDiv>
      </CategoryBox>
      <ReplyAddContainer>
        <ReplAdd placeholder="댓글을 입력하세요."></ReplAdd>
        <CommentButton></CommentButton>
      </ReplyAddContainer>

      {postData?.comment?.map((item, idx) => (
        <CommentContainer key={idx}>
          <CommentAuthorContainer>
            <CommentPro></CommentPro>
            <CommentInfo>{item.author}</CommentInfo>
          </CommentAuthorContainer>
          <CommentBox>
            <CommentBoxDiv>{item.content}</CommentBoxDiv>
          </CommentBox>
        </CommentContainer>
      ))}
    </>
  );
};

export default PostView;
