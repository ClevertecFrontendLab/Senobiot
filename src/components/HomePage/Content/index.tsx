import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import BottomMnu from '~/components/BottomMenu';
import SectionTitle from '~/components/shared/Text/Title';
import Slider from '~/components/Slider';
import { PADDINGS } from '~/constants/styles';
import { sliderData } from '~/data';

import BlogSection from '../BlogsSection';
import NextSectionPreview from '../NextSectionPreview';
import SearchMenu from '../SearchMenu';
import MostTastySection from './MostTastySection';
interface ContentProps {
    children?: ReactNode;
}

const Content: React.FC<ContentProps> = () => (
    <Box minH='100vh' mx={PADDINGS.content} pt={PADDINGS.topMenu} maxW={1360}>
        <SectionTitle titleText='Приятного аппетита!' />
        <SearchMenu />
        <Slider slides={sliderData} />
        <MostTastySection />
        <BlogSection />
        <NextSectionPreview />
        <BottomMnu />
    </Box>
);

export default Content;
