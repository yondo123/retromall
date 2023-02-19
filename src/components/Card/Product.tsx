import React from 'react';
import { Card, CardBody, CardFooter, Button, Image, Text, Tag, Flex } from '@chakra-ui/react';

const Product = () => (
    <Card maxW="md" mt="3">
        <CardBody>
            <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                borderRadius="lg"
            />
            <Text fontSize="xl">쇼파</Text>
            <Text color="primary" fontSize="md">
                5,000 원
            </Text>
        </CardBody>
        <CardFooter>
            <Flex direction="column" align="start">
                <Flex direction="row" gap="8px">
                    <Tag>#Xbox</Tag>
                    <Tag>#Xbox</Tag>
                    <Tag>#Xbox</Tag>
                    <Tag>#Xbox</Tag>
                    <Tag>#Xbox</Tag>
                </Flex>
                <Button variant="unstyled" color="primary">
                    구매하기
                </Button>
            </Flex>
        </CardFooter>
    </Card>
);

export default Product;
