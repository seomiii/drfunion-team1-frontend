import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const PostLink = styled(Link)`
  width: 500px;
  height: 27px;
  left: 322px;
  top: 173px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;

  color: #000000;
`;

const PostName = styled.div`
  display: flex;

  justify-content: space-between;
`;

const PostLine = styled.div`
  width: 1340px;
  height: 0px;
  left: 130px;
  top: 254px;

  border: 1px solid #d1dcd1;
  transform: rotate(0.16deg);
`;

const PostAuthor = styled.span`
  width: 45px;
  height: 22px;
  left: 986px;
  top: 178px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

const PostCate = styled.span`
  width: 26px;
  height: 19px;
  margin-left: 0px;
  top: 177px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  /* line-height: 19px; */
  /* identical to box height */

  color: #6f6c6c;
`;
//날짜
const PostDate = styled.div`
  width: 100px;
  height: 30px;
  left: 1116px;
  top: 178px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #6f6c6c;
`;

const PostId = styled.div`
  width: 28px;
  height: 22px;
  left: 206px;
  top: 178px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  color: #000000;
`;

const EachPost = ({ title, id, author, category, createdAt }) => {
  const formattedCreatedAt = format(new Date(createdAt), "yyyy-MM-dd");
  return (
    <>
      <PostName>
        <PostId>{id}</PostId>

        <PostLink to={`/postview/${id}`}>{title}</PostLink>
        <PostCate>{category}</PostCate>

        <PostAuthor>{author}</PostAuthor>

        <PostDate>{formattedCreatedAt}</PostDate>
      </PostName>
      <PostLine />
    </>
  );
};

export default EachPost;
