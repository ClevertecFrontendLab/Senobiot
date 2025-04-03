import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import StatSection from '~/components/shared/BookmarksSection';
import SectionSubTitle from '~/components/shared/SectionSubTitle';
import TextRegular from '~/components/shared/Text/Regular';

interface NextSectionCardProps {
    title: string;
    text: string;
    dishType: string;
    iconUrl?: string;
    bg?: string;
}

const NextSectionCard: React.FC<NextSectionCardProps> = ({
    title,
    text,
    dishType,
    iconUrl,
    bg,
}) => (
    <Flex flexBasis='328px' wrap='wrap'>
        <Box>
            <SectionSubTitle fontSize='20px' lineHeight='28px' title={title} />
        </Box>
        <Box>
            <TextRegular text={text} />
        </Box>
        <StatSection name={dishType} iconUrl={iconUrl} bg={bg} />
    </Flex>
);

export default NextSectionCard;
