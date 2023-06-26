import { Box, Grid, HStack, Image, Text, VStack} from "@chakra-ui/react";
import CarouselSlick from "../components/CarouselSlick";
import CardItems from "../components/CardItems";
import TitleImageSkew from "../components/TitleImageSkew";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { comicList, eventsList } from "../api";
import SkeletonList from "../components/SkeletonList";
import { Helmet } from "react-helmet";
import AOS from "aos";
import { useEffect } from "react";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true
  };


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
        useEffect(()=>{
            AOS.init();
        }, [])
    const {data, isLoading } = useQuery('repoData', comicList );

    const { data: eventsData, isLoading: eventsIsLoading } = useQuery('eventsData', eventsList );
  
    
    return <>
    <HelmetProvider>
        <Helmet>
            <title>마블 홈페이지 입니다</title>
        </Helmet>
    {/* 캐러셀 */}
        <Box >
            <CarouselSlick/>
        </Box>

    {/* 특장점 */}
    <HStack w="full" justifyContent="center" py="16" bg="gray.200" >
        <Grid gap={"4"} w="7xl" templateColumns={"repeat(3, 1fr)"}>
            {
                featuresLists.map((item, i) => (
                    <CardItems key={i} item={item} />
                ))
            }
        </Grid>
    </HStack>

{/* 기울어진 이미지 타이틀 */}
    <TitleImageSkew 
        title="bts"
        description="10주년 축하해 ! "
        imgUrl="https://phinf.wevpstatic.net/MjAyMzA2MTRfMjY5/MDAxNjg2NzE1Nzg0NzAw.XhN-yq5Z16hjKWb3U_5-Vqscjlz445SFgy5Tk6whZXsg.QG4gt4MHm8R74jukKxFwAxXdGff683tpv29Ip8azgYkg.JPEG/c1c69ce1-49a1-4818-adaf-6d9d07ce0b93.jpeg?type=w1414"
        />
        {/* Comic 컨텐츠 리스트*/}
    <VStack w="full" position="relative" h="400px">
        {/*한박스 위로 올라오게 하는 범위 지정 */}
        {isLoading ? ( <SkeletonList />) : " "}
        <Box position="absolute" w="7xl" py="8" px="2" top={-16} bg="white" >
            <Slider {...settings}>
                {data?.data?.results?.map((item,i)=>(
                    <Link to={`/comics/${item.id}?type=comics`}>
                        <VStack key={i} h="full" role="group" cursor="pointer" >
                            <Box w="170px" h="240px" _groupHover={{ transform: "scale(1.1)"}} transition={"0.4s"}>
                                <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`}
                                    w="full" h="full"
                                    objectFit="cover"
                                />
                            </Box>
                            <Text _groupHover={{color: "red.500", fontWeight: "600"}} mt="2" px="2">{item.title.substr(0, 38) }</Text>
                        </VStack>
                    </Link>
                ))}
            </Slider>
        </Box>
    </VStack>


    {/* Events 타이틀 */}
    <TitleImageSkew
        title="Events"
        description="10주년 축하해 ! "
        imgUrl="https://phinf.wevpstatic.net/MjAyMzA2MTRfMjY5/MDAxNjg2NzE1Nzg0NzAw.XhN-yq5Z16hjKWb3U_5-Vqscjlz445SFgy5Tk6whZXsg.QG4gt4MHm8R74jukKxFwAxXdGff683tpv29Ip8azgYkg.JPEG/c1c69ce1-49a1-4818-adaf-6d9d07ce0b93.jpeg?type=w1414"
        />
        {/* 마블 api 가져오기 */}

    {/* Events 컨텐츠 리스트*/}
    <VStack w="full" position="relative" h="400px">
        {/*한박스 위로 올라오게 하는 범위 지정 */}
        {eventsIsLoading ? ( <SkeletonList />) : " "}
        <Box
                position="absolute"
                w="7xl"
                py="8"
                px="2"
                top={-16}
                bg="white"
        >
            <Slider {...settings}>
                {eventsData?.data?.results?.map((item,i)=>(
                    <Link to={`/events/${item.id}?type=events`}>
                        <VStack key={i} h="full" role="group" cursor="pointer" >
                            <Box w="170px" h="240px" _groupHover={{ transform: "scale(1.1)"}} transition={"0.4s"}>
                                <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`}
                                    w="full" h="full"
                                    objectFit="cover"
                                />
                            </Box>
                            <Text _groupHover={{color: "red.500", fontWeight: "600"}} mt="2" px="2">{item.title.substr(0, 38) }</Text>
                        </VStack>
                    </Link>
                ))}
            </Slider>
        </Box>
    </VStack>

{/* Characters */}
    <TitleImageSkew
        title="Characters"
        description="10주년 축하해 ! "
        imgUrl="https://phinf.wevpstatic.net/MjAyMzA2MTRfMjY5/MDAxNjg2NzE1Nzg0NzAw.XhN-yq5Z16hjKWb3U_5-Vqscjlz445SFgy5Tk6whZXsg.QG4gt4MHm8R74jukKxFwAxXdGff683tpv29Ip8azgYkg.JPEG/c1c69ce1-49a1-4818-adaf-6d9d07ce0b93.jpeg?type=w1414"
        />

 {/* Characters 컨텐츠 리스트*/}
     {/* <VStack w="full" position="relative" h="400px"> */}
        {/*한박스 위로 올라오게 하는 범위 지정 */}
        {/* {charactersIsLoading ? ( <SkeletonList />) : " "}
        <Box
                position="absolute"
                w="7xl"
                py="8"
                px="2"
                top={-16}
                bg="white"
        >
            <Slider {...settings}>
                {charactersData?.data?.results?.map((item,i)=>(
                    <Link to={`/characters/${item.id}?type=characters`}>
                        <VStack key={i} h="full" role="group" cursor="pointer" >
                            <Box w="170px" h="240px" _groupHover={{ transform: "scale(1.1)"}} transition={"0.4s"}>
                                <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`characters ${i}`}
                                    w="full" h="full"
                                    objectFit="cover"
                                />
                            </Box>
                            <Text _groupHover={{color: "red.500", fontWeight: "600"}} mt="2" px="2">{item?.title?.substr(0, 38) }</Text>
                        </VStack>
                    </Link>
                ))}
            </Slider>
        </Box>
    </VStack> */}
    </HelmetProvider>
    </>
}
