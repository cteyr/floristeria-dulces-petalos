import { Text, Flex, Image, Spinner, Alert, AlertIcon, Button } from '@chakra-ui/react'
import { Breadcrumbs } from "../components/Breadcrumbs";
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { getFlowersById } from '../middlewares/flowers';
import {
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react'

const DetailProduct = () => {

    const { id } = useParams<{ id: string }>();

    const { isLoading, data, isError } = useQuery({
        queryKey: ['flower_id', id],
        queryFn: () => getFlowersById(id!),
    });

    if (isLoading) {
        return (
            <Flex
                flexDirection="column"
                justify="center"
                align="center"
                height="100vh"
                width="100%"
            >
                <Spinner size="xl" />
                <Text ml={2}>Cargando...</Text>
            </Flex>
        );
    }

    if (isError) {
        return (
            <Alert
                status="error"
                w="100%"
                justifyContent="center"
            >
                <AlertIcon />
                <Text>Error al cargar los productos.</Text>
            </Alert>
        );
    }

    return (
        <Flex
          
            direction="column"
            align="center"
            w={{ base: '100%', sm: '90%', md: '80%', lg: '60%' }}
            p="50px"
            px={{ base: '10px', sm: '20px' }}
        >
            <Flex
                width="100%"
                flexDirection="column"
            >
                <Breadcrumbs
                    items={[
                        { label: 'Inicio', path: '/' },
                        { label: `${data?.name}`, path: `${data?.name}` },
                    ]}
                />

                <Flex
                    gap={10}
                >
                    <Image
                        width="50%"
                        height="100%"
                        objectFit="cover"
                        src={data?.imgUrl}
                        alt={data?.name}
                        borderRadius="20px"
                        mt="10px"
                    />
                    <Flex
                        flexDirection="column"
                    >
                        <Text fontSize='48px' fontWeight="700" lineHeight='72px' mb="60px">{data?.name}</Text>
                        <Text fontSize="22px" fontWeight="700">€{data?.price}</Text>

                        <UnorderedList
                            pt="30px"
                            pb="20px"
                            pl="20px"
                        >
                            <ListItem fontSize="14px" fontWeight="400">Regar {data?.wateringsPerWeek} vez por semana</ListItem>
                            <ListItem fontSize="14px" fontWeight="400">Fertilizar con {data?.fertilizerType}</ListItem>
                        </UnorderedList>

                        <Button
                            borderRadius="20px"
                            bg="#771E42"
                            color="#FFFFFF"
                            fontSize="14px"
                            fontWeight="400"
                            _hover={{
                                bg: "#771E42",
                                color: "#FFFFFF",
                            }}
                        >
                            Añadir al carrito
                        </Button>
                    </Flex>

                </Flex>


            </Flex>




        </Flex>
    );
}

export { DetailProduct }