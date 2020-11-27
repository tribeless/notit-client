import React from 'react';
import {Formik,Form as FormikForm} from 'formik';
import { useApolloClient } from "@apollo/react-hooks";
import * as Yup from 'yup';
import {useMutation} from "@apollo/react-hooks";
import {useHistory,Link} from 'react-router-dom';
import { Form } from 'antd';
import NotItContainer from '../LandingPage/SignUpContainer';
import signin from '../../Assets/Images/signin.png';
import NotItParentContainer from '../LandingPage/NotitParentContainer';
import Images from '../../Components/Images';
import TextHolder from "../../Components/TextHolder";
import NotitFlex from '../LandingPage/NotitFlex';
import "../../Components/SignUpFormStyles.css";
import TextInputs from '../../Components/TextInputs';
import NotitStyles from '../../Components/NotitStyles';
import NotitBtn from '../../Components/NotitBtn';
import {emailRegex,passwordRegex} from "../../Utils/Constants";
import SIGNIN_MUTATION from "../../GraphQl/Mutations/SignIn";
import ErrorContent from "../../Components/ErrorContent";
import errors from "../../Utils/Errors";
import { CLIENT_QUERY} from "../../GraphQl/Queries/GraphQlClientQueries";


const SignInFormValidation = Yup.object().shape({
    email:Yup.string().matches(emailRegex,"please enter valid email").required(),
    password:Yup.string().matches(passwordRegex,"please enter valid password").required()
})
const SignInPage = ({
    errorMessage,
    setError
})=>{
    const {message,open} = errorMessage;
    const style = NotitStyles();
    const [SignInMutation,{loading,error}] = useMutation(SIGNIN_MUTATION);
    const clientState = useApolloClient();
    const history = useHistory();
    const handleClose = ()=>{
        setError({message:"",open:false});
    }
    return (
        <NotItParentContainer bgColor="#F9E2A9" grid="repeat(auto-fit,minmax(300px,50%)">
            <NotItContainer bgColor="#F9E2A9" 
                nwidth="350px" 
                margin="4rem" 
                position="relative" 
                left="150px"
                right="-150px"
            >
                <Images src={signin} alt="Signin page image" className="signin_image"/>
            </NotItContainer>
            <NotItContainer borderradius="20px" nheight="90vh" nwidth="400px" margin="2.2rem -3rem 3rem" 
            position="relative" left="200px" right="-200px"
            >
                {
                   open && <ErrorContent message={message} handleClose={handleClose} />
                }
                
                <TextHolder fontStyle="fontStyleTwo" title="Sign In" top="5rem"/>
                <Formik
                    initialValues={{
                        email:"",
                        password:""
                    }}

                    onSubmit={(values)=>{
                        SignInMutation({
                            variables:{
                                email:values.email,
                                password:values.password
                            }
                        }).then((res)=>{
                            clientState.writeQuery({
                                query: CLIENT_QUERY,
                                data:{
                                    authorId:res.data.signIn.id
                                }
                            })
                            document.cookie = 'signedin=true' ;
                            history.push("/")
                        })
                        .catch((res)=>{
                             setError({message:res.message,open:true}) 
                        })
                    }}

                    validationSchema={SignInFormValidation}
                >
            {({setFieldValue,values,errors})=>(
                <FormikForm style={style.signin_form_styles}>
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
                            <NotitBtn type="primary" htmlType="submit" disabled={loading} text={loading ? "Loading...":"SIGNIN"}/>
                        </Form.Item> 
                    </NotitFlex>
                   
                </FormikForm>
            )}
                </Formik>
                <NotitFlex direction="row">
                        <TextHolder size="11px" fontStyle="fontStyleTwo" color="#808080" text="Don't have an account? "/>
                        <Link to="/sign-up">
                        <TextHolder size="11px" fontStyle="fontStyleTwo" color="#808080" text=" Sign up? "/>
                            </Link>
                    </NotitFlex>
                 <NotitFlex direction="row">
                     <Link to="/sign-in">
                        <TextHolder size="11px" fontStyle="fontStyleTwo" color="#808080" text="Forgot Password? " />
                        </Link>
                    </NotitFlex>
                    
            </NotItContainer>
        </NotItParentContainer>
    )
}

export default React.memo(SignInPage);