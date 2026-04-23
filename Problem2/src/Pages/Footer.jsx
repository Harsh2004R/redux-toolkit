import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

function Footer() {
  return (
    <Box bg="black" color="white" mt="40px" px="20px" py="20px">
      
      <Flex 
        justify="space-between" 
        align="center" 
        flexWrap="wrap"
        gap="10px"
      >
        
        <Text fontSize="14px">
          © 2026 MyStore. All rights reserved.
        </Text>

        <Flex gap="20px">
          <Text cursor="pointer">Home</Text>
          <Text cursor="pointer">Products</Text>
          <Text cursor="pointer">Cart</Text>
        </Flex>

      </Flex>

    </Box>
  )
}

export default Footer