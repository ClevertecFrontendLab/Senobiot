import { SearchIcon, SettingsIcon } from '@chakra-ui/icons';
import {
    Box,
    ChakraProvider,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Select,
    Switch,
    Text,
    VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { BORDERS } from '~/constants/styles';

const SearchMenu: React.FC = () => {
    const [isExcludeAllergens, setIsExcludeAllergens] = useState(false);

    return (
        <ChakraProvider>
            <Box w='100%' p={6} rounded='md' shadow='md' mt={8} py={8} px={30} width={578}>
                <Text fontSize='lg' fontWeight='bold' mb={4}>
                    Приятного аппетита!
                </Text>
                <VStack spacing={4} align='stretch'>
                    <InputGroup>
                        <InputLeftElement>
                            <IconButton
                                icon={<SettingsIcon />}
                                aria-label='Filter'
                                variant='ghost'
                                p={3}
                                border={BORDERS.main}
                                borderRadius={6}
                            />
                        </InputLeftElement>
                        <Input
                            border={BORDERS.main}
                            placeholder='Название или ингредиент...'
                            size='md'
                            focusBorderColor='teal.500'
                            ml={20}
                        />
                        <InputRightElement>
                            <IconButton icon={<SearchIcon />} aria-label='Search' variant='ghost' />
                        </InputRightElement>
                    </InputGroup>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                        <Text fontSize='md' color='gray.600'>
                            Исключить мои аллергены
                        </Text>
                        <Switch
                            colorScheme='teal'
                            isChecked={isExcludeAllergens}
                            onChange={() => setIsExcludeAllergens(!isExcludeAllergens)}
                        />
                        <Select
                            placeholder='Выберите из списка...'
                            focusBorderColor='teal.500'
                            w={234}
                        >
                            <option value='1'>Корень мандрагоры</option>
                            <option value='2'>Рог единорога</option>
                            <option value='3'>Секретный ингридиент из слёрма</option>
                        </Select>
                    </Box>
                </VStack>
            </Box>
        </ChakraProvider>
    );
};

export default SearchMenu;
