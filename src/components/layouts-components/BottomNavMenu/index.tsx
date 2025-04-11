import { Flex } from '@chakra-ui/react';
import React from 'react';

import { ButtonRounded } from '~/components/shared-components';
import { PADDINGS } from '~/constants/styles';

const bottomMenuProps = [
    // TODO возможно потом вынести куда
    {
        name: 'Главная',
        iconUrl: '/icons/bottom-menu/home.svg',
        route: '',
        isActive: true,
    },
    {
        name: 'Поиск',
        iconUrl: '/icons/bottom-menu/lense.svg',
        route: '',
        isActive: false,
    },
    {
        name: 'Записать',
        iconUrl: '/icons/bottom-menu/pen.svg',
        route: '',
        isActive: false,
    },
    {
        name: 'Мой профиль',
        iconUrl: '/avatars/avatar-4.png',
        route: '',
        isActive: false,
    },
];

export const BottomNavMenu: React.FC = () => (
    <Flex
        data-test-id='footer'
        position='fixed'
        bottom={0}
        zIndex={10}
        bg='lime.50'
        display={{ base: 'flex', xl: 'none' }}
        height={PADDINGS.bottomMnu * 4}
        width='100%'
        justifyContent='space-around'
    >
        {bottomMenuProps.map((button, index) => (
            <ButtonRounded
                key={index}
                text={button.name}
                iconUrl={button.iconUrl}
                isActive={button.isActive}
                minWidth={90}
                textColor='blackAlpha.700'
            />
        ))}
    </Flex>
);
