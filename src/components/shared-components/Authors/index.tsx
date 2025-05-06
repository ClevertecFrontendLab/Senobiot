import { Avatar, Flex, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

import { AuthorCardProps } from '~/types';

import { StatItem, SubscribeButton, TextRegular } from '..';

export const AuthorCard: React.FC<{ authorData: AuthorCardProps }> = ({
    authorData: { name, email, profilePic, subscribers },
}) => (
    <Flex
        borderRadius='8px'
        pt={{ base: 2 }}
        pr={{ base: 2 }}
        pl={{ base: 3 }}
        pb={{ base: 3 }}
        p={{ md: 6 }}
        w='100%'
        maxH={{ '2xl': '144px' }}
        alignItems='flext-start'
        backgroundColor='lime.300'
        direction='column'
    >
        <HStack alignItems='flex-start'>
            <Avatar src={profilePic} size={{ base: 'xl' }} mt={{ base: 1, md: 'unset' }} />
            <VStack w='100%' alignItems='flex-start' gap={4}>
                <VStack gap={0} alignItems='flex-start' w='100%'>
                    <Flex
                        w='100%'
                        wrap={{ base: 'wrap', md: 'nowrap' }}
                        justifyContent='space-between'
                    >
                        <Flex
                            w={{ base: '100%', md: 'unset' }}
                            order={{ md: +1 }}
                            justifyContent='flex-end'
                        >
                            <TextRegular
                                regText='Автор рецепта'
                                regTextFz={{ base: '12px', md: '14px' }}
                            />
                        </Flex>
                        <TextRegular
                            regText={name}
                            regTextFz={{ base: '18px', md: '24px' }}
                            regTextLh={{ base: '24px', md: '32px' }}
                            regTextFw={600}
                        />
                    </Flex>
                    <TextRegular
                        regText={email}
                        regTextColor='blackAlpha.700'
                        regTextFz={{ base: 'xs' }}
                        regTextLh={{ base: '16px', md: '20px' }}
                    />
                </VStack>
                <Flex
                    pr={{ base: 1, md: 'unset' }}
                    justifyContent='space-between'
                    w='100%'
                    alignItems='center'
                >
                    <SubscribeButton />
                    <StatItem
                        statIconUrl='/icons/subscribers.svg'
                        stateIconSize={3}
                        stateTextFontSize='12px'
                        statValue={subscribers}
                        statGap={1.5}
                    />
                </Flex>
            </VStack>
        </HStack>
    </Flex>
);
