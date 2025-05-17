import { Box, Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';

import { TitleText } from '~/components/shared-components';

type HeaderSectionProps = {
    title: string;
    description?: string;
};

const titleStyles = { base: '2xl', xl: '5xl' };

export const HeaderSection: React.FC<HeaderSectionProps> = memo(({ title, description }) => (
    <Box>
        <TitleText titleText={title} titleTextFz={titleStyles} titleTextLh={titleStyles} />
        {description && (
            <Flex maxW={{ xl: 696 }} mx='auto' mt={{ base: 4, xl: 3 }} justifyContent='center'>
                <Text
                    fontSize={{ base: '14px', xl: '16px' }}
                    textAlign='center'
                    noOfLines={4}
                    color='blackAlpha.600'
                >
                    {description}
                </Text>
            </Flex>
        )}
    </Box>
));
