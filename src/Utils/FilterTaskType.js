const filterTaskType = (value,tasks)=>{
    return tasks.usersTasks.filter(item=>item.taskType===value);
}

export default filterTaskType;