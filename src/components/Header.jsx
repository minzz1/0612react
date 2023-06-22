import { Box, Button, HStack, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsSunsetFill } from "react-icons/bs"
import {FaMoon } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function Header(){
    const  [ scroll, setScroll ] = useState(true)
    useEffect(() => {
        document.addEventListener("wheel", (event) => {
            if(event.deltaY < 0){
                //스크롤 올림
                setScroll(true);
            }else if (event.deltaY > 0){
                //스크롤 내림
                setScroll(false)
            }
        })
    })

    const GNB = [
        {title: "home", href: "/"},
        {title: "characters", href: "/characters"},
        {title: "comics", href: "/comics"},
        {title: "events", href: "/events"}
    ]
    const { colorMode, toggleColorMode } = useColorMode();
    return <Stack 
    transform={scroll ? "translateY(0px)" : "translateY(-60px)"}
    transition="0.4s"
    bg="black"
    w="full"
    h="60px" 
    color="white" 
    fontWeight={600} 
    fontSize="20px" 
    alignItems="center"
     justifyContent="center" 
     boxShadow="sm" 
     position="fixed" 
     zIndex={"999"}
     >
        <HStack w="7xl" height="full" justifyContent="space-between">
            <HStack spacing="8">
                <Box w="24">
                    <Image 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA5CAMAAAA7tUSkAAAAaVBMVEXUAxf////SAADRAADTAAvxwcPkjI3eYmTUABDvu7zaR0vmkJPfbG/99PXbV1r12dn10dPie37XMjfjgILVISfpoKHnlZf44uP++vrWKTDgc3b66erttbb77u7xx8fqqKnYOj/bUFXUFh4+n82EAAADzklEQVRYhe2Y3bKjIAyAMcGKVq1Vsdrj0er7P+RC+NGd6YVtmb3Z5kIDQj5IIqCMfeUr/0R4cBFHsGsSXB4HwCKbTqElhiPcE4SW9BD3DHVz1aJLRs25067KRFtaWUE8VG2zcJUVWbmXFu6mnxJ+lJtHJINgIEm7AYPGVALjSeRE4l3fKmQMfqK95NjrfvgO9w4MJ9IuijuayoXvuNFY6+uvMr/21NA9SLDQxbe4UnELx7UjiK6w50Z3jetXIR661MchuBOKOvLcXzeYv7gXGljGTZ9LEO4vOk1zrcHJcW08yb05mEQYpy2+73OjGmbHNX4k1XLhus1aAtJMz8R9tO3APuGWWDkY3G1dAWi4LaaemwLS9EtqP3AhPuJ2zrmK2zkGA8uFxXNvCOTvwXD1svgJN203rs+Y0nEFem6Emb72GIZ7yz0X/Zt5esYdcjPtMNx+3uZbOMTs4svJGwUFNqEwpIa7IqL4hBsVnrvqGyEqn1dnmiOtYw3lWOfyUL0KH3GdXHDRt1jb+rFcUxWNNNOZwpCE557IujbbM8O9mUclNZ56A/PcIRCXIt2QT+ty9+QXaSklbCHCc8lgQrNO9ly1Z/VOv2F4P1NKPYh43nFjZHBzBbVqEbcvij4Q1yxHQIv0uPj6HoTfINWALHdBwd5/j+xCQbcLBbFAMlYZLo0k4e5IQgXL1aebt7mT2ejI6oVS+NK22qdFZrxqXMu2fYmJENzKrMiGeN45vU+2Bz2qA52tL9QmHYJLyRvRYliN+2ibB6vZ+bg/ESiI4WYI4OKrTrGvcmkeP2S1qvZcE9DVnDD8GYxUajelaZxR7U8nZQMv5hURR8Mt9lwTgGHQ118H0xsV297fBP3ajq9ytSMb0PrNrw1UMly8mWC6E67K7Wfc6mWuztgaPK6XXeffGcUFs2aDO9EzEYjbaDduXJ0kYpv4wJlxNDfrl0rtQNxMd9q4Hfz1NVLbt7WEwQ5Lcf2pxHynmPrD3KHMskctWFk+hNg+tdj+6ytZ1aeaVmrBqSITurNvjLmVkh/knjC0HOLWVRxa5AGuWmSDf3cfwf6fop3tdOUn9z+GC7b5bO8/zp60ZmKnH8PWUxqjNSTjyf4I4vkCnbO0zqlEh80dGE5SDrYJX87n7CWw4s6jM4py4M7ogqk1JIYZT6V7MILrOK73zhYgnsfmpZwSj/R8c1yQ7r8XnO6PmDtuvMyLe5B6blpfPbdpuvnFXF5K7yGxtK62lTJ3w2HXk/cuT7x2lrK2PfEu52SL/CERu5+KuxAB8Kf687zi+yZf+cpXQssfc7VIBpvW528AAAAASUVORK5CYII=" 
                    alt="Main logo" />
                </Box>
                <HStack spacing="4" textTransform="uppercase">
                        {
                            GNB.map((item)=>(
                                <Link to={item.href} key={item.title} aria-label={item.title}>
                                    <Text>{item.title}</Text>
                                </Link>
                            ))
                        }
{/*                    
                    <Link to="/characters"><Text>character</Text></Link>
                    <Link to="/comics"><Text>comics</Text></Link>
                    <Link to="/events"><Text>events</Text></Link> */}
                </HStack>
            </HStack>
            <Button
                onClick={toggleColorMode}
            >
                {
                    colorMode === "light" ? <BsSunsetFill/> : <FaMoon/>
                }
            </Button>
        </HStack>


    </Stack>
}