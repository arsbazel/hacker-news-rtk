import React, {FC} from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import AppRouter from "./components/AppRouter/AppRouter";
import CssBaseline from "@mui/material/CssBaseline";
import {Link} from "react-router-dom"

const App: FC = () => {
    return (
        <Box  sx={{flexGrow: 1, bgcolor: "lightgrey", minHeight: "100vh"}}>
            <AppBar   position="relative">
                <Container maxWidth="md">
                 <Toolbar disableGutters >

                    <Typography variant="h5" component="div" sx={{flexGrow: 1,}}>
                        <Link to={'/news'}>Hacker News</Link>
                    </Typography>
                    <Button>dfg</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
            </AppBar>
                <CssBaseline/>
                <main  style={{backgroundColor: "transparent"}}>

                    <Container sx={{py: 4, }} maxWidth="md" >

                            <AppRouter/>

                    </Container>
                </main>
        </Box>
);
}

export default App;
