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
  font-family: 'Noto San]s KR', sans-serif;
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
  font-family: 'Black Han Sans', sans-serif;
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
  font-family: 'Black Han Sans', sans-serif;
  font-size: 20px;
  
`;

export const FooterDiv = styled.div`
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