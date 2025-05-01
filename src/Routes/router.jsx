import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";

const router=createBrowserRouter(
    [
        {
            path:"/",
            element: <Homelayout></Homelayout>,
        },
        {
            path:"/auth",
            element: <h2>Authentication Layout</h2>,
        },
        {
            path:"/news",
            element: <h2>News Layout</h2>,
        },
        {
            path:"/*",
            element: <h2>Error404</h2>,
        },
        
    ]
)

export default router;