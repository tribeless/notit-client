import React from 'react';
import * as Yup from 'yup';
import { Formik, Form as FormikForm ,ErrorMessage} from 'formik';
import { Form } from 'antd';
import TextInputs from '../../Components/TextInputs';
import NotitStyles from '../../Components/NotitStyles';
import NotitBtn from '../../Components/NotitBtn';
import NotitFlex from './NotitFlex';
import {emailRegex,passwordRegex} from "../../Utils/Constants";

const SignUpFormValidation = Yup.object().shape({
    firstName:Yup.string().required(),
    lastName:Yup.string().required(),
    email: Yup.string().required().matches(emailRegex,"Enter a valid email"),
    password:Yup.string().matches(passwordRegex,"Enter a longer password").required()
})

const Forms = ({formData,setFormData}) =>{
    const style = NotitStyles();
    const {data} = formData;
    return (
 <Formik 

    initialValues={{
    firstName:data.firstName || "",
    lastName:data.lastName || "",
    email:data.email || "",
    password:data.password || ""
    }}

    onSubmit={(values) =>{
        setFormData({
            data:{
                firstName:values.firstName,
                lastName:values.lastName,
                email:values.email,
                password:values.password
            }
        })
        const input ={
            firstName:values.firstName,
            lastName:values.lastName,
            email:values.email,
            password:values.password
        }
    }}

    validationSchema={SignUpFormValidation}
>
{({setFieldValue,values,errors,isSubmitting})=>(
        <FormikForm style={style.form_styles}>
            <NotitFlex direction="row">
           <Form.Item label="FirstName" name="firstName" value={values.firstName} onChange={(e)=>{
                setFieldValue("firstName",e.target.value,true)
            }}>
                  <TextInputs type="text" style={errors.firstName ? style.errors : style.name_inputs} />
             </Form.Item>

            <Form.Item label="LastName" name="lastName" style={{marginLeft:"40px"}} value={values.lastName} onChange={(e)=>{
                setFieldValue("lastName",e.target.value,true)
            }}>
                  <TextInputs type="text" style={errors.lastName ? style.errors : style.name_inputs}/>
             </Form.Item>
             </NotitFlex>

             <NotitFlex direction="column">
            <Form.Item label="Email" name="email" value={values.email} onChange={(e)=>{
                setFieldValue("email",e.target.value,true)
            }}>
                  <TextInputs type="text" style={errors.email ? style.text_errors : style.text_inputs}/>
             </Form.Item>

            <Form.Item label="Password" name="password" value={values.password} onChange={(e)=>{
                setFieldValue("password",e.target.value,true)
            }}>
                  <TextInputs type="password" style={errors.password ? style.text_errors : style.text_inputs} />
             </Form.Item> 
             </NotitFlex>

             <NotitFlex direction="column" alignment="center">
              <Form.Item >
                <NotitBtn type="primary" htmlType="submit" disabled={isSubmitting} text={isSubmitting ? "Loading...":"SIGNUP"}/>
             </Form.Item> 
             </NotitFlex>

        </FormikForm>
    )}
</Formik>
       
    )
};

export default Forms;

