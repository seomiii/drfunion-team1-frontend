import React from 'react';
import { FooterContents, FooterDiv, FooterLongContents } from './styledComponent';

const Footer = () => {
    return (
        <div>
            <FooterDiv>
                <FooterContents>CONTACT US</FooterContents>        

                <FooterContents>
                    <p>+02 795 1645</p>
                    <br/>
                    <p>Gomino@email.net</p>

                </FooterContents>              

       
                <FooterContents>INFORMATION</FooterContents>

                <FooterLongContents>(주) Gomino  |  대표이사: 디아레프 | 서울시 서대문구 북아현동 1009  |  개인정보관리책임자: 김민수<br/>
    전화번호 000-000-0000(수신자 부담)  | 팩스번호 02-234-2344  |  문의시간 오전 10시-오후6시<br/>
    공정거래위원회 고시 제 2000-1호에 따른 사업자등록번호 110-23-23323<br/>
    통신판매업신고번호 제 2020-서울강남-03324호 4  |  사업자정보확인 </FooterLongContents>
        </FooterDiv>


            
        </div>
    );
};

export default React.memo(Footer);