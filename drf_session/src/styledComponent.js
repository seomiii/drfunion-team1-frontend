import styled from 'styled-components';

export const MediaDiv = styled.div`
  margin: 0px auto;
  min-height: 100vh;

  width: 768px;
//   color: ${(props) => props.theme.fontColor};
//   background-color: ${(props) => props.theme.bgColor};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PostWriteDiv = styled.div`
  width: 100%;
  display: flex;
 

  //background-color:skyblue;
  flex-direction: column;
  border: solid 1px #6F6C6C;
`;

export const TitleInput = styled.input`
  margin-top: 10px;
  margin-left : 30px;
  margin-right: 30px;

  padding: 10px;
  font-size: 24px;
  
  border:none;
  border-bottom: solid 1px #6F6C6C;
  outline:none;
`;

export const ContentsInput = styled.textarea`
  margin-top: 0px;
  margin-left : 30px;
  margin-right: 30px;
  padding: 10px;
  height: 700px;
  font-size : 20px;
  border: none;
  font-family: 'Noto Sans KR', sans-serif;
  outline:none;
`;

export const PostTitleDiv = styled.div`
  
  display: flex;
  flex-direction: row;
 // justify-content: space-around;
  align-items: center;
  border: 1px solid #6F6C6C;

  margin-top : 50px;
  margin-bottom : 10px;

  
`;
export const PostTitle = styled.span`
  margin-top: 10px;
  margin-bottom: 5px;
  
  font-size: 24px;
  margin-left : 10px;
  
`;

export const PostSubmitDiv = styled.div`
  width: 40%;
  margin: 0px auto;
  margin-top: 15px;  
  border: 1px solid #6F6C6C;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
export const PostSubmit = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  
  font-size: 20px;
  
`;

export const FooterDiv = styled.div`
  // position : fixed;
  margin-top : 30px;
  padding-bottom: 30px;
  padding-top:60px;
  height: 150px;
  background-color: #04555D;
  justify-content: center;
  display:flex;
  color: white;
  width:100%;
  //line-height:75px;
`

export const FooterContents = styled.div`
  display: flex;
  flex-direction: column;
  padding :5px;
  margin-left: 5px; 
  
`

export const FooterLongContents=styled.div`
    //background-color:black;
    display: flex;
    flex-direction: column;
    text-align:left;
    padding :5px;
    width: 710px; 
    margin-left: 5px;   

`
// -------------------login------------------

export const LoginDiv=styled.div`
  //background-color:#F5F5F5;
`
export const Logo=styled.img`
  // background-color:green;
  margin-top:136px;

`

export const LoginTitle=styled.div`
 display:flex;
 font-size: 20px;
margin-top:59px;
 justify-content: center;
 //background-color: skyblue;
 padding : 30px;
 
`

export const LoginInput = styled.input`   
  font-size: 20px;
  
  margin-top:18px;
  border:none;
  background-color: #D1DCD1;
  border-radius: 20px;
  outline:none;

  width: 553px;
  height: 79px;
  text-indent:1em;

  :: placeholder {color:white;}
`;

export const LoginupDiv=styled.div`
  //background-color:green;
  margin-left:120px;
  margin-bottom:5px;
  margin-top: 52px;
  text-align:left;
  
`

export const LoginupButton = styled.button`
  border:0;
  outline:0;
  font-size:14px;
  margin-left:44px;
  background-color:white;
`

export const LoginSubmitDiv = styled.button`
  margin-top:18px;
  border: 0;
  font-size:20px;
  background-color: #04555D;
  border-radius: 20px;
  width: 553px;
  height: 79px;
  color: white;  `

// ---------------------------HOME-----------------------------
export const HomeDiv = styled.div`
  margin: 0px auto;
  min-height: 100vh;
  width: 1512px;
//   color: ${(props) => props.theme.fontColor};
//   background-color: ${(props) => props.theme.bgColor};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HomeTitle=styled.div`
margin: 0px auto;
  margin-top:194px;
  width:1120px;
  font-size:36px;
`
export const HomeSearchDiv=styled.div`
  margin: 0px auto;
  width: 1120px;
  margin-top: 55px;
  
