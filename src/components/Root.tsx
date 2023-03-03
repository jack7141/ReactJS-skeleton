import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
// https://react-icons.github.io/react-icons/
import { FaSkull, FaMoon, FaUserNinja, FaLock } from "react-icons/fa";

export default function Root() {
    return (
        <Box>
            <Header />
            {/*앞선 컴포넌트들을 랜더링해준다.*/}
            <Outlet />
        </Box>
    );
}