import React, { useState } from 'react';
import { Form } from '../../controls/useForm';
import Notification from '../../controls/Notification';
import ConfirmDialog from '../../controls/ConfirmDialog';
import axios from 'axios';

let userId = localStorage.getItem('userId');
export default function AwsRedShift(props) {
    const data = {
        nameData: 'AWS Red Shift',
        userId: `${userId}`,
        url: '',
        port: '',
        userName: '',
        password: ''
    };

    const [values, setValues] = useState(data);
    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: ''
    });
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: '',
        subTitle: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
            values: data
        });
        console.log('this is values', values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8080/adddatasource', values)
            .then((response) => {
                console.log('Status: ', response.status);
                console.log('this is axios', response.data);
                setNotify({
                    isOpen: true,
                    message: `Datasource added Successfully`,
                    type: 'success'
                });
            })
            .catch((error) => {
                console.error('Something went wrong!', error);
            });
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div className='form-group row'>
                    <label htmlFor='datasource' className='col-sm-3 col-form-label sqlLable'>
                        Name of Datasource
                    </label>
                    <div className='col-sm-8'>
                        <input
                            type='text'
                            className='form-control sqlinput'
                            name='datasource'
                            value={values.datasource}
                            onChange={handleInputChange}
                            placeholder='Enter Name of database'
                            defaultValue=' AWS Red Shift'
                            readOnly
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label htmlFor='url' className='col-sm-3 col-form-label sqlLable'>
                        Url
                    </label>
                    <div className='col-sm-8'>
                        <input
                            type='text'
                            name='url'
                            value={values.url}
                            onChange={handleInputChange}
                            className='form-control sqlinput'
                            placeholder='Enter Url'
                            defaultValue=''
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label htmlFor='port' className='col-sm-3 col-form-label sqlLable'>
                        Port
                    </label>
                    <div className='col-sm-8'>
                        <input
                            type='text'
                            name='port'
                            value={values.port}
                            onChange={handleInputChange}
                            className='form-control sqlinput'
                            placeholder='Enter Port No'
                            defaultValue=''
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label htmlFor='userName' className='col-sm-3 col-form-label sqlLable'>
                        UserName
                    </label>
                    <div className='col-sm-8'>
                        <input
                            type='text'
                            name='userName'
                            value={values.userName}
                            onChange={handleInputChange}
                            className='form-control sqlinput'
                            placeholder='Enter Username'
                            defaultValue=''
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label htmlFor='password' className='col-sm-3 col-form-label sqlLable'>
                        Password
                    </label>
                    <div className='col-sm-8'>
                        <input
                            type='password'
                            name='password'
                            value={values.password}
                            onChange={handleInputChange}
                            className='form-control sqlinput'
                            placeholder='Enter Password'
                            defaultValue=''
                        />
                    </div>
                </div>
                <button type='submit' className='btn btn-primary linkbtn'>
                    Link
                </button>
            </Form>
            <div>
                <Notification notify={notify} setNotify={setNotify} />
                <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            </div>
        </>
    );
}
