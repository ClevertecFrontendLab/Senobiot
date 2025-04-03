import { Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import RecipeCard from '~/components/Card';
import ButtonViewMore from '~/components/shared/ButtonViewMore';
import SectionSubTitle from '~/components/shared/SectionSubTitle';
import { mostTastyCardsData } from '~/data';

const MostTastySection: React.FC = () => {
    const columns =
        useBreakpointValue({
            sm: 'fr',
            md: 'repeat(2, 2fr)',
            xl: 'repeat(1, 2fr)',
            '2xl': 'repeat(2, 2fr)',
        }) || 'repeat(2, 2fr)';

    return (
        <Flex wrap='wrap' justifyContent='space-between'>
            <SectionSubTitle title='Самое сочноe' />
            <ButtonViewMore title='Вся побдорка' />
            <Grid templateColumns={columns} gap={6}>
                {mostTastyCardsData.map((card, index) => (
                    <RecipeCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageSrc={card.img}
                    />
                ))}
            </Grid>
        </Flex>
    );
};

export default MostTastySection;
