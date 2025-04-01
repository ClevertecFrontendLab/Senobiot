import { Collapse, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router';

interface SideBarItemProps {
    title: string;
    route: string;
    icon: React.ReactNode;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ title, icon, route }) => (
    <Link to={route}>
        <Collapse in={true} animateOpacity>
            <HStack display='flex' align='start' pl={4}>
                {icon}
                <Text cursor='pointer' pl={2}>
                    {title}
                </Text>
            </HStack>
        </Collapse>
    </Link>
);

export default SideBarItem;
