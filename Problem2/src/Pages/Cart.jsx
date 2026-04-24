import React from 'react'
import { Box, Flex, Text, Button, Image, Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart, clearCart } from "../Redux/Features/cart.js"


function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart)
    console.log(cartItems)
    return (
        <Box p="20px" >
            <Heading mt="50px" mb="20px" textAlign={"center"}>Cart</Heading>

            {cartItems.length === 0
                && <Text textAlign={"center"} fontWeight={"400"} fontSize={"10px"}>Your Cart is empty</Text>
            }

            {cartItems?.map((item) => (
                <Box mb="20px" key={item.id} w="100%">
                    <Flex
                        border="1px solid #bdbdbdad"
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

                        <Button
                            onClick={() => dispatch(removeToCart(item.id))}
                            bgColor={"#e73f3fda"} color={"#fff"}>
                            Delete
                        </Button>

                    </Flex>
                </Box>
            ))}

        </Box>
    )
}

export default Cart