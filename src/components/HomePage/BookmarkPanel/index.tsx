import { Box, HStack, IconButton, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import { PADDINGS, SHADOWS } from '~/constants/styles';

interface StatProps {
    icon: string;
    value: number;
    name: string;
}

const StatItem: React.FC<StatProps> = ({ icon, value, name }) => (
    <HStack spacing={2}>
        <Image src={icon} alt={name} boxSize='24px' />
        <Text fontSize='lg' color='green.500' fontWeight='bold'>
            {value}
        </Text>
    </HStack>
);

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
        <VStack spacing={4} py={28} width={208} height={200} justifyContent='space-between'>
            <StatItem icon='/icons/bookmarks/heart.svg' value={185} name='heart' />
            <StatItem icon='/icons/bookmarks/pople.svg' value={589} name='people' />
            <StatItem icon='/icons/bookmarks/emoji-heart-eyes.svg' value={587} name='face' />
        </VStack>
        <Box mt={6} width={208} height={208} pt={80} background={`${SHADOWS.green}`}>
            <IconButton
                icon={<Image src='/icons/bookmarks/pen.svg' alt='pen' boxSize='48px' />}
                aria-label='Write Recipe'
                _hover={{
                    border: 'none',
                }}
                color='white'
                size='lg'
                mb={2}
            />
            <Text fontSize='sm' textAlign='center' pb={14}>
                Записать рецепт
            </Text>
        </Box>
    </Box>
);

export default BookmarkPanel;
