import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import RecipeCard from '~/components/Card';
import { mostTastyCardsData } from '~/data';

interface MostTastySectionProps {
    children?: ReactNode;
}

const MostTastySection: React.FC<MostTastySectionProps> = () => (
    <Box>
        <Flex alignItems='center'>
            <Text color='white' fontWeight='bold' fontSize='xl'>
                Самое сочное
            </Text>
        </Flex>
        <Grid templateColumns='repeat(2, 1fr)' gap={24}>
            {mostTastyCardsData.map((card) => (
                <RecipeCard title={card.title} description={card.description} imageSrc={card.img} />
            ))}
        </Grid>
    </Box>
);
export default MostTastySection;
