import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

import ButtonViewMore from '~/components/shared/ButtonViewMore';
import TitleText from '~/components/shared/Text/Title';
import { blogsData } from '~/data';

import BlogCard from './BlogCard';

const BlogList: React.FC = () => (
    <Flex p={6} bg='lime.300' wrap='wrap' justifyContent='space-between'>
        <TitleText titleText=' Кулинарные блоги' titleTextFz='30px' titleTextLh='36px' />
        <Heading size='lg' mb={4}></Heading>
        <Box order={3}>
            {blogsData.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
            ))}
        </Box>
        <Box order={2}>
            <ButtonViewMore title='Все авторы' />
        </Box>
    </Flex>
);

export default BlogList;
