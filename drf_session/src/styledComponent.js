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
 font-family: 'Noto Sans';
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
