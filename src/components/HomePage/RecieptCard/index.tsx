import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export interface RecipeCardProps {
    title: string;
    description: string;
    image: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, image }) => (
    <Box
        bg='white'
        borderRadius='md'
        shadow='md'
        p={4}
        _hover={{ transform: 'scale(1.05)' }}
        transition='transform 0.2s'
    >
        <Image src={image} alt={title} borderRadius='md' mb={4} />
        <VStack align='start'>
            <Text fontWeight='bold' fontSize='lg'>
                {title}
            </Text>
            <Text fontSize='sm' noOfLines={2}>
                {description}
            </Text>
        </VStack>
    </Box>
);

export default RecipeCard;
