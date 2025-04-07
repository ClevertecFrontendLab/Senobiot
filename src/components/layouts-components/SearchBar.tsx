import { SearchIcon } from '@chakra-ui/icons';
import {
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Select,
    Switch,
    Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { routeFinder } from '~/configs/navigationConfig';
import { BORDERS, PADDINGS } from '~/constants/styles';
import { usePathnames } from '~/utils';

import TitleText from '../shared-components/Text/Title';

export const SearchBar: React.FC = () => {
    const currentSection = routeFinder(`/${usePathnames()[0]}`)?.title; // временная заглушка

    const [isExcludeAllergens, setIsExcludeAllergens] = useState(false);

    return (
        <Flex
            direction='column'
            position='fixed'
            top={PADDINGS.topMenu * 4 + 32}
            left='50%'
            transform='translateX(-50%)'
            py={8}
            maxW={518}
            w={518}
        >
            <TitleText titleText={currentSection} />
            <Flex direction='column' py={8}>
                <Flex>
                    <InputGroup display='flex' alignItems='center' mb={4}>
                        <InputLeftElement position='initial' display='flex' mr={3}>
                            <IconButton
                                icon={<img src='/icons/filter.svg' alt='filter' />}
                                aria-label='Filter'
                                variant='ghost'
                                border={BORDERS.main}
                                size='lg'
                                _hover={{ bg: 'lime.50' }}
                            />
                        </InputLeftElement>
                        <Input
                            display='flex'
                            border={BORDERS.main}
                            pl={8}
                            placeholder='Название или ингредиент...'
                            size='lg'
                            _placeholder={{ color: 'lime.800' }}
                            focusBorderColor='teal.500'
                        />
                        <InputRightElement>
                            <IconButton
                                icon={<SearchIcon />}
                                aria-label='Search'
                                variant='ghost'
                                size='lg'
                                pt={2}
                                pr={1}
                                _hover={{ bg: 0 }}
                            />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Flex>
                    <Flex alignItems='center' justifyContent='space-between'>
                        <Text fontSize='md' fontWeight={500} flexShrink={0}>
                            Исключить мои аллергены
                        </Text>
                        <Switch
                            pr={4}
                            pl={3}
                            isChecked={isExcludeAllergens}
                            onChange={() => setIsExcludeAllergens(!isExcludeAllergens)}
                        />
                        <Select
                            textOverflow='ellipsis'
                            placeholder='Выберите из списка...'
                            focusBorderColor='blackAlpha.200'
                            overflow='hidden'
                        >
                            <option value='1'>Корень мандрагоры</option>
                            <option value='2'>Рог единорога</option>
                            <option value='3'>Секретный ингридиент из слёрма и еще чего</option>
                        </Select>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
