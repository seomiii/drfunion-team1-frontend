import React,{useState} from 'react';
import { LoginTitle,LoginInput, LoginSubmitDiv,LoginupButton,LoginupDiv,LoginDiv,MediaDiv,Logo } from './styledComponent';

const Login = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [isLogin,setIsLogin]=useState(false)
    const [IsSignIn,setSignIn] = useState(true)

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {
        console.log('click login')
        console.log('email',inputId)
        console.log('pw',inputPw)

        setIsLogin(true)
        document.location.href='/'
        // axios.post('/api/signin',{
            
        // })
    }

    return (
        <MediaDiv>
        <LoginDiv>

            <Logo src='/drflogo.png' alt='logo'/>
            <LoginTitle>Sign in to your accont</LoginTitle>

            <LoginupDiv>
                <LoginupButton onClick={()=> setSignIn(true)}>sign in</LoginupButton>
                <LoginupButton onClick={()=> setSignIn(false)}>sign up</LoginupButton>
            </LoginupDiv>

            
            {IsSignIn && <><LoginInput 
            type='text'
            name='input_id' 
            value={inputId} 
            onChange={handleInputId}
            placeholder='Email'/>

            <LoginInput 
            type='password' 
            name='input_pw' 
            value={inputPw} 
            onChange={handleInputPw}
            placeholder='Password'
            />
            <LoginSubmitDiv onClick={onClickLogin}>SIGN IN</LoginSubmitDiv>
            </>  }

            {!IsSignIn && <>
                <LoginInput 
            type='text'
            name='input_id' 
            value={inputId} 
            onChange={handleInputId}
            placeholder='Email'/>

            <LoginInput 
            type='password' 
            name='input_pw' 
            value={inputPw} 
            onChange={handleInputPw}
            placeholder='Password'
            />

            <LoginInput 
            type='password' 
            name='input_pw' 
            value={inputPw} 
            onChange={handleInputPw}
            placeholder='Repeat Password'
            />
            <LoginSubmitDiv onClick={onClickLogin}>SIGN UP</LoginSubmitDiv>           
            </>}        
            
           

            

        </LoginDiv>
        </MediaDiv>
    );
};

export default Login;