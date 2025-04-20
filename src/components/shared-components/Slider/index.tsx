import './swiper-syles.css';

import { Flex } from '@chakra-ui/react';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RecipeProps } from '~/types';

import { SliderLeftButton, SliderRightButton } from './Buttons';
import SliderCard from './SliderCard';

type SliderProps = {
    controlsSize?: number;
    slides: RecipeProps[];
};

export const Slider: React.FC<SliderProps> = ({ slides = [] }) => {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    return (
        <Flex direction='column' position='relative' mr={-6}>
            <Swiper
                data-test-id='carousel'
                modules={[Navigation]}
                navigation={{
                    nextEl: nextRef.current,
                    prevEl: prevRef.current,
                }}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                speed={200}
                breakpoints={{
                    360: {
                        slidesPerView: 2.1,
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: 4.3,
                        spaceBetween: 12,
                    },
                    1440: {
                        slidesPerView: 3.1,
                        spaceBetween: 12,
                    },
                    1920: {
                        slidesPerView: 4.0,
                        spaceBetween: 24,
                    },
                }}
            >
                {slides.map((slide, index) => {
                    const { title, description, image, category } = slide;

                    return (
                        <SwiperSlide key={index} data-test-id={`carousel-card-${index}`}>
                            <SliderCard
                                title={title}
                                description={description}
                                image={image}
                                categories={category}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Flex
                position='absolute'
                top='40%'
                left={-2}
                zIndex={8}
                ref={prevRef}
                data-test-id='carousel-forward'
            >
                <SliderLeftButton />
            </Flex>
            <Flex
                ref={nextRef}
                position='absolute'
                top='40%'
                right={{ xl: -1, '2xl': 3 }}
                zIndex={8}
                data-test-id='carousel-back'
            >
                <SliderRightButton />
            </Flex>
        </Flex>
    );
};
