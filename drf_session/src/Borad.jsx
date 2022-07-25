import React, { useState } from "react";
//import styled from "styled-components";
//import { GlobalStyle } from "./style";
import { Routes, Route, Link } from "react-router-dom";
import PostView from "./PostView";
import EachPost from "./EachPost";
import Header from "./Header";
import Footer from "./Footer";
import {
  Rec2,
  Rec3,
  Rec,
  PostList,
  GominListName,
  PostMax,
  PagingSection,
  PagenumberDiv,
} from "./styleComponent.js";

const Borad = ({ items }) => {
  const { data } = items;
  //const [value, onChange] = useState();
  //let dataFile = {};
  //let dateCollection = [];
  //console.log(dataFile);

  //const
  return (
    <>
      <Header></Header>
      <Rec2></Rec2>
      <Rec3></Rec3>

      <Rec></Rec>
      <PostList>
        <GominListName>고민 목록</GominListName>
        <PostMax>
          {data.map((item) => (
            <EachPost
              key={item.id}
              id={item.id}
              title={item.title}
              author={item.author}
              category={item.category}
              createdAt={item.created_at}
            />
          ))}
        </PostMax>
        <PagingSection>
          <PagenumberDiv>2</PagenumberDiv>
        </PagingSection>
      </PostList>
    </>
  );
};

export default Borad;
