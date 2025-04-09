import { Button, Flex, HStack } from '@chakra-ui/react';
import { Link } from 'react-router';

import { navTreeProps } from '~/configs/navigationConfig';
import { BORDERS } from '~/constants/styles';

type CategoryMenuProps = {
    list?: navTreeProps[];
    selected?: string;
};

const CategoryMenu: React.FC<CategoryMenuProps> = ({ list = [], selected }) => {
    console.log(selected, list);
    return (
        <Flex
            borderBottom={BORDERS.light}
            mb={6}
            overflowX='auto'
            justifyContent='center'
            css={{
                scrollbarWidth: 'none',
                '::-webkit-scrollbar': {
                    display: 'none',
                },
            }}
        >
            <HStack align='start' spacing={0}>
                {list.map((item, index) => (
                    <Button
                        to={item.route}
                        key={index}
                        as={Link}
                        size={{ base: 'sm', xl: 'md' }}
                        color={item.title === selected ? 'lime.600' : 'none'}
                        border='none'
                        borderBottom={item.title === selected ? '2px solid' : 'none'}
                        borderRadius='none'
                        bg='none'
                        _hover={{
                            bg: 0,
                            bgColor: 0,
                        }}
                    >
                        {item.title}
                    </Button>
                ))}
            </HStack>
        </Flex>
    );
};

export default CategoryMenu;
