import { Checkbox } from '@chakra-ui/react';

import { BORDERS } from '~/constants/styles';

const AllergenCheckBox: React.FC<{
    index: number;
    allergen: string;
    isChecked: boolean;
    toggleAllergen: CallableFunction;
    dataTestIds?: string | number;
}> = ({ index, allergen, isChecked, toggleAllergen, dataTestIds }) => (
    <Checkbox
        data-test-id={`allergen-${dataTestIds}`}
        px={4}
        h={8}
        w='100%'
        bg={index % 2 ? 'blackAlpha.100' : 'unset'}
        sx={{
            '.chakra-checkbox__control': {
                w: '12px',
                h: '12px',
                borderRadius: '2px',
                border: BORDERS.lime,

                _hover: {
                    borderRadius: '2px',
                    border: BORDERS.lime,
                },
            },
            '.chakra-checkbox__control[data-checked]': {
                w: '12px',
                h: '12px',
                bg: 'lime.400',
                borderRadius: '2px',
                border: BORDERS.lime,

                _hover: {
                    bg: 'lime.400',
                    borderRadius: '2px',
                    border: BORDERS.lime,
                },

                svg: {
                    w: '7px',
                    h: '6px',
                    color: '#000',
                },
            },
            '.chakra-checkbox__icon': {
                color: 'black',
                fontSize: '4px',
            },
            '.chakra-checkbox__label': {
                color: 'blackAlpha.800',
                fontSize: '14px',
                lineHeight: '20px',
                fontFamily: 'Inter',
            },
        }}
        key={index}
        isChecked={isChecked}
        onChange={() => toggleAllergen(allergen)}
    >
        {allergen}
    </Checkbox>
);

export default AllergenCheckBox;
