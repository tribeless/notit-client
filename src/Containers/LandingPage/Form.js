import React from 'react';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import { Form } from 'antd';
import {useMutation} from '@apollo/react-hooks';
import {useHistory} from "react-router-dom";
import TextInputs from '../../Components/TextInputs';
import NotitStyles from '../../Components/NotitStyles';
import NotitBtn from '../../Components/NotitBtn';
import NotitFlex from './NotitFlex';
import {emailRegex,passwordRegex} from "../../Utils/Constants";
import {SIGNUP_MUTATION} from "../../GraphQl/Mutations/SignUp";


const SignUpFormValidation = Yup.object().shape({
    firstName:Yup.string().required(),
    lastName:Yup.string().required(),
    email: Yup.string().required().matches(emailRegex,"Enter a valid email"),
    password:Yup.string().matches(passwordRegex,"Enter a longer password").required()
})

const Forms = ({formData,setFormData}) =>{
    const style = NotitStyles();
    const [SignUpMutation,{loading}] = useMutation(SIGNUP_MUTATION);
    const {data} = formData;
    const history = useHistory();
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

        SignUpMutation({
             variables:{input}
            ,
            // refetchQueries:[{
            //     query: GET_TASKS,
            //     variables:{
            //         taskType:"new",
            //         awaitRefetchQueries:true
            //     }
            // }]
        }).then((res)=>{
            history.push("/sign-in")
            console.log(res);
        }).catch(res=>{
            console.log(res);
        })
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
                <NotitBtn type="primary" htmlType="submit" disabled={loading} text={loading ? "Loading...":"SIGNUP"}/>
             </Form.Item> 
             </NotitFlex>

        </FormikForm>
    )}
</Formik>
       
    )
};

export default Forms;

