import {
    Button,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import React from 'react';

import { TEST_IDS } from '~/constants';
import { FormInputProps } from '~/types';

import * as styles from './FormInput.styles';

export const FormInput: React.FC<FormInputProps> = ({
    field,
    label,
    value,
    error,
    type = 'text',
    placeholder,
    helper,
    dataTestId,
    showPassword,
    autocomplete,
    setShowPassword,
    onChange,
    onBlur,
}) => {
    const isPassword = field === 'password' || field === 'passwordConfirm';

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel mb={1}>{label}</FormLabel>
            <Input
                type={
                    isPassword && showPassword ? (showPassword[field] ? 'text' : 'password') : type
                }
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(field, e.target.value)}
                onBlur={(e) => onBlur(field, e.target.value)}
                sx={styles.input}
                autoComplete={autocomplete}
                data-test-id={dataTestId}
            />
            {isPassword && setShowPassword && (
                <Button
                    data-test-id={TEST_IDS.form.login.passwordVisibility}
                    variant='ghost'
                    onMouseDown={() => setShowPassword(field, true)}
                    onMouseUp={() => setShowPassword(field, false)}
                    onMouseLeave={() => setShowPassword(field, false)}
                    sx={styles.getPasswordImgStyles(showPassword && showPassword[field])}
                ></Button>
            )}
            {helper && <FormHelperText sx={styles.helper}>{helper}</FormHelperText>}
            <FormErrorMessage mt={1}>{error}</FormErrorMessage>
        </FormControl>
    );
};
