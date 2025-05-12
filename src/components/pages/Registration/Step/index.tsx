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
    <VStack spacing={4}>
        {inputList.map((e) => (
            <FormInput
                field={e.field}
                label={e.label}
                type={e.type ? e.type : 'initial'}
                value={formValues[e.field]}
                error={errors[e.field]}
                onChange={onChange}
                onBlur={onBlur}
            />
        ))}
    </VStack>
);

export default RegistrationStep;
