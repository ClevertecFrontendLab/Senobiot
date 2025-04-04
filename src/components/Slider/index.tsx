import { Box, Button, HStack, Image } from '@chakra-ui/react';
import React, { useRef } from 'react';

import RecieptCard from '../shared/RecieptCard';

type SliderProps = {
    controlsSize?: number;
    slides: SlideProps[];
};

type SlideProps = {
    title: string;
    description?: string;
    img?: string;
};

const Slider: React.FC<SliderProps> = ({ controlsSize = 12, slides = [] }) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollSmooth = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = 300;
            const currentScroll = sliderRef.current.scrollLeft;
            const newScroll =
                direction === 'right' ? currentScroll + scrollAmount : currentScroll - scrollAmount;

            sliderRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth',
            });
        }
    };

    const arrowLeftStyle = {
        position: 'absolute',
        top: 'calc((100% - 48px) / 2)',
        left: 0,
    };

    const arrowRightStyle = { ...arrowLeftStyle, right: 0, left: 'initial' };

    return (
        <Box position='relative'>
            <HStack justifyContent='space-between' marginBottom={4}>
                <Button
                    sx={arrowLeftStyle}
                    boxSize={controlsSize}
                    onClick={() => scrollSmooth('left')}
                    leftIcon={
                        <Image
                            src='/icons/slider-arrow.svg'
                            alt='left arrow'
                            boxSize={controlsSize}
                        />
                    }
                />
                <Button
                    sx={arrowRightStyle}
                    boxSize={controlsSize}
                    onClick={() => scrollSmooth('right')}
                    leftIcon={
                        <Image
                            transform='rotateY(180deg)'
                            src='/icons/slider-arrow.svg'
                            alt='right arrow'
                            boxSize={controlsSize}
                        />
                    }
                />
            </HStack>
            <HStack
                ref={sliderRef}
                spacing={8}
                overflowX='auto'
                padding={4}
                css={{
                    scrollbarWidth: 'none',
                    '::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                {slides.map((slide, index) => {
                    const { title, description, img } = slide;
                    return (
                        <RecieptCard key={index} title={title} text={description} imageSrc={img} />
                    );
                })}
            </HStack>
        </Box>
    );
};

export default Slider;
