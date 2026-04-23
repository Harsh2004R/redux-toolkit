import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <Box w="100%" bg="black" color="white" px="20px" py="15px">
            <Flex justify="space-between" align="center" flexWrap="wrap">

                <Text fontSize="20px" fontWeight="bold">
                    MyStore
                </Text>

                <Flex gap="20px">
                    <Link to="/"><Text cursor="pointer">Home</Text></Link>
                    <Link to="/products"><Text cursor="pointer">Products</Text></Link>
                    <Link to="/cart"><Text cursor="pointer">Cart</Text></Link>
                </Flex>

            </Flex>
        </Box>
    )
}

export default Navbar