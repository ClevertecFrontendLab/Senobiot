import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

import { FormInputProps } from '~/types';

export const FormInput: React.FC<FormInputProps> = ({
    field,
    label,
    value,
    error,
    type = 'text',
    onChange,
    onBlur,
}) => (
    <FormControl isRequired isInvalid={!!error}>
        <FormLabel>{label}</FormLabel>
        <Input
            type={type}
            value={value}
            placeholder={label}
            onChange={(e) => onChange(field, e.target.value)}
            onBlur={(e) => onBlur(field, e.target.value)}
        />
        <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
);
