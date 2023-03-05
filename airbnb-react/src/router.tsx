import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import Users from "./routes/Users";
import NotFound404 from "./routes/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound404 />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
]);

export default router;