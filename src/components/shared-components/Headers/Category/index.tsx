import { Flex, FlexProps, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';

import { SubtitleText, TitleTextProps } from '../..';

interface CategoryHeaderProps extends TitleTextProps {
    title: string;
    mb?: ResponsiveValue<string | number>;
    flex?: FlexProps['flex'];
    alignItems?: FlexProps['alignItems'];
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
    title,
    mb,
    flex,
    alignItems,
    ...props
}) => (
    <Flex justifyContent='start' mb={mb} flex={flex} alignItems={alignItems}>
        <SubtitleText
            titleTextFz={{ base: '2xl', xl: '4xl', '2xl': '5xl' }}
            titleTextLh={{ base: '32px', xl: '40px', '2xl': '48px' }}
            {...props}
            titleText={title}
        />
    </Flex>
);
