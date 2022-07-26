import React from "react";
//import styled from "styled-components";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
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
  CommentInfoContainer,
  PostContainer,
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
      <Rec3></Rec3>
      <PostContainer>
        <GominPost>고민 게시판</GominPost>

        <>
          <PostBox>
            <PostBoxName>
              <PostBoxNameDiv>{postData.title}</PostBoxNameDiv>
            </PostBoxName>
            <PostBoxLine />
            <CategoryBox>
              <CategoryBoxDiv>{postData.category}</CategoryBoxDiv>
            </CategoryBox>
            <PostBoxDiv>{postData.content}</PostBoxDiv>
          </PostBox>
        </>

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
            <CommentBox>{item.content}</CommentBox>
            <CommentInfoContainer>
              <CommentBox>
                {`날짜 : ${format(new Date(item.created_at), "yy-MM-dd")}`}
              </CommentBox>
              <CommentBox>{`좋아요 수 : ${item.like}`}</CommentBox>
            </CommentInfoContainer>
          </CommentContainer>
        ))}
      </PostContainer>
    </>
  );
};

export default PostView;
