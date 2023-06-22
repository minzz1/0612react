import { Box, Grid, HStack} from "@chakra-ui/react";
import CarouselSlick from "../components/CarouselSlick";
import CardItems from "../components/CardItems";


const featuresLists = [
    {
        title: "스마트웹3기", 
        description: "와라라랄라라", 
        buttonText: "자세히보기"
    },
    {
        title: "API 요청량 3000번 리미트", 
        description: "와라라랄라라", 
        buttonText: "자세히보기"
    },
    {
        title: "React", 
        description: "와라라랄라라", 
        buttonText: "자세히보기"
    },
]

export default function Home( ) {
    return <>
    {/* 캐러셀 */}
        <Box >
            <CarouselSlick/>
        </Box>

    {/* 특장점 */}
    <HStack w="full" justifyContent="center" py="16" bg="gray.200">
        <Grid gap={"4"} w="7xl" templateColumns={"repeat(3, 1fr)"}>
            {
                featuresLists.map((item, i) => (
                    <CardItems key={i} item={item} />
                ))
            }

        </Grid>
    </HStack>
    </>
}
