import { Avatar, Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";

 
export default function Detail() {
    const {id} = useParams();
    const {search} = useLocation();
    const paramData = search.split("=");
    console.log(paramData[1])

    const { isLoading, error, data } = useQuery(paramData[1], () =>
    fetch(`https://gateway.marvel.com:443/v1/public/${paramData[1]}/${id}?apikey=ab59c7f9320b390c35de687335cdb83a`).then(res =>
      res.json()
        )
    )

    console.log(isLoading, error, data);
    return ( 
        <>
        <Box>
            <VStack  
                w="full" 
                h="650" 
                backgroundImage={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                backgroundPosition={"center"}
                alignItems={"center"}
                position={"relative"}

            >
            <Box  position="absolute" top="0" left="0" w="full" h="full" bg="rgba(0, 0, 0, 0.8)" />
            <HStack
                w="7xl" h="full" zIndex={99}
                alignItems="center"
            >
                <Grid templateColumns={"350px 1fr"} gap="16">
                    <GridItem>
                        <Box w="full" h="550px" transform="translateY(20px)">
                            <Image src={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`} alt=""/>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <VStack h="full" justifyContent="flex-start" alignItems="flex-start" spacing="8" >
                            <Text color="white" fontWeight={600} fontSize={"2xl"}>
                                {data?.data?.results[0].title}
                            </Text>
                            <Text color="gray.200" fontSize="lg">
                                {data?.data?.results[0].variantDescription}
                            </Text>
                            <VStack alignItems="flex-start">
                                <Text color="white" fontWeight={600} fontSize="xl">Creator</Text>
                                <HStack w="full" justifyContent="flex-start">
                                    {data?.data?.results[0].creator?.items?.map(
                                        (item, i) => 
                                        <VStack>
                                            <Avatar src={item.resourceURI} name={item.name} />
                                            <Text color="white" key={i}>{item.name}</Text>
                                        </VStack>
                                    )}
                                </HStack>
                            </VStack>
                        </VStack>
                    </GridItem>
                </Grid>
            </HStack>

            </VStack>

        </Box>
        </>
    )
}