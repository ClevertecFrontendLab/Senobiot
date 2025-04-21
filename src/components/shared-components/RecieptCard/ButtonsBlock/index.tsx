import { Button, ButtonProps, Flex, HStack, Image, ResponsiveValue } from '@chakra-ui/react';
import React from 'react';
import { Path } from 'react-router';

import { ButtonbookBtn, ButtonBookBtnProps } from '../../Buttons';
import { ButtonTimeBtn, ButtonTimeBtnProps } from '../../Buttons/Time';

export interface RecieptButtonsSectionProps extends ButtonBookBtnProps, ButtonTimeBtnProps {
    coockingButtonText?: string;
    actionButtonVariant?: string;
    coockingButtonAs?: React.ElementType;
    coockingButtonRoute?: string | Partial<Path>;
    coockingButtonBg?: ButtonProps['background'];
    coockingButtonTextColor?: ButtonProps['color'];
    coockingButtonIconUrl?: string;
    coockingButtonIconSize?: ResponsiveValue<number>;
    noTimeButton?: boolean;
}

const RecieptButtonsSection: React.FC<RecieptButtonsSectionProps> = ({
    coockingButtonText = 'Готовить',
    actionButtonVariant = 'solid',
    coockingButtonAs,
    coockingButtonRoute,
    coockingButtonBg = 'blackAlpha.900',
    coockingButtonTextColor = '#fff',
    coockingButtonIconUrl = '',
    coockingButtonIconSize = 4,
    noTimeButton = true,
    ...props
}) => (
    <Flex justifyContent='space-between' width={!noTimeButton ? '100%' : 'unset'}>
        {!noTimeButton && <ButtonTimeBtn {...props} />}
        <HStack wrap='wrap' gap={3}>
            <ButtonbookBtn {...props} />
            <Button
                bg={coockingButtonBg}
                as={coockingButtonAs}
                to={coockingButtonRoute}
                variant={actionButtonVariant}
                color={coockingButtonTextColor}
                size={{ base: 'xs', xl: 'sm' }}
                leftIcon={
                    coockingButtonIconUrl ? (
                        <Image
                            src={coockingButtonIconUrl}
                            alt={coockingButtonText}
                            boxSize={coockingButtonIconSize}
                        />
                    ) : undefined
                }
            >
                {coockingButtonText}
            </Button>
        </HStack>
    </Flex>
);

export default RecieptButtonsSection;
