import React, {useEffect, useState} from 'react';
import {API, itemType} from "../api/api";
import {Badge, Card, CardContent, Divider, Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useParams} from "react-router-dom";
import {Star, Message} from "@mui/icons-material";
import CommentList from '../components/CommentList';


export type propsItemType = {
    id: number
}

const StoryPage: React.FC = () => {
    const params = useParams<{ id: string | undefined }>()

    useEffect(() => {
        params.id && API.getItem(+params.id).then((res) => setState(res.data))
    }, [params.id])
    const [state, setState] = useState<itemType>()

    return (
        <>
        <Card>
            <CardContent sx={{flexGrow: 1}}>
                <Typography variant="h6" component="h2">
                    {state?.title}
                </Typography>
                <Typography color="primary" variant="body1" component="h2">
                    <a target="_blank" rel="noreferrer" href={state?.url}>{state?.url}</a>
                </Typography>
            </CardContent>

            <CardContent>
                <Grid pr={5} wrap={"nowrap"} container spacing={5}>
                    <Grid xs={11} item>
                        <Typography sx={{pl: "4px"}}>
                            by: {state?.by}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Badge badgeContent={state?.score} color="primary">
                            <Star color="action"/>
                        </Badge>
                    </Grid>
                    <Grid  item>
                        <Badge badgeContent={state?.kids?.length} color="primary">
                            <Message color="action"/>
                        </Badge>

                    </Grid>

                </Grid>


            </CardContent>
        </Card>
            {state?.kids && <Card sx={{marginTop: "15px"}}>
               <Typography p={"10px"}>
               Comments:
           </Typography>
               <Divider/>
               <CommentList comments={state.kids} /></Card>}
                </>
    );
};

export default StoryPage;