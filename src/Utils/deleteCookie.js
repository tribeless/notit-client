const deleteCookie = (name)=>{
    document.cookie = name +"=" + "";
}

export default deleteCookie;