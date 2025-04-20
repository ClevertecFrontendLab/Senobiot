import { Button, Image } from '@chakra-ui/react';

type SliderButtonsProps = {
    controlsSize?: number;
    icon?: string;
};

export const SliderLeftButton: React.FC<SliderButtonsProps> = ({
    controlsSize = 12,
    icon = '/icons/slider-arrow.svg',
}) => (
    <Button
        display={{ base: 'none', xl: 'flex' }}
        sx={{
            '& .chakra-button__icon': {
                marginInlineEnd: 0,
            },
        }}
        boxSize={controlsSize}
        leftIcon={<Image src={icon} alt='left arrow' boxSize={controlsSize} />}
    />
);

export const SliderRightButton: React.FC<SliderButtonsProps> = ({
    controlsSize = 12,
    icon = '/icons/slider-arrow.svg',
}) => (
    <Button
        display={{ base: 'none', xl: 'flex' }}
        sx={{
            '& .chakra-button__icon': {
                marginInlineEnd: 0,
            },
        }}
        boxSize={controlsSize}
        leftIcon={
            <Image transform='rotateY(180deg)' src={icon} alt='left arrow' boxSize={controlsSize} />
        }
    />
);
