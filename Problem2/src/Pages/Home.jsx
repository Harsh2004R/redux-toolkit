import React from 'react'
import { Box, Center, Text } from '@chakra-ui/react'
import Navbar from './Navbar'

function Home() {
    return (
        <>

            <Center h="80vh">
                <Box textAlign="center">
                    <Text fontSize="3xl" fontWeight="bold">
                        Welcome to MyStore
                    </Text>
                    <Text mt="10px">
                        Explore amazing products at best prices
                    </Text>
                </Box>
            </Center>
        </>
    )
}

export default Home