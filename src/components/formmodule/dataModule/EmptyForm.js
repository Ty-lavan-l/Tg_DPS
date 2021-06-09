import React, { useState, useEffect } from 'react';
import { useForm, Form } from '../../controls/useForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}));


export default function EmptyForm(props) {
    const { addOrEdit, recordForEdit } = props;
    const [records, setRecords] = useState([]);
    var url = records[0];
    const initialFValues = {
        coachName: '',
       
    };
    const classes = useStyles();
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ('coachName' in fieldValues)
            temp.coachName = temp.coachName = /^[a-zA-Z ]+$/.test(fieldValues.coachName)
                ? ''
                : 'please Enter Valid Coach Name.';
        setErrors({
            ...temp
        });

        if (fieldValues === values) return Object.values(temp).every((x) => x === '');
    };

    const { values, setValues, errors, setErrors, handleInputChange } = useForm(
        initialFValues,
        true,
        validate
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            addOrEdit(values, url);
        }
    };

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            });
    }, [recordForEdit]);


    return (
        <>
            <Form onSubmit={handleSubmit}>
           
            </Form>
            
        </>
    );
}
