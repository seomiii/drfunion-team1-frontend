import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { ContentsInput, 
    PostTitle,
    PostTitleDiv,
    PostWriteDiv, 
    TitleInput,
    PostSubmit,
    PostSubmitDiv,
    MediaDiv } from './styledComponent';

    
const SubmitComponent = React.memo(({onSubmit}) => (
    <PostSubmitDiv>
      <PostSubmit onClick={onSubmit}>게시하기</PostSubmit>
    </PostSubmitDiv>
));


const WritePost = () => {
    // useState 만들기
    const [inputs, setInputs] = useState({
        title: '',
        contents: '',
    });

    // 2개를 동시에 관리하기 위한 객체
    const { title, contents } = inputs;

    const onChange=(e)=>{
        const {value,name}=e.target;
        setInputs({
            ...inputs,
            [name]:value,
        });
    };

    console.log(inputs);

    const navigate = useNavigate();

    const onSubmit=()=>{
        console.log('submit');
        navigate('/board'); 
    }

// const onSubmit = () => {
//     axios.post(`${apiUrl}/posts/`, {
//       title: inputs.title,
//       contents: inputs.contents,
//       repls: [],
//     }).then(() => {
//       navigate('../');
//     })
//   }


    return (
        <>
        <Header/>
        <MediaDiv>
            <PostTitleDiv>
                <PostTitle>고민 게시판</PostTitle>
            </PostTitleDiv>

            <PostWriteDiv>            
                <TitleInput
                name="title"
                value={title}
                type="text"
                placeholder="글 제목"
                onChange={onChange}
                />
        
                <ContentsInput 
                name="contents"
                value={contents}
                placeholder='고민을 입력해주세요.'
                cols='30'rows="10"
                onChange={onChange}
                />
            </PostWriteDiv>

            <SubmitComponent onSubmit={onSubmit}></SubmitComponent>           
            
        </MediaDiv>
        </>
    );
};

export default WritePost;