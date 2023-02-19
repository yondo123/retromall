import React from 'react';
import Navbar from '../components/Layout/Navbar';
import { Container, Divider, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Product from '../components/Card/Product';
const Home = () => {
    return (
        <Container>
            <Navbar />
            <Divider />
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
                <Input type="text" placeholder="상품이름을 검색해주세요." variant="flushed" />
            </InputGroup>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </Container>
    );
};

export default Home;
