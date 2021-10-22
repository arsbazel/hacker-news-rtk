import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {newsRoutes, RouteNames} from "./router";
const AppRouter = () => {
    return (
        <Switch>
            {
                newsRoutes.map((route) =>
                    <Route  path={route.path}
                    component={route.component}
                    exact={route.exact}
                    key={route.path} />
                )
            }
            <Redirect to={RouteNames.NEWS_PAGE}/>

        </Switch>
    );
};

export default AppRouter;