import React, {useEffect} from 'react';
import Story from "../components/Story";
import {Grid, List, Paper} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchNewsIDList} from "../store/storiesIdSlice";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

const StoryListPage = () => {

    const dispatch = useAppDispatch()
    const newsIDList = useSelector((state: RootState) => state.storiesId)
    useEffect( () => {
         dispatch(fetchNewsIDList())

    }, [])



    console.log(newsIDList)
    return (
        <Paper>
        <Grid container justifyContent="center">
        <List disablePadding sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
            {newsIDList.slice(0, 100).map((id, i) => <Story order={i+1} id={id} key={id}/>)}

        </List>
</Grid></Paper>
    );
};

export default StoryListPage;