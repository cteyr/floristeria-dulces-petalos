import { Flex, Image } from '@chakra-ui/react';
import Logo from '../assets/Logo.svg';

const Header = () => {
    return (
        <Flex p={4} align="center" bg="#FFFFFF">
            <Image
                boxSize="50px"
                objectFit="contain"
                src={Logo}
                alt="Logo"
            />
        </Flex>
    );
};

export { Header };
