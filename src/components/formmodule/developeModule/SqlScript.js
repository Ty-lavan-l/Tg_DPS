import React, { useEffect } from 'react';
import { useForm, Form } from '../../controls/useForm';


const initialFValues = {
  scriptname: '',

};


export default function SqlScript(props) {
    const { recordForEdit } = props;

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ('scriptname' in fieldValues)
        temp.scriptname = fieldValues.scriptname ? '' : 'This field is required.';

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
              <label htmlFor="url" className="col-sm-5 col-form-label sqlLable">
                Name of Sql Script
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="scriptname"
                  className="form-control sqlinput"
                  placeholder="Enter name of Sql Script"
                  defaultValue=""
                  value={values.scriptname}
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
