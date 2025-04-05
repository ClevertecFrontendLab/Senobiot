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
import { Link } from 'react-router';

type SideNavMenuItemProps = {
    name: string;
    route: string;
    icon: string;
    subcategories?: SubcategoriesProp[];
};

type SubcategoriesProp = {
    name: string;
    route: string;
};

const SideNavMenuItem: React.FC<SideNavMenuItemProps> = ({
    name,
    icon,
    route,
    subcategories = [],
}) => (
    <AccordionItem py={2}>
        <Link to={route}>
            <AccordionButton px={0}>
                <Box flex='1' textAlign='left'>
                    <HStack display='flex' alignItems='start' pl={1}>
                        <Image src={icon} alt={name} boxSize='24px' />
                        <Text cursor='pointer' pl={2}>
                            {name}
                        </Text>
                    </HStack>
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </Link>
        <AccordionPanel textAlign='left' pb={4}>
            {subcategories.map((subcategory, index) => (
                <Link to={subcategory.route} key={index}>
                    <Text py={2} ml={5} textStyle='xs' pl={4}>
                        {subcategory.name}
                    </Text>
                </Link>
            ))}
        </AccordionPanel>
    </AccordionItem>
);
export default SideNavMenuItem;
