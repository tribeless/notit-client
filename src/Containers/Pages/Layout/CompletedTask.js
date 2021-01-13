import React,{useState} from "react";
import {FaEllipsisV} from "react-icons/fa";
import {IoIosClose} from "react-icons/io";
import {Formik,Form as FormikForm} from "formik";
import {useMutation,useQuery} from "@apollo/react-hooks";
import { Form,Menu } from 'antd';
import {MdAdd} from "react-icons/md";
import {DELETE_TASK} from "../../../GraphQl/Mutations/DeleteTask";
import {UPDATE_TASK_TYPE} from "../../../GraphQl/Mutations/UpdateTask";
import {ADD_USER_TASK} from "../../../GraphQl/Mutations/AddTask";
import {OPEN_FORM} from "../../../GraphQl/Queries/GraphQlClientQueries";
import {GET_TASKS} from "../../../GraphQl/Queries/GetTasks";
import NotitFlex from "../../LandingPage/NotitFlex";
import TextHolder from "../../../Components/TextHolder";
import TextInputs from '../../../Components/TextInputs';
import NotitBtn from '../../../Components/NotitBtn';
import NotItContainer from "../../LandingPage/SignUpContainer";
import NotitStyles from '../../../Components/NotitStyles';
import filterMessage from "../../../Utils/FilterMessage";
import graphQlErrors from "../../../Utils/Errors";


