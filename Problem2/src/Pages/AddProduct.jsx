import React, { useState } from 'react'
import { Box, Flex, Input, Text, Button } from '@chakra-ui/react'
import { nanoid } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from 'react-redux'
import { makePostRequest } from "../Redux/Features/addProduct.js"



function AddProduct() {
    const newproductSelector = useSelector((state) => state.newProduct.newProduct)
    console.log(newproductSelector);
    const dispatchEvent = useDispatch();
    const id = nanoid()
    const [input, setInputData] = useState({
        id,
        title: "",
        description: "",
        price: 0,
        rating: 4,
        quantity: 5,
        image: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((prev) => ({
            ...prev,
            [name]: name === "price" || name === "rating" || name === "quantity" ? Number(value) : value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchEvent(makePostRequest(input))
        // console.log(input);


    }
    return (
        <Box p="10" w="100%" minH={"100vh"}>
            <Box pr="10" pl="10" w="100%" h="auto">
                <Text mt="80px" mb="20px" textAlign={"center"} fontSize={"14px"} color="#dbdbdbd8">
                    Add new product
                </Text>


                <form onSubmit={handleSubmit}>
                    <Flex gap="8px" justifyContent={"center"} alignItems={"center"} alignContent={"center"} flexDirection={"column"}>
                        <Input name="title" value={input.title} onChange={handleChange} type="text" placeholder='title' w="150px" />
                        <Input name="description" value={input.description} onChange={handleChange} type="text" placeholder='description' w="150px" />
                        <Input name="price" value={input.price} onChange={handleChange} type="number" placeholder='price' w="150px" />
                        <Input name="rating" value={input.rating} onChange={handleChange} type="number" placeholder='rating' w="150px" />
                        <Input name="quantity" value={input.quantity} onChange={handleChange} type="number" placeholder='quantity' w="150px" />
                        <Input name="image" value={input.image} onChange={handleChange} type="text" placeholder='image' w="150px" />
                        <Button m="5" h="30px" borderRadius={"20px"} type="submit">Add</Button>
                    </Flex>

                </form>


            </Box>
        </Box>
    )
}

export default AddProduct
