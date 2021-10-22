import React from 'react';
import {
    Grid,
} from "@mui/material";
import Comment from "./Comment";

type propsType = {
    comments: Array<number>
}


const CommentList: React.FC<propsType> = ({comments}) => {

    return (
        <Grid flexDirection="column" p={"10px"} container>
            {comments.map((id) => <Comment id={id} key={id}/>)}
        </Grid>
    );
};
export default CommentList;


//open ? <ExpandLess/> :
//    <Badge badgeContent={1} color="primary"><ExpandMore/> </Badge>