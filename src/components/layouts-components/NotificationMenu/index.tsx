import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import { ButtonRounded, ProfileNotification } from '~/components/shared-components';
import { BASE_URL } from '~/constants';
import { PADDINGS, WIDTHS } from '~/constants/styles';

export const BookmarkSideMenu: React.FC = () => (
    <Flex
        display={{ base: 'none', xl: 'flex' }}
        flexDirection='column'
        justifyContent='space-between'
        width={280}
        w={WIDTHS.sideMenu}
        h='100vh'
        maxHeight='100vh'
        position='fixed'
        zIndex={9}
        right={0}
        top={0}
        bg='white'
        pt={PADDINGS.topMenu}
    >
        <ProfileNotification
            height={200}
            flexDirection='column'
            stateIconSize={4}
            stateTextFontSize='16px'
            py={6}
            width='100%'
            alignItems='center'
            stackDirection='column'
            gap={10}
        />
        <Box mb={14}>
            <ButtonRounded
                text='Записать рецепт'
                iconUrl={`${BASE_URL}assets/images/icons/bookmarks/pen.svg`}
                isActive={true}
                fontWeight={400}
                activeTextColor='blackAlpha.700'
                gap={3}
            />
        </Box>
    </Flex>
);
