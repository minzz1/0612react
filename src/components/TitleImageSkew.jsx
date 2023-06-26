import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { CgEnter } from "react-icons/cg"

export default function TitleImageSkew( {title, description, imgUrl}) {
  return (
    <HStack w="full" h="400px" bg="gray.500" position="relative" overflow="hidden">
        <Box w="40%" h="full">

            <Box bg="gray.500" w="full" h="full"
                    transform={"rotate(-10deg) scale(1.5) translateY(40px)" }
                />
        </Box>
        <Box w="60%" h="full" bg="blue.300">
                <Image
                 w="full"
                 h="full"
                 objectFit="cover"
                 objectPosition="center"
                src={imgUrl}
                alt="" />
        </Box>
        <VStack 
            position="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            alignItems="center"
            >
            <VStack w="7xl" h="full" 
                alignItems="flex-start"
                justifyContent="center">
                <Text color="white" fontWeight={700} fontSize="32" textTransform="uppercase">
                    {title}
                </Text>
                <Text color="white" w="3xl">
                    {description}
                </Text>
                <Button mt="6"
                textTransform="uppercase"
                variant="outline"
                colorScheme="red"
                aria-label="Comins Button"
                rightIcon={< CgEnter />}
                >
                    i love army
                </Button>
            </VStack>
        </VStack>
    </HStack>
  )
}
