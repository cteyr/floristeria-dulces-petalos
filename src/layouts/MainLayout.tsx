import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Flex } from '@chakra-ui/react'

const MainLayout = () => {
    return (
        <Flex
            align="center"
            flexDirection="column"
            width="100%"
            height="100vh"
        >
            <Flex
                width="100%"
                justify="center"
            >
                <Header />
            </Flex>
            <Flex
                bg="#F9F9F9"
                height="auto"
                width="100%"
            >
                <Outlet />
            </Flex>
        </Flex>
    );
};
export { MainLayout };