import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeSearchDiv, HomeTitle, SearchButton,HomeSearch, HomeImage, FamousDiv, FamousTitle, Famous, FamousGrid, HomeButton,HomeButton2} from './styledComponent';
import Header from './Header';

const Home = () => {

    const [search, setSearch] = useState('');

    const gomins = ['삷이 너무 힘들때' , '내 고민 들어줄 사람', 
    '이거 정상인가요?' , '레전드 썰 풀어요 ㅋㅋㅋㅋ', 
    '별 이제 내일쉬이 못 소녀들이 있습니다. 새워 이풀이 그리워 가득 한 딴은 소학교 해는 있습니다',
    '안맞는 사람이랑'];

    const GominList=gomins.map((i)=> <Famous>{i}</Famous>)

    const navigate = useNavigate();
    const goWrite = () => {
      navigate('/write');
    };

    const goPost=()=>{
        navigate('/board');
    }


    return (
        <div>
            <Header/>
            <HomeTitle>나와 같은 고민을 가진 사람은 어떻게 했을까요?</HomeTitle>
            <HomeSearchDiv>
                <HomeSearch 
                type='text'
                name='search' 
                value={search}
                placeholder='검색어를 입력하세요'></HomeSearch>

                

                <SearchButton>Search</SearchButton>
            </HomeSearchDiv>

            <FamousDiv>
                <FamousTitle>오늘의 인기 고민상담</FamousTitle>
                <FamousGrid>
                {GominList}
                </FamousGrid>              
            </FamousDiv>

            <HomeImage src='/home.png'></HomeImage>


            <HomeButton onClick={goWrite}>고민상담 하러가기</HomeButton>
            <HomeButton2 onClick={goPost}>조언하러가기</HomeButton2>
        </div>
    );
};

export default Home;