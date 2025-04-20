import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { Path } from 'react-router';

import { ButtonbookBtn, ButtonBookBtnProps } from '../../Buttons';

export interface RecieptButtonsSectionProps extends ButtonBookBtnProps {
    coockingButtonText?: string;
    actionButtonVariant?: string;
    coockingButtonAs?: React.ElementType;
    coockingButtonRoute?: string | Partial<Path>;
}

const RecieptButtonsSection: React.FC<RecieptButtonsSectionProps> = ({
    coockingButtonText = 'Готовить',
    actionButtonVariant = 'solid',
    coockingButtonAs,
    coockingButtonRoute,
    ...props
}) => (
    <HStack wrap='wrap' gap={3}>
        <ButtonbookBtn {...props} />
        <Button
            as={coockingButtonAs}
            to={coockingButtonRoute}
            variant={actionButtonVariant}
            bg='blackAlpha.900'
            color='#fff'
            size={{ base: 'xs', xl: 'sm' }}
        >
            {coockingButtonText}
        </Button>
    </HStack>
);

export default RecieptButtonsSection;
