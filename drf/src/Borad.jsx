import React, { useState } from "react";
import styled from "styled-components";
//import { GlobalStyle } from "./style";
import { Routes, Route, Link } from "react-router-dom";
import PostView from "./PostView";
import EachPost from "./EachPost";

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

  background: white;
`;

const Rec3 = styled.div`
  position: absolute;
  width: 1512px;
  height: 150px;
  left: 0px;
  top: 0px;

  background: #d1dcd1;
`;

/* const PostName = styled.div`
  margin: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostLink = styled.div`
  position: absolute;
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

  opacity: 0.7;
`;

/* const PostAuthor = styled.div`
  position: absolute;
  width: 45px;
  height: 22px;
  left: 1067px;
  top: 357px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height 

  color: #6f6c6c;
`;*/

/* const PostLine = styled.div`
  position: absolute;
  width: 1099px;
  height: 0px;
  left: 211px;
  top: 387px;

  border: 1px solid #d1dcd1;
  transform: rotate(0.16deg);
`;*/

const GominListName = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  left: 147px;
  top: 78px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
`;

const PagingSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px auto;
  width: 150px;
  margin-top: 20px;
`;
//맨 밑에 페이지넘버
const PagenumberDiv = styled.div`
  position: absolute;
  width: 10px;
  height: 22px;
  left: 744px;
  top: 1463px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
`;

const Borad = ({ items }) => {
  const { data } = items;
  //const [value, onChange] = useState();
  //let dataFile = {};
  //let dateCollection = [];
  //console.log(dataFile);

  //const
  return (
    <>
      <Rec3></Rec3>
      <Rec2></Rec2>

      <Routes>
        <Route path="/postview/:postviewID" element={<PostView />}></Route>
        <Route
          path="/"
          element={
            <>
              <Rec></Rec>
              <PostList>
                <GominListName>고민 목록</GominListName>
                <ul>
                  {data.map((item) => (
                    <EachPost
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      author={item.author}
                      category={item.category}
                      createdAt={item.created_at}
                      /*이 부분이 이유는 모르겠지만 자꾸 두개로 겹치더라구요..! 이거 왜 그런건지 꼭 알고 싶습니다
                      !*/
                    />
                  ))}
                </ul>
                <PagingSection>
                  <PagenumberDiv>2</PagenumberDiv>
                </PagingSection>
              </PostList>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default Borad;
