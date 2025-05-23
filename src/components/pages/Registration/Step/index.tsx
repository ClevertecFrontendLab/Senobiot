import { VStack } from '@chakra-ui/react';
import React from 'react';

import { FormInput } from '~/components/shared-components';
import { RegistrationStepProps } from '~/types';

const RegistrationStep: React.FC<RegistrationStepProps> = ({
    formValues,
    errors,
    onChange,
    onBlur,
    inputList,
    showPassword,
    setShowPassword,
}) => (
    <VStack gap={6} w='100%'>
        {inputList.map((e, index) => (
            <FormInput
                dataTestId={e.dataTestId}
                key={index}
                field={e.field}
                label={e.label}
                type={e.type ? e.type : 'initial'}
                value={formValues[e.field]}
                error={errors[e.field]}
                placeholder={e.placeholder}
                helper={e.helper}
                onChange={onChange}
                onBlur={onBlur}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                autocomplete={e.autocomplete}
            />
        ))}
    </VStack>
);

export default RegistrationStep;
