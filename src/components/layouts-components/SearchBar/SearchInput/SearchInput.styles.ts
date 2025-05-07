import { BORDERS } from '~/constants/styles';
import { SEARCH_STATE } from '~/types';

export const filterButtonWrapper = {
    position: 'initial',
    display: 'flex',
    mr: 3,
};

export const filterButton = {
    variant: 'ghost',
    bg: 0,
    border: BORDERS.main,
    boxSize: { base: 8, xl: 12 },
    minW: { base: 8, xl: 12 },
    _hover: { bg: 'lime.50' },
    '& .chakra-button__icon': { marginInlineEnd: '0' },
};

export const getSearchButtonStyles = (isEnabled: boolean) => ({
    variant: 'ghost',
    bg: 0,
    disabled: !isEnabled,
    pointerEvents: isEnabled ? 'unset' : 'none',
    boxSize: { base: 8, xl: 12 },
    minW: { base: 8, xl: 12 },
    _hover: { bg: 0 },
});

export const resetButton = {
    right: 5,
    bg: 0,
    _hover: {
        bg: 0,
    },
    position: 'absolute',
    fontSize: '14px',
    cursor: 'pointer',
};

export const icon = {
    w: { base: 3.5, xl: 6 },
};

export const getInputStyles = (state: SEARCH_STATE | undefined) => {
    const sx = {
        boxShadow: 0,
        border:
            state === SEARCH_STATE.SUCCESS
                ? '1px solid green'
                : state === SEARCH_STATE.EMPTY
                  ? '1px solid red'
                  : BORDERS.main,
    };

    return {
        borderRadius: 6,
        pl: 3,
        border: sx.border,
        _hover: sx,
        _focus: sx,
        _active: sx,
        size: { base: 'sm', xl: 'lg' },
        _placeholder: { color: 'lime.800' },
    };
};
