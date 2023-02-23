import React, { useEffect } from 'react';
import { Box, Button, ButtonGroup, Flex, Menu, IconButton, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { signIn, signOut, useSession } from 'next-auth/react';
import { getCategories } from '../../api/product';
import Link from 'next/link';
import { getToken } from '../../api/auth';

const Navbar = () => {
    const { data: session, status } = useSession();
    useEffect(() => {
        getCategories();
    }, []);

    if (session) {
        console.log(JSON.stringify(session), 'status', status);
        getToken();
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
                <Button>
                    <Link
                        href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=redirect_uri=https://retromall.herokuapp.com/auth/kakao`}
                    >
                        <a>카카오테스트</a>
                    </Link>
                </Button>
                {session ? (
                    <Button
                        bgColor="primary"
                        color="white"
                        _hover={{ bg: 'accent' }}
                        onClick={() => {
                            signOut();
                        }}
                    >
                        로그아웃
                    </Button>
                ) : (
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
                )}
            </ButtonGroup>
        </Flex>
    );
};

export default Navbar;
