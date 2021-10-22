
import StoryListPage from "../../pages/StoryListPage";
import StoryPage from "../../pages/StoryPage";

export interface IRoute {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

export enum RouteNames {
    NEWS_PAGE = '/news',
    ITEM = '/item/:id'
}

export const newsRoutes: IRoute[] = [
    {path: RouteNames.NEWS_PAGE, exact: true, component: StoryListPage},
    {path: RouteNames.ITEM, exact: true, component: StoryPage}
]

export const itemRoutes: IRoute[] = [

]