import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

import { PADDINGS } from '~/constants/styles';

import { StatItem } from '../shared-components';
import ButtonRounded from '../shared-components/Button/Rounded';

export const BookmarkSideMenu: React.FC = () => (
    <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        width={280}
        w='256px'
        h='100vh'
        maxHeight='100vh'
        position='fixed'
        right={0}
        top={0}
        pt={PADDINGS.topMenu}
    >
        <VStack spacing={4} py={4} width={208} height={200} justifyContent='space-between'>
            <StatItem
                statIconUrl='/icons/bookmarks/heart.svg'
                statValue={185}
                statIconAltText='heart'
            />
            <StatItem
                statIconUrl='/icons/bookmarks/pople.svg'
                statValue={589}
                statIconAltText='people'
            />
            <StatItem
                statIconUrl='/icons/bookmarks/emoji-heart-eyes.svg'
                statValue={587}
                statIconAltText='face'
            />
        </VStack>
        <Box mb={14}>
            <ButtonRounded
                text='Записать рецепт'
                iconUrl='/icons/bookmarks/pen.svg'
                isActive={true}
            />
        </Box>
    </Box>
);
