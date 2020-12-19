import React from "react";
import {Formik,Form as FormikForm} from "formik";
import { Form } from 'antd';
import {useMutation,useQuery,useApolloClient} from '@apollo/react-hooks';
import {useHistory} from "react-router-dom";
import TextInputs from '../../../Components/TextInputs';
import NotitBtn from '../../../Components/NotitBtn';
import {ADD_USER_TASK} from "../../../GraphQl/Mutations/AddTask";
import {CLIENT_QUERY} from "../../../GraphQl/Queries/GraphQlClientQueries";
import {GET_TASKS} from "../../../GraphQl/Queries/GetTasks";
import NotitStyles from '../../../Components/NotitStyles';
import graphQlErrors from "../../../Utils/Errors";

const AddTasks = ({
    errorMessage,
    setError
})=>{

    const [AddTaskMutation,{loading}] = useMutation(ADD_USER_TASK);
    const {data:{authorId}} = useQuery(CLIENT_QUERY);
    // const handleClose = ()=>{
    //     setError({message:"",open:false});
    // }
    //const {message,open} = errorMessage;
    const style = NotitStyles();
    
    return (
        <Formik
            initialValues = {{
                message:""
            }}

            onSubmit={(values)=>{
                //call the mutation
                const input = {
                    taskType:"d",
                    message:values.message,
                    authorId:authorId
                }
                AddTaskMutation({
                    variables:{input},
                    refetchQueries:[{
                        query:GET_TASKS,
                        variables:{taskType:"new"},
                        awaitRefetchQueries:true
                    }]
                })
                .then((res)=>{
                    console.log(res.message)
                })
                .catch((res)=>{
                    console.log(res)
                    setError({message:graphQlErrors(res),open:true}) 
                })
            }}
        >

            {({setFieldValue,values,errors})=>(
                <FormikForm>
                    <Form.Item  name="email" value={values.message} onChange={(e)=>{
                        setFieldValue("message",e.target.value,false)
                    }}>
                        <TextInputs type="text" style={style.text_inputs}/>
                    </Form.Item>

                     <Form.Item >
                            <NotitBtn type="primary" htmlType="submit" disabled={loading} text={loading ? "Loading...":"ADD"}/>
                    </Form.Item> 
                </FormikForm>
            )}
        </Formik>
    )
}

export default AddTasks;
