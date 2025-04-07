import { Text, Flex, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { useQuery } from "@tanstack/react-query";
import { getFlowers } from '../middlewares/flowers';
import { CardFlower } from '../components/CardFlower';
import { Grid } from '@chakra-ui/react';

const ListProduct = () => {
    const { isLoading, data, isError } = useQuery({
        queryKey: ['flowers'],
        queryFn: () => getFlowers(),
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
            height="auto"
            direction="column"
            align="center"
            width="100%"
            p="50px"
           
            px={{base: '10px', sm: '20px'}}
        >
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)' }} 
                gap={6}
                w={{ base: '100%', sm: '90%', md: '80%', lg: '60%' }}
            >
                {data?.map((flower: any) => (
                    <CardFlower
                        key={flower.id}
                        id={flower.id}
                        name={flower.name}
                        scientificName={flower.binomialName}
                        price={flower.price}
                        imageUrl={flower.imgUrl}
                    />
                ))}
            </Grid>
        </Flex>
    );
};

export { ListProduct };

