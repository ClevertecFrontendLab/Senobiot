import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    HStack,
    Image,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router';

import { navTreeProps } from '~/configs/navigationConfig';

const SideNavMenuItem: React.FC<navTreeProps> = ({
    title,
    icon = '',
    submenu = [],
    redirect,
    route,
    navKey,
}) => {
    const { pathname } = useLocation();

    return (
        <AccordionItem border={0}>
            {({ isExpanded }) => (
                <>
                    <Link to={redirect || route}>
                        <AccordionButton
                            data-test-id={navKey}
                            bg={isExpanded ? 'lime.100' : 'white'}
                            px={2}
                            height={12}
                            fontWeight={500}
                            fontSize={16}
                            _hover={{
                                bg: isExpanded ? 'lime.100' : 'lime.50',
                            }}
                        >
                            <Box flex='1' textAlign='left'>
                                <HStack display='flex' alignItems='start' pl={1}>
                                    <Image src={icon} alt={title} boxSize='24px' />
                                    <Text cursor='pointer' pl={2}>
                                        {title}
                                    </Text>
                                </HStack>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Link>
                    <AccordionPanel textAlign='left' pb={4}>
                        {submenu.map((category, index) => (
                            <Link to={category.route} key={index}>
                                <Text
                                    data-test-id={`tab-${category.title}${pathname === category.route ? '-active' : ''}`}
                                    py={2}
                                    ml={5}
                                    textStyle='xs'
                                    pl={4}
                                    position='relative'
                                    _hover={{
                                        bg: 'lime.50',
                                    }}
                                    sx={{
                                        '&::before': {
                                            content: '""',
                                            height: 'calc(100% - 12px )',
                                            width: pathname === category.route ? '8px' : '1px',
                                            position: 'absolute',
                                            top: '6px',
                                            left: pathname === category.route ? '-8px' : 0,
                                            background: 'lime.300',
                                        },
                                    }}
                                >
                                    {category.title}
                                </Text>
                            </Link>
                        ))}
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    );
};

export default SideNavMenuItem;
