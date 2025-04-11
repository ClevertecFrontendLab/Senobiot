import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { blogsData } from '~/data';

import { ButtonViewMore } from '../';
import { TitleText } from '../Text';
import BlogCard from './Card';

export const BlogsSection: React.FC = () => (
    <Flex
        bg='lime.300'
        wrap='wrap'
        justifyContent='space-between'
        alignItems='center'
        borderRadius={16}
        mb={8}
        p={{ base: 3, xl: 6 }}
    >
        <Box mb={{ base: 3, xl: 4, '2xl': 8 }}>
            <TitleText
                titleText=' Кулинарные блоги'
                titleTextFz={{ base: '2xl', xl: '3xl' }}
                titleTextFw={500}
                titleHeading='h5'
            />
        </Box>
        <Flex gap={3} order={{ base: 0, xl: 1 }} direction={{ base: 'column', md: 'row' }}>
            {blogsData.map((blog, index) => (
                <BlogCard key={index} {...blog} />
            ))}
        </Flex>
        <Flex
            order={{ base: 1, xl: 0 }}
            justifyContent='center'
            w={{ base: '100%', xl: 'initial' }}
            mb={{ base: 0, xl: 4, '2xl': 8 }}
        >
            <ButtonViewMore
                noButtonIcon={false}
                title='Все авторы'
                fz={{ base: '16px', '2xl': '18px' }}
            />
        </Flex>
    </Flex>
);
