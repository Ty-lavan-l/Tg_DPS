import React, { useState, useEffect } from 'react';
import { useForm, Form } from '../../controls/useForm';
import { makeStyles } from '@material-ui/core/styles';

const initialFValues = {
  sparkjob: '',

};


export default function SparkJob(props) {
  const { recordForEdit } = props;

  const validate = (fieldValues = values) => {
      let temp = { ...errors };
      if ('sparkjob' in fieldValues)
      temp.sparkjob = fieldValues.sparkjob ? '' : 'This field is required.';

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
          // Write axios Here

          console.log(values);
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
              <label htmlFor="sparkjob" className="col-sm-5 col-form-label sqlLable">
                Name of Bi Spark Job
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="sparkjob"
                  className="form-control sqlinput"
                  placeholder="Enter name of Spark Job"
                  defaultValue=""
                  value={values.sparkjob}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
            <button type="submit" className="btn btn-primary linkbtn">
              Ok
            </button>
            </div>
            </Form>
      </>
  );
}
