import { Button, ButtonProps, Image, ResponsiveValue } from '@chakra-ui/react';
import { Path } from 'react-router';

import { BORDERS } from '~/constants/styles';

export type RecieptButtonsSectionProps = {
    subscribeButtonText?: string;
    subscribeButtonVariant?: string;
    subscribeButtonAs?: React.ElementType;
    subscribeButtonRoute?: string | Partial<Path>;
    subscribeButtonBg?: ButtonProps['background'];
    subscribeButtonTextColor?: ButtonProps['color'];
    subscribeButtonIconUrl?: string;
    subscribeButtonIconSize?: ResponsiveValue<number>;
    subscribeButtonSize?: ResponsiveValue<string>;
};

export const SubscribeButton: React.FC<RecieptButtonsSectionProps> = ({
    subscribeButtonText = 'Подписаться',
    subscribeButtonVariant = 'solid',
    subscribeButtonAs,
    subscribeButtonRoute,
    subscribeButtonBg = 'blackAlpha.900',
    subscribeButtonTextColor = '#fff',
    subscribeButtonIconUrl = '/icons/subscribe.svg',
    subscribeButtonIconSize = 4,
    subscribeButtonSize = { base: 'xs', xl: 'sm' },
}) => (
    <Button
        bg={subscribeButtonBg}
        as={subscribeButtonAs}
        to={subscribeButtonRoute}
        variant={subscribeButtonVariant}
        color={subscribeButtonTextColor}
        size={subscribeButtonSize}
        leftIcon={
            subscribeButtonIconUrl ? (
                <Image
                    src={subscribeButtonIconUrl}
                    alt={subscribeButtonText}
                    boxSize={subscribeButtonIconSize}
                />
            ) : undefined
        }
        border={BORDERS.light}
        borderRadius='6px'
    >
        {subscribeButtonText}
    </Button>
);
