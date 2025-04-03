import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import BottomMnu from '~/components/BottomMenu';
import SectionTitle from '~/components/shared/SectionTitle';
import { PADDINGS } from '~/constants/styles';

import BlogSection from '../BlogsSection';
import NextSectionPreview from '../NextSectionPreview';
import SearchMenu from '../SearchMenu';
import MostTastySection from './MostTastySection';

interface ContentProps {
    children?: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => (
    <Box minH='100vh' mx={PADDINGS.content} pt={PADDINGS.topMenu} maxW={1360}>
        <SectionTitle title='Приятного аппетита!' />
        <SearchMenu />
        <Box>{children}</Box>
        <MostTastySection />
        <BlogSection />
        <NextSectionPreview />
        <BottomMnu />
    </Box>
);

export default Content;
