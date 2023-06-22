import { Box, HStack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlick (){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return <Box w="full" h="full">
        <Slider {...settings}>
            <HStack w="full" h="450px" 
            backgroundImage={'url("https://store-images.s-microsoft.com/image/apps.24728.69399725068812250.e18e30fe-4fd2-40d8-9c22-033732f7b7d3.4e644a3c-31c2-4c95-a506-798578841474?q=90&w=480&h=270")'}
            backgroundSize="cover"
            >
            </HStack>
            <HStack w="full" h="450px" 
            backgroundImage={'url("https://store-images.s-microsoft.com/image/apps.24728.69399725068812250.e18e30fe-4fd2-40d8-9c22-033732f7b7d3.4e644a3c-31c2-4c95-a506-798578841474?q=90&w=480&h=270")'}
            backgroundSize="cover"
            >
            </HStack>
        </Slider>
    </Box>
}