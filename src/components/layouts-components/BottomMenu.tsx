import { Flex, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { PADDINGS } from '~/constants/styles';

import ButtonRounded from '../shared-components/Button/Rounded';

const bottomMenuProps = [
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
        iconUrl: '/avatars/avatar-0.png',
        route: '',
        isActive: false,
    },
];

export const BottomMnu: React.FC = () => {
    const display =
        useBreakpointValue({
            xl: 'none',
        }) || 'flex';

    return (
        <Flex
            bg='lime.50'
            display={display}
            height={PADDINGS.bottomMnu * 4}
            width='100%'
            justifyContent='space-around'
        >
            {bottomMenuProps.map((button) => (
                <ButtonRounded
                    text={button.name}
                    iconUrl={button.iconUrl}
                    isActive={button.isActive}
                />
            ))}
        </Flex>
    );
};
