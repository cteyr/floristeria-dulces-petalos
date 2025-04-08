import { Text, Flex, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import { useQuery } from "@tanstack/react-query";
import { getFlowers } from '../middlewares/product';
import { CardFlower } from '../components/CardFlower';
import { Grid } from '@chakra-ui/react';
import { Search } from '../components/Search';
import { useState } from 'react';
import { Flower } from '../type/Flower';

const ListProduct = () => {
    const [InputValue, setInputValue] = useState <string> ("");

    const { isLoading, data, isError } = useQuery({
        queryKey: ['flowers'],
        queryFn: () => getFlowers(),
    });

    const newFiltered = data?.filter((product: Flower) =>
        product.name.toUpperCase().includes(InputValue.toUpperCase())
    );

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
            px={{ base: '10px', sm: '20px' }}
            gap="50px"
        >
            <Flex
                w={{ base: '100%', sm: '90%', md: '600px' }}
            >
                <Search
                    placeholder="Busca en nuestra tienda"
                    value={InputValue}
                    handleInputChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInputValue(e.target.value)
                    }
                />
            </Flex>

            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap={6}
                w={{ base: '100%', sm: '90%', md: '80%', lg: '60%' }}
            >
                {newFiltered?.map((flower: Flower) => (
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

