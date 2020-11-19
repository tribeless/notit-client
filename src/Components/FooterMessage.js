import React from "react";
import TextHolder from "./TextHolder";


const FooterMessage = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const message =`Copyright ${currentYear}, NOTIT`;
    return (
        <TextHolder fontStyle="fontStyleTwo" text={message} size="14px" top="0" />
    )
}

export default FooterMessage;