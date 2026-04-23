import React from 'react'
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react'



const cartItems = [
    {
        "id": "1",
        "title": "Wireless Headphones",
        "description": "High-quality sound with noise cancellation.",
        "price": 2499,
        "rating": 4.5,
        "quantity": 20,
        "image": "https://picsum.photos/id/180/300/300"
    }
]
function Cart() {
    return (
        <Box p="20px">

            {cartItems.map((item) => (
                <Box minH={"100vh"} w="100%">
                    <Flex
                        key={item.id}
                        border="1px solid #ddd"
                        borderRadius="10px"
                        p="15px"
                        mb="15px"
                        align="center"
                        justify="space-between"
                        flexWrap="wrap"
                        gap="10px"
                    >

                        <Flex align="center" gap="10px">
                            <Image
                                src={item.image}
                                boxSize="80px"
                                borderRadius="10px"
                            />

                            <Box>
                                <Text fontWeight="bold">
                                    {item.title}
                                </Text>
                                <Text>₹{item.price}</Text>
                            </Box>
                        </Flex>

                        <Flex align="center" gap="10px">
                            <Button>-</Button>
                            <Text>{item.quantity}</Text>
                            <Button>+</Button>
                        </Flex>

                        <Button bgColor={"#e73f3fda"} color={"#fff"}>
                            Delete
                        </Button>

                    </Flex>
                </Box>
            ))}

        </Box>
    )
}

export default Cart