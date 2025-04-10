import { Avatar, Flex, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

import { BORDERS } from '~/constants/styles';
import { BlogType } from '~/data';

import { TextRegular } from '../Text';

const BlogCard: React.FC<BlogType> = ({ name, email, profilePic, quote }) => (
    <Flex
        border={BORDERS.light}
        borderRadius='8px'
        p={4}
        alignItems='flext-start'
        backgroundColor='white'
        direction='column'
        justifyContent='flex-start'
    >
        <HStack gap={2} alignItems='flex-start' mb={{ base: 4, '2xl': 7 }}>
            <Avatar src={profilePic} size={{ base: 'sm' }} />
            <VStack alignItems='flex-start' gap={0}>
                <TextRegular regText={name} regTextFz={{ base: 'md' }} regTextFw={500} />
                <TextRegular
                    regText={email}
                    regTextFw={400}
                    regTextColor='alphaBlack.700'
                    regTextFz={{ base: 'xs' }}
                />
            </VStack>
        </HStack>
        <TextRegular
            regTextNoOfLines={3}
            regText={quote}
            regTextFw={400}
            regTextFz={{ base: 'sm' }}
        />
    </Flex>
);

export default BlogCard;
