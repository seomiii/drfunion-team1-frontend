import styled from "styled-components";

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
  border: solid 1px #6f6c6c;
`;

export const TitleInput = styled.input`
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px;
  font-size: 24px;
  border: none;
  border-bottom: solid 1px #6f6c6c;
  outline: none;
`;

export const ContentsInput = styled.textarea`
  margin-top: 0px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px;
  height: 700px;
  font-size: 20px;
  border: none;
  font-family: "Noto San]s KR", sans-serif;
  outline: none;
`;

export const PostTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  align-items: center;
  border: 1px solid #6f6c6c;
  margin-top: 50px;
  margin-bottom: 10px;
`;
export const PostTitle = styled.span`
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: "Black Han Sans", sans-serif;
  font-size: 24px;
  margin-left: 10px;
`;

export const PostSubmitDiv = styled.div`
  width: 40%;
  margin: 0px auto;
  margin-top: 15px;
  border: 1px solid #6f6c6c;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
export const PostSubmit = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: "Black Han Sans", sans-serif;
  font-size: 20px;
`;

export const FooterDiv = styled.div`
  // position : fixed;
  margin-top: 30px;
  padding-bottom: 30px;
  padding-top: 60px;
  height: 150px;
  background-color: #04555d;
  justify-content: center;
  display: flex;
  color: white;
  width: 100%;
  //line-height:75px;
`;

export const FooterContents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-left: 5px;
`;

export const FooterLongContents = styled.div`
  //background-color:black;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 5px;
  width: 710px;
  margin-left: 5px;
`;
// -------------------login------------------

export const LoginDiv = styled.div`
  //background-color:#F5F5F5;
`;
export const Logo = styled.img`
  // background-color:green;
  margin-top: 136px;
`;

export const LoginTitle = styled.div`
  display: flex;
  font-size: 20px;
  margin-top: 59px;
  justify-content: center;
  //background-color: skyblue;
  padding: 30px;
  font-family: "Noto Sans";
`;

export const LoginInput = styled.input`
  font-size: 20px;
  margin-top: 18px;
  border: none;
  background-color: #d1dcd1;
  border-radius: 20px;
  outline: none;
  width: 553px;
  height: 79px;
  text-indent: 1em;
  :: placeholder {
    color: white;
  }
`;

export const LoginupDiv = styled.div`
  //background-color:green;
  margin-left: 120px;
  margin-bottom: 5px;
  margin-top: 52px;
  text-align: left;
`;

export const LoginupButton = styled.button`
  border: 0;
  outline: 0;
  font-size: 14px;
  margin-left: 44px;
  background-color: white;
`;

export const LoginSubmitDiv = styled.button`
  margin-top: 18px;
  border: 0;
  font-size: 20px;
  background-color: #04555d;
  border-radius: 20px;
  width: 553px;
  height: 79px;
  color: white;
`;

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

export const HomeTitle = styled.div`
  margin: 0px auto;
  margin-top: 194px;
  width: 1120px;
  font-size: 36px;
`;
export const HomeSearchDiv = styled.div`
  margin: 0px auto;
  width: 1120px;
  margin-top: 55px;
`;
export const HomeSearch = styled.input`
  font-size: 18px;
  width: 733px;
  height: 102px;
  border: none;
  background-color: #f5f5f5;
  text-indent: 1em;
`;
export const SearchButton = styled.button`
  font-size: 18px;
  color: white;
  background-color: #04555d;
  width: 370px;
  height: 102px;
  border: 0;
`;

export const FamousDiv = styled.div`
  //background-color:green;
  margin-top: 170px;
  margin-bottom: 73px;
  margin-left: 229px;
  margin-right: 229px;
`;

export const FamousTitle = styled.div`
  //background-color:skyblue;
  font-size: 20px;
  text-align: left;
  margin-bottom: 29px;
  margin-left: 10px;
