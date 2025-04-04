import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    HStack,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router';

import Footer from '~/components/layouts-components/Footer';
import { PADDINGS, SHADOWS } from '~/constants/styles';

import { dishesCategories } from '../../../data';

const SideMenu: React.FC = () => (
    <VStack
        spacing={4}
        align='start'
        w='256px'
        h='100vh'
        px='16px'
        maxHeight='100vh'
        position='fixed'
        zIndex={9}
        left={0}
        m={0}
        ml={0}
        pt={8 + PADDINGS.topMenu}
        pb={8}
        margin={0}
        boxShadow={SHADOWS.main}
    >
        <Box overflow='auto' display='flex' flexDirection='column' justifyContent='space-between'>
            <Accordion allowToggle>
                {dishesCategories.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <AccordionItem py={2}>
                            <AccordionButton px={0}>
                                <Box flex='1' textAlign='left'>
                                    <HStack display='flex' alignItems='start' pl={1}>
                                        <Image src={item.icon} alt={item.name} boxSize='24px' />
                                        <Text cursor='pointer' pl={2}>
                                            {item.name}
                                        </Text>
                                    </HStack>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel textAlign='left' pb={4}>
                                {item.subcategories &&
                                    item.subcategories.map((subcategory, subIndex) => (
                                        <Text py={2} ml={5} key={subIndex} textStyle='xs' pl={4}>
                                            {subcategory.name}
                                        </Text>
                                    ))}
                            </AccordionPanel>
                        </AccordionItem>
                    </Link>
                ))}
            </Accordion>
        </Box>
        <Footer text-a />
    </VStack>
);

export default SideMenu;
