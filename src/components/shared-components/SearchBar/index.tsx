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
import { allergensIngredients } from '~/data';
import { usePathnames } from '~/utils';

import TextRegular from '../Text/Regular';
import TitleText from '../Text/Title';

export const SearchBar: React.FC = () => {
    const path = usePathnames();
    const currentSection = routeFinder(path.length > 1 ? path[1] : path[0]);
    const title = currentSection?.subTitle || currentSection?.title;
    const [isExcludeAllergens, setIsExcludeAllergens] = useState(false);

    return (
        <Flex direction='column' pt={PADDINGS.topMenu * 4 + PADDINGS.header}>
            <TitleText
                titleText={title}
                titleTextFz={{ base: '2xl', xl: '5xl' }}
                titleTextLh={{ base: '2xl', xl: '5xl' }}
            />
            {currentSection?.description && (
                <Flex maxW={{ xl: 696 }} m='0 auto' mt={{ base: 4, xl: 3 }} textAlign='center'>
                    <TextRegular regText={currentSection.description} />
                </Flex>
            )}
            <Flex
                m='0 auto'
                mt={{ base: 4, xl: 8 }}
                mb={8}
                w={{ base: 'initial', md: 448, xl: 518 }}
                direction='column'
            >
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
                <Flex
                    alignItems='center'
                    justifyContent='space-between'
                    display={{ base: 'none', xl: 'flex' }}
                >
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
                        {allergensIngredients.map((inggredient, index) => (
                            <option key={index} value={index}>
                                {inggredient}
                            </option>
                        ))}
                    </Select>
                </Flex>
            </Flex>
        </Flex>
    );
};
