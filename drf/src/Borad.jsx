import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./style";

const Rec = styled.div`
  position: absolute;
  width: 1512px;
  height: 760px;
  left: 0px;
  top: 0px;

  background: #d1dcd1;
`;

const PostList = styled.div`
  position: absolute;
  width: 1349px;
  height: 1577px;
  left: 77px;
  top: 179px;

  background: #f5f5f5;
`;

const Rec2 = styled.div`
  position: absolute;
  width: 1512px;
  height: 517.5px;
  left: 0px;
  top: 1331.5px;

  background: #d1dcd1;
`;

const PostLink = styled.div`
  margin-left: 100px;
`;

const EachPostList = styled.div`
  margin: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Borad = () => {
  return (
    <>
      <Rec></Rec>
      <Rec2></Rec2>
      <PostList>
        <EachPostList>
          <PostLink>하이</PostLink>
        </EachPostList>
      </PostList>
    </>
  );
};

export default Borad;
