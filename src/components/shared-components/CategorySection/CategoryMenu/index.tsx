import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';

import { BORDERS } from '~/constants/styles';
import { SubCategoryList } from '~/types';

const CategoryMenu: React.FC<{ list: SubCategoryList[] }> = ({ list }) => {
    const { pathname } = useLocation();
    const activeIndex = list.findIndex((item) => item.route === pathname);
    const selectedIndex = activeIndex !== -1 ? activeIndex : 0;
    const tabListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tabListRef.current) {
            const tabList = tabListRef.current;
            const activeTab = tabList.children[selectedIndex] as HTMLElement;

            if (activeTab) {
                const offset =
                    activeTab.offsetLeft - tabList.offsetWidth / 2 + activeTab.offsetWidth / 2;
                tabList.scrollTo({ left: offset, behavior: 'smooth' });
            }
        }
    }, [selectedIndex]);

    return (
        <Tabs variant='unstyled' index={selectedIndex}>
            <TabList
                ref={tabListRef}
                borderBottom={BORDERS.light}
                mb={6}
                display='flex'
                overflowX='auto'
                whiteSpace='nowrap'
                flexWrap={{ base: 'unset', xl: 'wrap' }}
                justifyContent={{ base: 'unset', md: 'center' }}
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
                        data-test-id={`tab-${item.categoryEn}-${index}`}
                    >
                        {item.categoryRu}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};

export default CategoryMenu;
