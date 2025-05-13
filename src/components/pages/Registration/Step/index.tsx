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
}) => (
    <VStack gap={0} w='100%'>
        {inputList.map((e, index) => (
            <FormInput
                key={index}
                field={e.field}
                label={e.label}
                type={e.type ? e.type : 'initial'}
                value={formValues[e.field]}
                error={errors[e.field]}
                placeholder={e.placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
        ))}
    </VStack>
);

export default RegistrationStep;