`;
export const FamousGrid = styled.div`
  //background-color:green;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const Famous = styled.div`
  //background-color:skyblue;
  border: 1px solid #bfbbbb;
  border-radius: 40px;
  width: 350px;
  height: 208px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const HomeImage = styled.img`
  width: 100%;
  height: 501px;
  background-size: cover;
  postiion: relative;
`;

export const HomeButton = styled.button`
  position: absolute;
  top: 1422px;
  left: 930px;
  width: 181px;
  height: 60px;
  border: 1px solid #04555d;
  font-size: 16px;
  background-color: white;
  border-radius: 30px;
`;
export const HomeButton2 = styled.button`
  position: absolute;
  top: 1422px;
  left: 1151px;
  width: 181px;
  height: 60px;
  border: 1px solid #04555d;
  font-size: 16px;
  background-color: white;
  border-radius: 30px;
`;

//------Board ------

export const Rec = styled.div`
  height: 700px;
  left: 0px;
  top: 0px;

  background: #d1dcd1;
`;

export const PostList = styled.div`
  position: absolute;
  width: 1349px;
  height: 600px;
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

  font-family: "Noto Sans";
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

  font-family: "Noto Sans";
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
  width: 1310px;
  height: 808px;
  padding: 24px;
  border: 1px solid #202437;
`;

export const PostBoxDiv = styled.div`
  width: 1186px;
  height: 384px;
  padding: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #6f6c6c;
`;

export const GominPost = styled.div`
  width: 1308px;
  height: 57px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  display: flex;
  align-items: center;

  border: 1px solid #202437;
  color: #000000;
`;

export const PostBoxName = styled.div`
  height: 57px;
`;

export const PostBoxNameDiv = styled.span`
  box-sizing: border-box;
  width: 800px;
  height: 33px;
  left: 55px;
  top: 120px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 33px;
`;

export const PostBoxLine = styled.div`
  width: 1223.01px;
  height: 0px;
  border: 1px solid #6f6c6c;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const CategoryBox = styled.div`
  box-sizing: border-box;
  width: 127px;
  height: 41px;
  border: 1px solid #000000;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

export const CategoryBoxDiv = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export const ReplAdd = styled.input`
  box-sizing: border-box;
  width: 1310px;
  height: 60px;
`;

export const CommentButton = styled.div`
  box-sizing: border-box;
  width: 60px;
  height: 60px;

  background: #e68d6c;
  border: 1px solid #000000;
`;

export const CommentPro = styled.div`
  width: 50px;
  height: 50px;
  background: #d9d9d9;
  border-radius: 10px;
`;

export const ReCommentBox = styled.div``;

export const ReCommentBoxPro = styled.div`
  width: 50px;
  height: 50px;
  background: #d9d9d9;
  border-radius: 10px;
`;

export const PostContainer = styled.div`
  display: flex;
  padding: 12px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px 0px;
`;

export const ReplyAddContainer = styled.div`
  display: flex;
  width: 1310px;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 1310px;
  border: 1px solid #000000;
  padding: 24px;
`;

export const CommentAuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentInfoContainer = styled.div`
  display: flex;
  width: 500px;
  flex-direction: row;
  align-items: center;
`;

export const CommentBox = styled.div`
  box-sizing: border-box;
  width: 1308px;
  font-size: 18px;
  margin: 12px;
`;

export const CommentInfo = styled.div`
  box-sizing: border-box;
  width: 1308px;
  margin-left: 12px;
  font-weight: bold;
  font-size: 18px;
`;

export const ReplyCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 1200px;
  padding: 24px;
  margin-left: 64px;
  background: #f5f5f5;
  border: 1px solid #000000;
  margin-bottom: 12px;
`;

export const ReplyCommentInfo = styled.div`
  box-sizing: border-box;
  width: 1100px;
  margin-left: 12px;
  font-weight: bold;
  font-size: 18px;
`;
