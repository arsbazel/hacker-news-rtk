import React, {FC, useEffect, useState} from 'react';
import {
    Avatar,
    Badge,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemSecondaryAction,
    ListItemText
} from "@mui/material";
import {ExpandLess, ExpandMore, SubdirectoryArrowRightSharp} from "@mui/icons-material";
import {API, itemType} from "../api/api";
import ListContext from "@mui/material/List/ListContext";

type propsType = {
    p?: number
    id: number
}

const Comment: React.FC<propsType> = ({p= 0, id}) => {
    const [open, setOpen] = useState(false)
    const [state, setState] = useState<itemType>({by: '', id: 0, time: 0, title: ''})

    const handleClick = () => {
        setOpen(!open)
    }
    useEffect(() => {
        id && API.getItem(id).then((res) => setState(res.data))
    }, [id])
    return (
        <List
            sx={{width: '100%', bgcolor: 'background.paper' }}
            component="ul"
        >
            <ListItem sx={{marginTop: "-15px", pl: p, alignItems: "flex-start"}}>
                <ListItemIcon sx={{padding: "10px 0px"}}>
                    <Avatar>{state.by && state.by[0]}</Avatar>
                </ListItemIcon>


                <ListItemText sx={{flexGrow: 9}} primary={state.by} secondary={state.text} />
                <ListItemText primary={state.title} sx={{p: 0}} />
            </ListItem>

            {state.kids ?<> <ListItem>
            <ListItemButton onClick={handleClick}>
               <SubdirectoryArrowRightSharp sx={{ml: p}} /> show {state.kids?.length} answers</ListItemButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {state.kids.map((id) => <Comment key={id} id={id} p={p + 2}/>)}
            </Collapse> </>: null}
        </List>
    );
};

export default Comment;