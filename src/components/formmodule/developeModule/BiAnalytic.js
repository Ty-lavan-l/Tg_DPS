import React, {  useEffect } from 'react';
import { useForm, Form } from '../../controls/useForm';

const initialFValues = {
  bianalytic: '',

};

export default function BiAnalytic(props) {
  const { recordForEdit } = props;

  const validate = (fieldValues = values) => {
      let temp = { ...errors };
      if ('bianalytic' in fieldValues)
      temp.bianalytic = fieldValues.bianalytic ? '' : 'This field is required.';

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
              <label htmlFor="bianalytic" className="col-sm-5 col-form-label sqlLable">
                Name of Bi Analytic
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="bianalytic"
                  className="form-control sqlinput"
                  placeholder="Enter name of Bi Analytic"
                  defaultValue=""
                  value={values.bianalytic}
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
