import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import { BORDERS } from '~/constants/styles';
import { BlogType } from '~/data';

const BlogCard: React.FC<BlogType> = ({ name, username, profilePic, excerpt }) => (
    <Flex
        border={BORDERS.light}
        borderRadius='8px'
        p={4}
        m={2}
        alignItems='center'
        backgroundColor='white'
    >
        <Avatar src={profilePic} mr={4} />
        <Box>
            <Heading size='sm'>{name}</Heading>
            <Text color='gray.500'>{username}</Text>
            <Text mt={2}>{excerpt}</Text>
        </Box>
    </Flex>
);

export default BlogCard;
