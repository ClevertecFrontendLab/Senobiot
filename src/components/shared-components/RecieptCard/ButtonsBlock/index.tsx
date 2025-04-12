import { Button, HStack } from '@chakra-ui/react';
import React from 'react';

import { ButtonbookBtn, ButtonBookBtnProps } from '../../Buttons';

export interface RecieptButtonsSectionProps extends ButtonBookBtnProps {
    coockingButtonText?: string;
    actionButtonVariant?: string;
}

const RecieptButtonsSection: React.FC<RecieptButtonsSectionProps> = ({
    coockingButtonText = 'Готовить',
    actionButtonVariant = 'solid',
    ...props
}) => (
    <HStack wrap='wrap' gap={3}>
        <ButtonbookBtn {...props} />
        <Button
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
