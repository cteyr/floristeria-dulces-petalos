import { Flex, Text, Image } from "@chakra-ui/react"
import { FiArrowUpRight } from "react-icons/fi";

interface CardComponentFlowerProps {
    name: string;
    scientificName: string;
    imageUrl: string;
    price: number;
}

const CardFlower = ({ name, scientificName, imageUrl, price }: CardComponentFlowerProps) => {
    return (
        <Flex

        >
            <Flex
                borderRadius="20px"
                bg="#FFFFFF"
                boxShadow="0px 4px 20px rgba(0, 0, 0, 0.2)"
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
                    <Text fontSize="28px" fontWeight="700" letterSpacing="0">{name}</Text>
                    <Text fontSize="16px" fontWeight="400" letterSpacing="0">{scientificName}</Text>
                    
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
                    bg="#FFFFFF"
                    px="10px"
                    py="2px"
                >   
                    €{price}
                </Flex>

                <Flex
                    position="absolute"
                    bottom="20px"
                    right="20px"
                    borderRadius="50%"
                    bg="#FFFFFF"
                    p="8px"
                >   
                    <FiArrowUpRight />
                </Flex>

            </Flex>
        </Flex>
    );
};

export { CardFlower }