import { Flex, Text, Image } from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router-dom';


interface CardComponentFlowerProps {
    id: string;
    name: string;
    scientificName: string;
    imageUrl: string;
    price: number;
}

const CardFlower = ({ name, scientificName, imageUrl, price, id }: CardComponentFlowerProps) => {
    return (
        <Flex

        >
            <Flex
                borderRadius="20px"
                bg="purewhite"
                boxShadow="0px 3px 3px rgba(0, 0, 0, 0.1)"
                p="10px"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                height="100%"
                position="relative"
            >
                <Flex
                    flexDirection="column"
                    alignItems="left"
                    width="100%"
                >
                    <Text 
                        fontSize="28px" 
                        fontWeight="700" 
                        letterSpacing="0" 
                        color="#111111" 
                        fontFamily="heading"
                    >
                        {name}
                    </Text>
                    <Text 
                        fontSize="16px" 
                        fontWeight="400" 
                        letterSpacing="0" 
                        color="dark_grey" 
                        mt="10px" 
                        fontFamily="body"
                    >
                        {scientificName}
                    </Text>

                </Flex>
                <Image
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    src={imageUrl}
                    alt={name}
                    borderRadius="20px"
                    mt="10px"
                />
                <Flex
                    position="absolute"
                    bottom="20px"
                    left="20px"
                    borderRadius="15px"
                    bg="purewhite"
                    px="10px"
                    py="2px"
                    fontFamily="heading"
                >
                    €{price}
                </Flex>

                <Link to={`/detail/${id}`}>
                    <Flex
                        id="card_link"
                        position="absolute"
                        bottom="20px"
                        right="20px"
                        borderRadius="50%"
                        bg="purewhite"
                        p="8px"
                        cursor="pointer"
                        _hover={{ bg: '#f0f0f0' }}
                    >
                        <FiArrowUpRight />
                    </Flex>
                </Link>


            </Flex>
        </Flex>
    );
};

export { CardFlower }