import { Flex, Image } from '@chakra-ui/react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Flex p={4} align="center" bg="#FFFFFF">
            <Link to="/">
                <Image
                    boxSize="50px"
                    objectFit="contain"
                    src={Logo}
                    alt="Logo"
                />
            </Link>
        </Flex>
    );
};

export { Header };
