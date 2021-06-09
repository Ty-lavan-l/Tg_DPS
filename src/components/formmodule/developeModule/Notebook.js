import React, { useEffect } from 'react';
import { useForm, Form } from '../../controls/useForm';


const initialFValues = {
  notebook: '',

};


export default function Notebook(props) {
  const { recordForEdit } = props;

  const validate = (fieldValues = values) => {
      let temp = { ...errors };
      if ('notebook' in fieldValues)
      temp.notebook = fieldValues.notebook ? '' : 'This field is required.';

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
              <label htmlFor="notebook" className="col-sm-5 col-form-label sqlLable">
                Name of Notebook
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="notebook"
                  className="form-control sqlinput"
                  placeholder="Enter name of Notebook"
                  defaultValue=""
                  value={values.notebook}
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
