import { Flex, HStack, Image, Tab, TabList, Tabs, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router';

import { BASE_URL, EXCLUDED_ROUTES } from '~/constants';

import * as styles from './Auth.styles';

const tabsList = [
    {
        label: 'Вход на сайт',
        route: '/login',
    },
    {
        label: 'Регистрация',
        route: '/registration',
    },
];

type AuthPageWrapperProps = {
    children: React.ReactNode;
    pageRoute: string;
};

export const AuthPageWrapper: React.FC<AuthPageWrapperProps> = ({ children, pageRoute }) => (
    <VStack sx={styles.pageWrapper}>
        <VStack sx={styles.contentWrapper}>
            <VStack sx={styles.formWrapper}>
                <HStack sx={styles.logoWrapper}>
                    <Image
                        sx={styles.logo}
                        src={`${BASE_URL}assets/images/logo-img.svg`}
                        alt='logo cup'
                    />
                    <Image
                        sx={styles.logoText}
                        src={`${BASE_URL}assets/images/logo-text.svg`}
                        alt='logo text Yeedaa'
                    />
                </HStack>
                <Tabs sx={styles.tabs} index={pageRoute === EXCLUDED_ROUTES.login ? 0 : 1}>
                    <TabList sx={styles.tablist}>
                        {tabsList.map((item, index) => (
                            <Tab sx={styles.tab} key={index} as={Link} to={item.route}>
                                {item.label}
                            </Tab>
                        ))}
                    </TabList>
                </Tabs>
                {children}
            </VStack>
        </VStack>
        <Flex sx={styles.copyrightWrapper}>
            <Text>Все права защищены, ученический файл, ©Клевер Технолоджи, 2025</Text>
            <Text>̶ Лучший сервис для ваших кулинарных побед </Text>
        </Flex>
    </VStack>
);
