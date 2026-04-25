import React, { useEffect } from 'react'
import { Box, Flex, Text, Image, Button, Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from "../Redux/Features/product.js"
import { addToCart, removeToCart } from "../Redux/Features/cart.js"
function Products() {

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart)
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.items)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (



    <Box p="20px" >

      <Heading mt="50px" mb="50px" textAlign={"center"}>Products</Heading>
      <Flex wrap="wrap" gap="20px" justify="center">

        {data.map((item) => (
          <Box
            key={item.id}
            w="250px"
            border="1px solid #ddd"
            borderRadius="10px"
            p="15px"
          >
            <Image
              src={item.image}
              alt={item.title}
              borderRadius="10px"
            />

            <Text fontSize="lg" fontWeight="bold" mt="10px">
              {item.title}
            </Text>

            <Text fontSize="sm" color="gray.600">
              {item.description}
            </Text>

            <Text mt="5px" fontWeight="bold">
              ₹{item.price}
            </Text>

            <Text fontSize="sm">
              ⭐ {item.rating}
            </Text>

            {cart.find((el) => el.id === item.id)
              ?
              <Button
                onClick={() => dispatch(removeToCart(item.id))}
                mt="10px" w="100%"
                bgColor={"#ef5d5de7"}
                color="#fff"
              >
                Remove from Cart
              </Button>
              :
              <Button
                onClick={() => dispatch(addToCart(item))}
                mt="10px" w="100%">
                Added to cart
              </Button>

            }

          </Box>
        ))}

      </Flex>

    </Box>
  )
}

export default Products