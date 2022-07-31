import Button from '../../atom/Button';
import Form from '../../atom/Form';
import Title from '../../atom/Title';
import Container from '../../atom/Container';
import { FormBox, BtnBox } from './styled';
import { useForm } from 'react-hook-form';
import Error from '../../atom/Error';
import axios from 'axios';
import ErrorModal from '../../atom/ErrorModal';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const {
        handleSubmit,
        register,
        formState: { errors },
        setError,
        clearErrors,
    } = useForm();
    const [display, setDisplay] = useState(false);
    const navigate = useNavigate();
    const onValid = ({ code, password1, password2 }) => {
        if (password1 !== password2) {
            setError(
                'password1',
                {
                    message: '😭 동일한 패스워드를 입력해주세요!',
                },
                {
                    shouldFocus: true,
                }
            );
            return;
        }

        axios
            .post('http://127.0.0.1:8000/api/v1/accounts/registration/', {
                username: code,
                password1: password1,
                password2: password2,
            })
            .then(() => {
                alert('회원 가입이 완료되었습니다!');
                navigate('/');
            })
            .catch((err) => {
                if (err.response.data.username) {
                    setError('AlreadyExists', {
                        message: '이미 가입된 계정입니다.',
                        type: 'custom',
                    });
                    setDisplay(true);
                }
            });
    };

    return (
        <Container>
            <Title text='Nuseum' />
            <FormBox onSubmit={handleSubmit(onValid)}>
                <Form
                    name='code'
                    placeholder='발급된 코드를 입력해주세요.'
                    type='text'
                    {...register('code', {
                        required: '😭 발급된 코드를 입력해주세요!',
                    })}
                    error={errors.code}
                />
                {errors.code ? <Error>{errors.code.message}</Error> : null}

                <Form
                    placeholder='패스워드 입력'
                    name='password1'
                    type='password'
                    {...register('password1', {
                        required: '😭 비밀번호를 입력해주세요!',
                        minLength: {
                            value: 8,
                            message: '😭 비밀번호를 8자 이상 입력해주세요!',
                        },
                    })}
                    error={errors.password1}
                />
                {errors.password1 && errors.code === undefined ? (
                    <Error>{errors.password1.message}</Error>
                ) : null}

                <Form
                    placeholder='패스워드 확인'
                    name='password2'
                    type='password'
                    {...register('password2', {
                        required: '😭 비밀번호를 입력해주세요!',
                    })}
                />

                {display ? (
                    <ErrorModal
                        open={display}
                        closeModal={() => {
                            setDisplay(false);
                            clearErrors();
                        }}
                        message={errors.AlreadyExists.message}
                    />
                ) : null}

                <BtnBox as='div'>
                    <Button
                        text='가입하기'
                        openModal={
                            errors.AlreadyExists ? () => setDisplay(true) : null
                        }
                    />
                    <Link style={{ textDecoration: 'none' }} to='/login'>
                        <Button text='이미 계정이 있으신가요?' />
                    </Link>
                </BtnBox>
            </FormBox>
        </Container>
    );
}

export default Register;
