import React, { useState, useEffect } from 'react';
import { useForm, Form } from '../../controls/useForm';
import { makeStyles } from '@material-ui/core/styles';
import Notification from '../../controls/Notification';
import ConfirmDialog from '../../controls/ConfirmDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}));


export default function FlatFile(props) {
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
            <div className="form-group row">
              <label
                htmlFor="datasource"
                className="col-sm-3 col-form-label sqlLable"
              >
                Name of Datasource
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control sqlinput"
                  name="text"
                  placeholder="Enter Name of database"
                  defaultValue=" Flat File"
                  readOnly
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="url" className="col-sm-3 col-form-label sqlLable">
                File
              </label>
              <div className="col-sm-8">
                {/* <input type="file" className="form-control sqlinput" /> */}
                <div>
                  <input
                    id="upload"
                    type="file"
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel/*"
                    onChange={(event) => {
                      this.readFile(event);
                      event.target.value = null;
                    }}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary linkbtn">
              Link
            </button>
            </Form>
        </>
    );
}
