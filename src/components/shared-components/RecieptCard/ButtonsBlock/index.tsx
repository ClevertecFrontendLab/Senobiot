import {
    Button,
    ButtonProps,
    Flex,
    FlexProps,
    HStack,
    Image,
    ResponsiveValue,
} from '@chakra-ui/react';
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
    recieptButtonsSectionDirection?: FlexProps['direction'];
    coockingButtonDataId?: string | number;
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
    recieptButtonsSectionDirection,
    recieptButtonsSize = { base: 'xs', xl: 'sm' },
    coockingButtonDataId,
    ...props
}) => (
    <Flex
        justifyContent='space-between'
        width={!noTimeButton ? '100%' : 'unset'}
        direction={recieptButtonsSectionDirection}
    >
        {!noTimeButton && <ButtonTimeBtn {...props} />}
        <HStack wrap='wrap' gap={3}>
            <ButtonbookBtn {...props} recieptButtonsSize={recieptButtonsSize} />
            <Button
                data-test-id={`card-link-${coockingButtonDataId}`}
                bg={coockingButtonBg}
                as={coockingButtonAs}
                to={coockingButtonRoute}
                variant={actionButtonVariant}
                color={coockingButtonTextColor}
                size={recieptButtonsSize}
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
