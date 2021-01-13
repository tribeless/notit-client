const filterMessage = (message)=>{
    return message.length > 23 ? message.slice(0,23).concat("..."):message;
}

export default filterMessage;