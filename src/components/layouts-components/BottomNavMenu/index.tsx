import { Flex } from '@chakra-ui/react';
import React from 'react';

import { ButtonRounded } from '~/components/shared-components';
import { BOTTOM_MENU_CONIG, TEST_IDS } from '~/constants';

import { bottomNavMenuStyles } from './BottomNavMenu.styles';

export const BottomNavMenu: React.FC = () => (
    <Flex data-test-id={TEST_IDS.footer} sx={bottomNavMenuStyles}>
        {BOTTOM_MENU_CONIG.map((button, index) => (
            <ButtonRounded
                key={index}
                text={button.name}
                iconUrl={button.iconUrl}
                isActive={button.isActive}
                minWidth='84px'
                textColor='blackAlpha.700'
            />
        ))}
    </Flex>
);
