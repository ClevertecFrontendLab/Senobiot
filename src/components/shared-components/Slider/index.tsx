import { Flex, HStack } from '@chakra-ui/react';
import React, { useRef } from 'react';

import { SliderLeftButton, SliderRightButton } from './Buttons';
import SliderCard from './SliderCard';

type SliderProps = {
    controlsSize?: number;
    slides: SlideProps[];
};

type SlideProps = {
    title: string;
    description?: string;
    img?: string;
    subcategory?: string;
    icon?: string;
};

export const Slider: React.FC<SliderProps> = ({ controlsSize = 12, slides = [] }) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollSmooth = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = 322;
            const currentScroll = sliderRef.current.scrollLeft;
            const newScroll =
                direction === 'right' ? currentScroll + scrollAmount : currentScroll - scrollAmount;

            sliderRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Flex direction='column' overflow='hidden' position='relative'>
            <SliderLeftButton
                controlsSize={controlsSize}
                controlCallback={() => scrollSmooth('left')}
            />
            <SliderRightButton
                controlsSize={controlsSize}
                controlCallback={() => scrollSmooth('right')}
            />
            <HStack
                ref={sliderRef}
                spacing={3}
                overflowX='auto'
                css={{
                    scrollbarWidth: 'none',
                    '::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                {slides.map((slide, index) => {
                    const { title, description, img, subcategory, icon } = slide;

                    return (
                        <SliderCard
                            key={index}
                            title={title}
                            description={description}
                            img={img}
                            subcategory={subcategory}
                            icon={icon}
                        />
                    );
                })}
            </HStack>
        </Flex>
    );
};