const CompletedTask = ({setError,tasks,setIsModalVisible,setTaskMessage})=>{
    const [openForm,setOpenForm] =useState(false);
    const [isPopoverOpen,setIsPopoverOpen] = useState(false);
    const [listId,setId] = useState("");
    const [DeleteTaskMutation] = useMutation(DELETE_TASK);
    const [UpdateTaskTypeMutation] = useMutation(UPDATE_TASK_TYPE);
    const [AddTaskMutation,{loading}] = useMutation(ADD_USER_TASK);
    const {data:{authorId}} = useQuery(OPEN_FORM);

    const handleClose = ()=>{
        setOpenForm(false);
    }
    const style = NotitStyles();
    const openTaskForm = ()=>{
        setOpenForm(!openForm);
    };

    const showMessageAndModal = (message,date,taskType)=>{
        setIsModalVisible(true);
        setTaskMessage({task:message,date,taskType});
    }

    const showSinglePopOver = (id)=>{
    setId(id);
    setIsPopoverOpen(!isPopoverOpen);
    }
    const { SubMenu } = Menu;
    //delete and update Mutations
    const deleteTask = (taskId)=>{
        DeleteTaskMutation({
            variables:{
                taskId
            },
            refetchQueries:[{
                query: GET_TASKS,
                awaitRefetchQueries: true
            }]
        })
        .then((res)=>{
            res && setIsPopoverOpen(!isPopoverOpen);
        })
        .catch((res)=>setError({message:graphQlErrors(res),open:true}))
    }

    const markAs = async (taskId,tasktype)=>{

        await UpdateTaskTypeMutation({
            variables:{
                input:{
                    taskId,
                    taskType:tasktype
                }
            },
            refetchQueries:[{
                query: GET_TASKS,
                awaitRefetchQueries: true
            }]
        })
        .then((res)=>{
            res && setIsPopoverOpen(!isPopoverOpen);
        })
        .catch((res)=>setError({message:graphQlErrors(res),open:true}))    
    }

    const markAsArray = [
        {
            tasktype:"new",
            tid:"1"
        },
        {
            tasktype:"inProgress",
            tid:"2"
        }
    ]

    return (
    <NotItContainer
        alignment="column"
        alignmentX="flex-start"
        content="flex-start"
        nwidth="300px"
        nheight="300px"
    >
        <NotItContainer 
            alignment="row" 
            alignmentX="center" 
            content="space-around"  
            nheight="auto"
            nwidth="300px"
            >
            <NotitFlex direction="row" alignment="center" alignmentX="space-around" margin="0 0 0 -1.9rem">
            <NotitFlex alignment="center" bgColor="#13FEB7" margin="0 1.5rem 0 0">
                <TextHolder text="Completed"  size="11px" top="0"/>
            </NotitFlex>
            <TextHolder text={tasks.length} size="11px" top="0"/>
            </NotitFlex>
                
            <NotitFlex alignment="center" alignmentX="space-around" margin="0 -1.2rem 0 0">
                <FaEllipsisV style={{color:"#8D8D8D"}}  />
                {
                    openForm ? 
                    (
                        <IoIosClose style={{color:"#8D8D8D"}} onClick={()=>{
                            openTaskForm();
                        }} />
                    ):
                    (
                        <MdAdd style={{color:"#8D8D8D"}} onClick={()=>{
                            openTaskForm();
                        }} />
                    )
                }
            </NotitFlex>
        </NotItContainer>
            {
                tasks.map(({message,id,updatedAt,taskType})=>(
            <NotItContainer
                alignment="row" 
                alignmentX="flex-start" 
                content="space-between"  
                nheight="auto"
                bgColor="#F1EFED" 
                borderradius="10px"
                nwidth="200px"
                padding="1rem"
                margin=".6rem 0 0 2rem"
                key={id}
            >
                <NotitFlex 
                    alignment="center" 
                    alignmentX="flex-start" 
                    direction="row" 
                    bgColor="transparent" 
                    width="180px"
                    onClick={()=>showMessageAndModal(message,updatedAt,taskType)}
                >
                <TextHolder text={filterMessage(message)} fontStyle="fontStyleTwo" size="14px" top="0" />
            </NotitFlex>
            <div className={isPopoverOpen ? "slide-out-con-bigger" : "slide-out-con"} >
                <FaEllipsisV onClick={() => showSinglePopOver(id)} style={{color:"#8D8D8D"}} />
            {
                listId===id && (
                <div className={isPopoverOpen ? "slide-out-content slide-out-when-clicked":"slide-out-content"}>
                    <p onClick={()=>deleteTask(id)} >Delete Task</p>
                    <Menu inlineIndent="0" className="menu-item"  mode="inline">
                        <SubMenu className="holder" key="sub2" title="Mark As">
                            {
                                markAsArray.map(({tasktype,tid})=>(
                                    <Menu.Item onClick={()=>markAs(id,tasktype)} className="sub-menu" key={tid}>{tasktype}</Menu.Item>
                                ))
                            } 
                            
                        </SubMenu>
                    </Menu>
                </div>
                )
            }
        </div>
        </NotItContainer>
                ))
            }


    {openForm && 
        (        
            <Formik
                    initialValues = {{
                        message:""
                    }}

                    onSubmit={(values)=>{
                        const input = {
                            taskType:"completed",
                            message:values.message,
                            authorId:authorId
                        }
                        AddTaskMutation({
                            variables:{input},
                            refetchQueries:[{
                                query:GET_TASKS,
                                awaitRefetchQueries:true
                            }]
                        })
                        .then((res)=>{
                            handleClose();
                        })
                        .catch((res)=>{
                            setError({message:graphQlErrors(res),open:true}) 
                        })
                    }}
                >

                    {({setFieldValue,values})=>(
                    <FormikForm>
                          <NotitFlex
                            alignment = "center"
                            alignmentX = "space-around"
                            direction = "column"
                            width = "200px"
                            padding = "1rem"
                            margin = "0 0 0 2rem" 
                        >
                            <Form.Item  name="email" value={values.message} onChange={(e)=>{
                                setFieldValue("message",e.target.value,false)
                            }}>
                                <TextInputs type="text" style={style.task_inputs}/>
                            </Form.Item>
                         </NotitFlex>
                        <NotitFlex direction="column" alignment="center" >
                            <Form.Item >
                                    <NotitBtn type="primary" htmlType="submit" disabled={loading} text={loading ? "Loading...":"ADD"}/>
                            </Form.Item> 
                        </NotitFlex>
                       
                    </FormikForm>
                    )}
                </Formik>)}
    </NotItContainer>
    );
}

export default CompletedTask;