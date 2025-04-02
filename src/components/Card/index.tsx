import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { BORDERS } from '~/constants/styles';

import StatItem from '../shared/StatItem';

type RecipeCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    likes?: number;
    saves?: number;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, imageSrc }) => (
    <Box border={BORDERS.light} borderRadius='8px' overflow='hidden' maxW='md'>
        <Image src={imageSrc} alt={title} borderRadius='md' />
        <Box p='6'>
            <Text fontSize='lg' fontWeight='bold' mb='2'>
                {title}
            </Text>
            <Text fontSize='sm' color='gray.500' mb='4'>
                {description}
            </Text>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Button
                    leftIcon={
                        <Image src='/icons/bookmarks/heart.svg' alt='сохранить' boxSize='24px' />
                    }
                    colorScheme='teal'
                    variant='outline'
                >
                    Сохранить
                </Button>
                <Button colorScheme='orange' variant='outline'>
                    Готовить
                </Button>
            </Box>
            <Box display='flex' justifyContent='space-between' mt='4'>
                <StatItem icon='/icons/bookmarks/heart.svg' value={85} name='heart' />
                <StatItem icon='/icons/bookmarks/pople.svg' value={152} name='people' />
            </Box>
        </Box>
    </Box>
);

export default RecipeCard;
