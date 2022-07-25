import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Img/logo.png";
import { useNavigate } from 'react-router-dom';

const HeaderMain = styled.div`
  width: 1512px;
  height: 70px;
  left: 0px;

  border: 1px solid #f5f5f5;
  background-color: #f5f5f5;
`;

const LogoDiv = styled.div`
  margin: 100px 0px;
`;

const LoginDiv = styled.div`
  position: absolute;
  width: 80px;
  height: 22px;
  left: 1368px;
  top: 20px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

const IdBox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 80px;
  height: 31px;
  left: 1344px;
  top: 16px;
  text-align: center;

  border: 1px solid #000000;
  border-radius: 20px;
`;

const Header = () => {
  const navigate = useNavigate();
  
  const goHome=()=>{
    navigate('/');
  }

  return (
    <>
      <HeaderMain>
        <img onClick={goHome}
          src={Logo}
          style={{
            margin: "20px 10px 0px",
          }}
        />
      </HeaderMain>
      <IdBox>Longin</IdBox>
    </>
  );
};

export default Header;
