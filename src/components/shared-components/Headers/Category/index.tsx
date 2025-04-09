import { Flex, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

import { SubtitleText } from '../../Text/Subtitle';

interface CategoryHeaderProps {
    title: string;
    mb?: ResponsiveValue<string | number>;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, mb, ...props }) => (
    <Flex justifyContent='start' mb={mb}>
        <SubtitleText
            titleTextFz={{ base: '2xl', xl: '4xl', '2xl': '5xl' }}
            titleTextLh={{ base: '32px', xl: '40px', '2xl': '48px' }}
            {...props}
            titleText={title}
        />
    </Flex>
);
