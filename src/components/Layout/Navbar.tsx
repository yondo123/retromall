import React, { useEffect } from 'react';
import { Box, Button, ButtonGroup, Flex, Menu, IconButton, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { signIn, useSession } from 'next-auth/react';
import { getCategories } from '../../api/product';

const Navbar = () => {
    useEffect(() => {
        getCategories();
    }, []);
    const { data: session } = useSession();
    if (session) {
        alert(session);
    }
    return (
        <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box p="2">
                <Menu>
                    <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
                    <MenuList>
                        <MenuItem>매장홍보</MenuItem>
                        <MenuItem>판매하기</MenuItem>
                        <MenuItem>내정보</MenuItem>
                        <MenuItem>쪽지함</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <ButtonGroup gap="2">
                <Button
                    bgColor="primary"
                    color="white"
                    _hover={{ bg: 'accent' }}
                    onClick={() => {
                        signIn('kakao');
                    }}
                >
                    카카오톡 로그인
                </Button>
            </ButtonGroup>
        </Flex>
    );
};

export default Navbar;
