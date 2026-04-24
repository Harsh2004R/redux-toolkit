import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaOpencart } from "react-icons/fa";

function Navbar() {
    const cartValue = useSelector((state) => state.cart.cart.length)
    return (
        <Box zIndex={"1000"} position={"fixed"} w="100%" bg="black" color="white" px="20px" py="15px">
            <Flex justify="space-between" align="center" flexWrap="wrap">

                <Text fontSize="20px" fontWeight="bold">
                    MyStore
                </Text>

                <Flex gap="20px">
                    <Link to="/"><Text cursor="pointer">Home</Text></Link>
                    <Link to="/products"><Text cursor="pointer">Products</Text></Link>
                    <Link to="/add-product"><Text cursor="pointer">Add Product</Text></Link>
                    {/* <Text cursor="pointer">Cart</Text></Link> */}
                    <Link to="/cart"> <Flex color={"#f46624"} alignItems={"center"} justifyContent={"center"} alignContent={"center"}><FaOpencart /><Text fontSize={"10px"} color="#fff" marginLeft={"10px"} cursor="pointer">{cartValue}</Text> </Flex></Link>
                </Flex>

            </Flex>
        </Box>
    )
}

export default Navbar