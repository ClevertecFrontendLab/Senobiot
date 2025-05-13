import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

import { BORDERS } from '~/constants/styles';
import { FormInputProps } from '~/types';

export const FormInput: React.FC<FormInputProps> = ({
    field,
    label,
    value,
    error,
    type = 'text',
    placeholder,
    onChange,
    onBlur,
}) => (
    <FormControl h='100px' isInvalid={!!error}>
        <FormLabel>{label}</FormLabel>
        <Input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(field, e.target.value)}
            onBlur={(e) => onBlur(field, e.target.value)}
            _placeholder={{
                color: 'lime.800',
            }}
            bg='#fff'
            border={BORDERS.lime}
        />
        <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
);
