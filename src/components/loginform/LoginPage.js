import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Notification from '../controls/Notification';
import ConfirmDialog from '../controls/ConfirmDialog';
import axios from 'axios';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [notify, setNotify] = useState({
        islogged: false,
        message: '',
        type: ''
    });

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false
    });

    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: '',
        subTitle: ''
    });

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const login = (event) => {
        console.log(`${email} and Password is ${values.password}`);
        axios
            .post('http://localhost:8080/authenticate', {
                userName: email,
                password: values.password
            })
            .then((res) => {
                localStorage.setItem('token', res.data.message);
                localStorage.setItem('userId', res.data.data[0].userId);
                setNotify({
                    islogged: true,
                    message: `Login Successfully`,
                    type: 'success'
                });
            })
            .catch((err) => {
                console.log(err);
                setNotify({
                    message: `Failed to Login`,
                    type: 'error'
                });
            });
        event.preventDefault();
    };
    if (localStorage.getItem('token')) {
        return <Redirect to='/dashboard' />;
    }
    return (
        <>
            <div className='login_body'>
                <div className='container login_container'>
                    <div>
                        <h1 className='login_h1 font-weight-bold '>
                            Data Processing <span> Software Application</span>
                        </h1>
                    </div>

                    <div className='box login_box '>
                        <div className='ml-4'>
                            <h3 id='login_h3'>
                                <strong>Login Form</strong>
                            </h3>
                        </div>
                        <form className='card-body login_card-body' onSubmit={login}>
                            <div className='input-group form-group ' id='login_input'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text'>
                                        <i className='fas fa-user'></i>
                                    </span>
                                </div>
                                <input
                                    type='text'
                                    className='form-control login_input'
                                    name='user_id'
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter The UserName '
                                    required
                                />
                            </div>
                            <div className='input-group form-group ' id='login_input1'>
                                <div className='input-group-prepend'>
                                    <span className='input-group-text'>
                                        <i className='fas fa-key'></i>
                                    </span>
                                </div>
                                <input
                                    type='password'
                                    className='form-control login_input'
                                    value={values.password}
                                    onChange={handlePasswordChange('password')}
                                    placeholder='Enter The Password '
                                    required
                                />
                            </div>

                            <div className='form-group text-center'>
                                <button id='login_button' type='submit'>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Notification notify={notify} setNotify={setNotify} />
                <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            </div>
        </>
    );
}

export default LoginPage;
