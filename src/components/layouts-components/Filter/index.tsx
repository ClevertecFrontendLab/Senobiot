import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Select,
    Tag,
    TagCloseButton,
    TagLabel,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { CheckBoxLime, SwitchToggler } from '~/components/shared-components';
import { useDrawer } from '~/providers/DrawerFilters/useDrawer';

export const RecipeFilter: React.FC = () => {
    const { isOpen, closeDrawer } = useDrawer();
    const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
    const [selectedGarnishes, setSelectedGarnishes] = useState<string[]>([]);
    const [excludeAllergens, setExcludeAllergens] = useState<boolean>(false);
    const [allergen, setAllergen] = useState<string>('');

    const meats = ['Курица', 'Свинина', 'Говядина', 'Индейка', 'Утка'];
    const garnishes = [
        'Картошка',
        'Гречка',
        'Паста',
        'Спагетти',
        'Рис',
        'Капуста',
        'Фасоль',
        'Другие овощи',
    ];

    const toggleMeatSelection = (meat: string) => {
        setSelectedMeats((prev) =>
            prev.includes(meat) ? prev.filter((item) => item !== meat) : [...prev, meat],
        );
    };

    const toggleGarnishSelection = (garnish: string) => {
        setSelectedGarnishes((prev) =>
            prev.includes(garnish) ? prev.filter((item) => item !== garnish) : [...prev, garnish],
        );
    };

    const clearFilters = () => {
        setSelectedMeats([]);
        setSelectedGarnishes([]);
        setExcludeAllergens(false);
        setAllergen('');
    };

    return (
        <Drawer isOpen={isOpen} placement='right' onClose={closeDrawer}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Фильтр</DrawerHeader>

                <DrawerBody>
                    <Select placeholder='Категория'>
                        <option value='breakfast'>Завтрак</option>
                        <option value='lunch'>Обед</option>
                        <option value='dinner'>Ужин</option>
                    </Select>

                    <Select placeholder='Поиск по автору' mt={4}>
                        <option value='author1'>Автор 1</option>
                        <option value='author2'>Автор 2</option>
                        <option value='author3'>Автор 3</option>
                    </Select>

                    {/* meat */}
                    <Box mt={4}>
                        <Box fontWeight='bold'>Тип мяса:</Box>
                        {meats.map((meat, index) => (
                            <CheckBoxLime
                                key={index}
                                index={0}
                                item={meat}
                                isChecked={selectedMeats.includes(meat)}
                                toggleItem={toggleMeatSelection}
                            />
                        ))}
                    </Box>

                    {/* garnish */}
                    <Box mt={4}>
                        <Box fontWeight='bold'>Тип гарнира:</Box>
                        {garnishes.map((garnish, index) => (
                            <CheckBoxLime
                                key={index}
                                index={0}
                                item={garnish}
                                isChecked={selectedGarnishes.includes(garnish)}
                                toggleItem={() => toggleGarnishSelection(garnish)}
                            />
                        ))}
                    </Box>

                    <SwitchToggler
                        text='Исключить аллергены'
                        onChange={() => setExcludeAllergens(!excludeAllergens)}
                        isChecked={excludeAllergens}
                    />
                    <Box mt={4}>
                        <Select
                            placeholder='Выберите аллерген'
                            mt={2}
                            value={allergen}
                            onChange={(e) => setAllergen(e.target.value)}
                        >
                            <option value='egg'>Яйцо</option>
                            <option value='milk'>Молоко</option>
                            <option value='nuts'>Орехи</option>
                        </Select>
                    </Box>

                    <Box mt={4}>
                        <Box fontWeight='bold' mb={2}>
                            Выбранные фильтры:
                        </Box>
                        {selectedMeats.map((meat) => (
                            <Tag
                                key={meat}
                                size='lg'
                                variant='solid'
                                colorScheme='green'
                                mr={2}
                                mb={2}
                            >
                                <TagLabel>{meat}</TagLabel>
                                <TagCloseButton onClick={() => toggleMeatSelection(meat)} />
                            </Tag>
                        ))}
                        {selectedGarnishes.map((garnish) => (
                            <Tag
                                key={garnish}
                                size='lg'
                                variant='solid'
                                colorScheme='blue'
                                mr={2}
                                mb={2}
                            >
                                <TagLabel>{garnish}</TagLabel>
                                <TagCloseButton onClick={() => toggleGarnishSelection(garnish)} />
                            </Tag>
                        ))}
                        {excludeAllergens && allergen && (
                            <Tag
                                key={allergen}
                                size='lg'
                                variant='solid'
                                colorScheme='red'
                                mr={2}
                                mb={2}
                            >
                                <TagLabel>{allergen}</TagLabel>
                                <TagCloseButton
                                    onClick={() => {
                                        setExcludeAllergens(false);
                                        setAllergen('');
                                    }}
                                />
                            </Tag>
                        )}
                    </Box>
                </DrawerBody>

                <DrawerFooter display='flex' justifyContent='space-between'>
                    <Button variant='outline' mr={3} onClick={clearFilters}>
                        Очистить фильтр
                    </Button>
                    <Button colorScheme='blue' onClick={closeDrawer}>
                        Найти рецепты
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
