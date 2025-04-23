import { Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link } from 'react-router';

import { navTreeProps } from '~/configs/navigationConfig';
import { BORDERS } from '~/constants/styles';

type CategoryMenuProps = {
    list?: navTreeProps[];
    activeSubcategory?: string;
};

const CategoryMenu: React.FC<CategoryMenuProps> = ({ list = [], activeSubcategory }) => {
    const activeIndex = list.findIndex((item) => item.route === activeSubcategory);
    const selectedIndex = activeIndex !== -1 ? activeIndex : 0;

    return (
        <Tabs variant='unstyled' index={selectedIndex}>
            <Flex justifyContent='center'>
                <TabList
                    borderBottom={BORDERS.light}
                    mb={6}
                    overflowX='auto'
                    whiteSpace='nowrap'
                    flexWrap={{ base: 'unset', xl: 'wrap' }}
                    justifyContent='center'
                    css={{
                        scrollbarWidth: 'none',
                        '::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                >
                    {list.map((item, index) => (
                        <Tab
                            outline='none'
                            key={index}
                            as={Link}
                            to={item.route}
                            fontSize={{ base: 'sm', xl: 'md' }}
                            border='none'
                            borderRadius='none'
                            bg='none'
                            _selected={{
                                color: 'lime.600',
                                borderBottom: '2px solid',
                                borderColor: 'lime.600',
                                boxShadow: 'none',
                            }}
                            _hover={{ bg: 'none' }}
                            _focus={{
                                outline: 'none',
                                boxShadow: 'none',
                            }}
                            data-test-id={`tab-${item.navKey}-${index}`}
                        >
                            {item.title}
                        </Tab>
                    ))}
                </TabList>
            </Flex>
        </Tabs>
    );
};

export default CategoryMenu;
