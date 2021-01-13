import  React from "react";
import {Formik,Form as FormikForm} from "formik";
import { Form } from 'antd';
import {useHistory} from "react-router-dom";
import {useMutation} from "@apollo/react-hooks";
import {UPLOAD_AVATAR} from "../../../GraphQl/Mutations/Uploads";
import {GET_USERS} from "../../../GraphQl/Queries/SignedInUsers";
import NotitBtn from '../../../Components/NotitBtn';
import ErrorContent from "../../../Components/ErrorContent";
import graphQlErrors from "../../../Utils/Errors";


const Settings = ({error,setError})=>{
    const [UploadMutation,{loading}] = useMutation(UPLOAD_AVATAR);
    const history = useHistory();
    const {open,message} = error;
    const handleClose = () => {
        setError({
            message: "",
            open: false
        });
    }

 return(
    <>
    {
        open && <ErrorContent message={message} handleClose={handleClose} />
    }
    <Formik
            initialValues = {{
                file:{}
            }}

            onSubmit={(values)=>{
            
                const file = values.file;
                UploadMutation({
                    variables:{file},
                    refetchQueries:[{
                        query:GET_USERS,
                        awaitRefetchQueries:true
                    }]
                })
                .then((res)=>{
                    if(res){
                        history.push("/");
                    }
                })
                .catch((res)=>{
                    console.log(res)
                    setError({message:graphQlErrors(res),open:true}) 
                })
            }}
        >

            {({setFieldValue,values,errors})=>(
                <FormikForm>
                    <label htmlFor="file-upload">
                    Upload file
                    <input id="file-upload" name="file" type="file" onChange={
                        (e) => {
                            console.log(e.target.files[0]);
                            setFieldValue('file', e.target.files[0],false);
                        }
                    } />
                    </label>
                     <Form.Item >
                            <NotitBtn type="primary" htmlType="submit" disabled={loading} text={loading ? "Loading...":"Upload"}/>
                    </Form.Item> 
                </FormikForm>
            )}
        </Formik>
</>
 )
}

export default Settings;