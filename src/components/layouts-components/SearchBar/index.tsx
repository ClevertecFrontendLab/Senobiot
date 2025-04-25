import { Image, SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
    AllergensFilter,
    SwitchToggler,
    TextRegular,
    TitleText,
} from '~/components/shared-components';
import { routeFinder } from '~/configs/navigationConfig'; // когда будет апи всё это выпилить
import { BORDERS, WIDTHS } from '~/constants/styles';
import { useDrawer } from '~/providers/DrawerFilters/useDrawer';
import { resetRecieptFilters, searchReciepts } from '~/reducers';
import { usePathnames } from '~/utils';

export const SearchBar: React.FC = () => {
    const { openDrawer } = useDrawer();
    const pathnames = usePathnames();
    const dispatch = useDispatch();
    const activeCategory = routeFinder(pathnames.length > 1 ? pathnames[1] : pathnames[0]); // когда будет апи всё это выпилить
    const title = activeCategory?.subTitle || activeCategory?.title; // когда будет апи всё это выпилить
    const [isExcludeAllergens, setIsExcludeAllergens] = useState(false);
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
    const styles = { base: '2xl', xl: '5xl' };
    const [inputValue, setInputValue] = useState('');
    const isEnabled = inputValue.trim().length >= 3;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        if (isEnabled) {
            dispatch(searchReciepts(inputValue));
            // setInputValue('');
        }
    };

    const handlReset = () => {
        dispatch(resetRecieptFilters());
        setInputValue('');
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (isEnabled && e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Flex
            direction='column'
            // pt={PADDINGS.header}
            px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
        >
            <TitleText titleText={title} titleTextFz={styles} titleTextLh={styles} />
            {activeCategory?.description && (
                <Flex maxW={{ xl: 696 }} m='0 auto' mt={{ base: 4, xl: 3 }} textAlign='center'>
                    <TextRegular
                        regTextNoOfLines={4}
                        regText={activeCategory.description}
                        regTextColor='blackAlpha.600'
                    />
                </Flex>
            )}
            <Flex
                m='0 auto'
                mt={{ base: 4, xl: 8 }}
                mb={{ base: 8, '2xl': 14 }}
                w={{ base: 328, md: 448, xl: 518 }}
                maxW={{ base: 328, md: 448, xl: 518 }}
                direction='column'
            >
                <Flex>
                    <InputGroup display='flex' alignItems='center' mb={4}>
                        <InputLeftElement position='initial' display='flex' mr={3}>
                            <IconButton
                                onClick={openDrawer}
                                icon={
                                    <Image
                                        src='/icons/filter.svg'
                                        alt='filter'
                                        w={{ base: 3.5, xl: 6 }}
                                    />
                                }
                                aria-label='Filter'
                                variant='ghost'
                                border={BORDERS.main}
                                boxSize={{ base: 8, xl: 12 }}
                                minW={{ base: 8, xl: 12 }}
                                _hover={{ bg: 'lime.50' }}
                                sx={{
                                    '& .chakra-button__icon': {
                                        marginInlineEnd: '0',
                                    },
                                }}
                            />
                        </InputLeftElement>
                        <Input
                            position='relative'
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                            borderRadius={6}
                            display='flex'
                            border={BORDERS.main}
                            pl={3}
                            placeholder='Название или ингредиент...'
                            size={{ base: 'sm', xl: 'lg' }}
                            _placeholder={{ color: '#134B00' }} //тему можно применить только через приватное сво-во
                            maxWidth='auto'
                        />
                        <InputRightElement display='flex'>
                            <IconButton
                                onClick={handleSearch}
                                disabled={!isEnabled}
                                icon={<SearchIcon w={{ base: 3.5, xl: 6 }} />}
                                aria-label='Search'
                                variant='ghost'
                                boxSize={{ base: 8, xl: 12 }}
                                minW={{ base: 8, xl: 12 }}
                                pt={{ base: 0, xl: 2 }}
                                // pr={1}
                                _hover={{ bg: 0 }}
                            />
                            {inputValue && (
                                <Box
                                    top={2.5}
                                    right={10}
                                    position='absolute'
                                    as='button'
                                    onClick={handlReset}
                                    fontSize='14px'
                                    cursor='pointer'
                                >
                                    ✕
                                </Box>
                            )}
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Flex
                    alignItems='center'
                    justifyContent='space-between'
                    display={{ base: 'none', xl: 'flex' }}
                >
                    <SwitchToggler
                        text=' Исключить аллергены'
                        onChange={() => setIsExcludeAllergens(!isExcludeAllergens)}
                        isChecked={isExcludeAllergens}
                    />
                    <AllergensFilter
                        selectedAllergens={selectedAllergens}
                        setSelectedAllergens={setSelectedAllergens}
                        disabled={!isExcludeAllergens}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};
