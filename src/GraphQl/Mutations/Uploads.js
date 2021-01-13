import gql from "graphql-tag";

export const UPLOAD_AVATAR = gql
`   mutation singleFile($file:Upload!){
        singleFile(file:$file){
            status
            message
        }
}

`;