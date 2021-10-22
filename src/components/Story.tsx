import React, {useEffect, useState} from 'react';
import {API, itemType} from "../api/api";
import {Link} from "react-router-dom";
import {
    Badge,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";
import {Message, Star} from "@mui/icons-material";
import {getTimeString} from "../utils/timeToString";

export type propsItemType = {
    id: number
    order: number
}

const Story: React.FC<propsItemType> = (props) => {
    useEffect(() => {
        API.getItem(props.id).then((res) => setState(res.data))
    }, [props.id])
    const [state, setState] = useState<itemType>()
    const time = state && getTimeString(state?.time)
    return (
        <Link to={`/item/${props.id}`}>
            <ListItem sx={{ padding: "0px 15px" }}>
                <ListItemAvatar sx={{minWidth: "30px"}}>
                    {props.order}:
                </ListItemAvatar>

                <ListItemText
                    primary={state?.title}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                            >
                                by: {state?.by}
                            </Typography>
                            <Typography
                                pl="20px"
                                component="span"
                                variant="body2"
                            >
                                uploaded: {time}
                            </Typography>

                        </React.Fragment>
                    }
                />
                <Badge sx={{margin: "0 10px"}} badgeContent={state?.score} color="primary">
                    <Star color="action"/>
                </Badge>
                <Badge sx={{margin: "0 10px"}} badgeContent={state?.kids?.length} color="primary">
                    <Message color="action"/>
                </Badge>
            </ListItem>
            <Divider component="li"/>
        </Link>

    );
};

export default Story;