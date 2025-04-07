import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Flex } from '@chakra-ui/react'

const MainLayout = () => {
    return (
        <Flex
            height="100vh"
            align="center"
            flexDirection="column"
            width="100%"
            bg="#F9F9F9"
        >
            <Flex
                width="100%"
                justify="center"
                bg="#FFFFFF"
            >
                <Header />
            </Flex>
            <Flex
                bg="#F9F9F9"
                width="100%"
                justify="center"
            >
                <Outlet />
            </Flex>
        </Flex>
    );
};
export { MainLayout };