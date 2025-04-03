import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

import ButtonRounded from '~/components/shared/Button/Rounded';
import StatItem from '~/components/shared/StatItem';
import { PADDINGS } from '~/constants/styles';

const BookmarkPanel: React.FC = () => (
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
            <StatItem icon='/icons/bookmarks/heart.svg' value={185} name='heart' />
            <StatItem icon='/icons/bookmarks/pople.svg' value={589} name='people' />
            <StatItem icon='/icons/bookmarks/emoji-heart-eyes.svg' value={587} name='face' />
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

export default BookmarkPanel;