`
export const HomeSearch = styled.input`
  font-size:18px;
  width:733px;
  height:102px;
  border: none;
  background-color: #F5F5F5;
  text-indent:1em;
  outline:none;
`
export const SearchButton=styled.button`
  font-size:18px;
  color:white;
  background-color: #04555D;
  width:370px;
  height:102px;
  border:0;
`

export const FamousDiv=styled.div`
  //background-color:green;
  margin-top: 170px;
  margin-bottom: 73px;
  margin-left: 229px;
  margin-right:229px;

`

export const FamousTitle=styled.div`
  //background-color:skyblue;
  font-size: 20px;
  text-align:left; 
  margin-bottom:29px;
  margin-left:10px;

`
export const FamousGrid=styled.div`
  //background-color:green;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(3, 1fr);
  grid-gap:10px;
`

export const Famous=styled.div`
  //background-color:skyblue;  
  border: 1px solid #BFBBBB;
  border-radius:40px;
  width:350px;
  height:208px;
  
  display:flex;
  align-items : center;
  text-align:center;
  justify-content: center;

`
export const HomeImage=styled.img`
  width: 100%;
  height:501px;
  background-size:cover;
  postiion : relative;
  margin-bottom:134px;
`

export const HomeButton=styled.button`
  position: absolute;
  top: 1422px;
  left: 930px;

  width:181px;
  height:60px;
  border: 1px solid #04555D;
  font-size:16px;
  background-color:white;
  border-radius: 30px;
`
export const HomeButton2=styled.button`
  position: absolute;
  top: 1422px;
  left: 1151px;

  width:181px;
  height:60px;
  border: 1px solid #04555D;
  font-size:16px;
  background-color:white;
  border-radius: 30px;
`
//------Board ------

export const Rec = styled.div`
  width: 1512px;
  height: 700px;
  left: 0px;
  top: 0px;

  background: #d1dcd1;
`;

export const PostList = styled.div`
  position: absolute;
  width: 1349px;
  height: 1577px;
  left: 77px;
  top: 179px;

  background: #f5f5f5;
`;

export const Rec2 = styled.div`
  position: absolute;
  width: 1512px;
  height: 500px;
  left: 0px;
  top: 1331.5px;

  background: white;
`;

export const Rec3 = styled.div`
  width: 1512px;
  height: 110px;
  left: 0px;
  top: 0px;

  background: #d1dcd1;
`;

export const GominListName = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  left: 147px;
  top: 78px;

  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
`;

export const PagingSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px auto;
  width: 150px;
  margin-top: 20px;
`;
//맨 밑에 페이지넘버
export const PagenumberDiv = styled.div`
  position: absolute;
  width: 10px;
  height: 22px;
  left: 744px;
  top: 1463px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
`;

export const PostMax = styled.div`
  margin-top: 150px;
`;

//---PostView---
export const PostBox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 1308px;
  height: 808px;
  left: 102px;
  top: 312px;

  border: 1px solid #202437;
`;

export const GominPost = styled.div`
  position: absolute;
  width: 150px;
  height: 29px;
  left: 125px;
  top: 253px;

  
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #000000;
`;

export const PostBoxName = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 1308px;
  height: 57px;
  left: 102px;
  top: 239px;

  border: 1px solid #202437;
`;

export const PostBoxLine = styled.div`
  position: absolute;
  width: 1223.01px;
  height: 0px;
  left: 144px;
  top: 422px;

  border: 1px solid #6f6c6c;
`;

export const CategoryBox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 127px;
  height: 41px;
  left: 163px;
  top: 448px;

  border: 1px solid #000000;
  border-radius: 20px;
`;

export const ReplAdd = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 1248px;
  height: 60px;
  left: 102px;
  top: 1148px;

  border: 1px solid #202437;
`;

export const CommentButton = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 60px;
  height: 60px;
  left: 1350px;
  top: 1148px;

  background: #e68d6c;
  border: 1px solid #000000;
`;

export const CommentBox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 1308px;
  height: 500px;
  left: 102px;
  top: 1227px;

  border: 1px solid #000000;
`;
