import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound404 from "./routes/NotFound";
import KakaoConfirm from "./routes/KakaoConfirm";

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
            {
                path: "kakao",
                element: <KakaoConfirm />,
            },
        ],
    },
]);

export default router;