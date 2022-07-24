import React,{useState} from 'react';
import { LoginTitle,LoginInput, LoginSubmitDiv,LoginupButton,LoginupDiv,LoginDiv,MediaDiv,Logo } from './styledComponent';

const Login = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

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
        // axios.post('/api/signin',{
            
        // })
    }

    return (
        <MediaDiv>
        <LoginDiv>

            <Logo src='/drflogo.png' alt='logo'/>
            <LoginTitle>Sign in to your accont</LoginTitle>

            <LoginupDiv>
                <LoginupButton>sign in</LoginupButton>
                <LoginupButton>sign up</LoginupButton>
            </LoginupDiv>
            
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

            <LoginSubmitDiv onClick={onClickLogin}>SIGN IN</LoginSubmitDiv>

        </LoginDiv>
        </MediaDiv>
    );
};

export default Login;