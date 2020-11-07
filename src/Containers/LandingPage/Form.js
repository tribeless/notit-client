import React from 'react';
import * as Yup from 'yup';
import { Formik, Form as FormikForm ,ErrorMessage} from 'formik';
import { Form } from 'antd';
import TextInputs from '../../Components/TextInputs';
import NotitStyles from '../../Components/NotitStyles';
import NotitBtn from '../../Components/NotitBtn';
import NotitFlex from './NotitFlex';

const SignUpFormValidation = Yup.object().shape({
    firstName:Yup.string().required("Please enter your firstName"),
    lastName:Yup.string().required("Please enter your lastName"),
    email:Yup.string().required("Please enter your email address"),
    password:Yup.string().min(8).required("Please enter your password")
})

const Forms = () =>{
    const style = NotitStyles();
    return (
 <Formik 

    initialValues={{
    firstName:"",
    lastName:"",
    email:"",
    password:""
    }}

    onSubmit={(values) =>{
        const input ={
            firstName:values.firstName,
            lastName:values.lastName,
            email:values.email,
            password:values.password
        }
    }}

    validationSchema={SignUpFormValidation}
>
{({setFieldValue,values,isSubmitting})=>(
        <FormikForm>
            <NotitFlex direction="row">
           <Form.Item label="FirstName" name="firstName">
                  <TextInputs type="text" style={style.name_inputs} />
             </Form.Item>
             <ErrorMessage component="div" name="firstName" />
            <Form.Item label="LastName" name="lastName" style={{marginLeft:"40px"}}>
                  <TextInputs type="text" style={style.name_inputs} />
             </Form.Item>
             <ErrorMessage component="div" name="lastName" />
             </NotitFlex>
             <NotitFlex direction="column">
            <Form.Item label="Email" name="email">
                  <TextInputs type="text" style={style.text_inputs} />
             </Form.Item>
             <ErrorMessage component="div" name="email" />
            <Form.Item label="Password" name="password">
                  <TextInputs type="text" style={style.text_inputs} />
             </Form.Item> 
             <ErrorMessage component="div" name="password" />
             </NotitFlex>
              <Form.Item >
                <NotitBtn type="primary" htmlType="submit" disabled={isSubmitting} text={isSubmitting ? "Loading...":"SIGNUP"}/>
             </Form.Item> 
        </FormikForm>
    )}
</Formik>
       
    )
};

export default Forms;

