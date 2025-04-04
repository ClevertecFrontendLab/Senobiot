import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

import ButtonBookmark, { ButtonBookBtnProps } from '~/components/shared-components/Button/Bookmark';

export interface RecieptButtonsSectionProps extends ButtonBookBtnProps {
    coockingButtonText?: string;
}

const RecieptButtonsSection: React.FC<RecieptButtonsSectionProps> = ({
    coockingButtonText = 'Готовить',
    ...props
}) => (
    <Flex display='flex' justifyContent='space-between' alignItems='center'>
        <ButtonBookmark {...props} />
        <Button colorScheme='orange' variant='outline'>
            {coockingButtonText}
        </Button>
    </Flex>
);

export default RecieptButtonsSection;
