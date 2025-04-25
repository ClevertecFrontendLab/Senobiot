import './swiper-syles.css';

import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RecipeProps } from '~/types';

import { SliderLeftButton, SliderRightButton } from './Buttons';
import SliderCard from './SliderCard';

type SliderProps = {
    controlsSize?: number;
    slides: RecipeProps[];
    activeSearch?: string | null;
};

export const Slider: React.FC<SliderProps> = ({ slides = [], activeSearch }) => (
    <Flex direction='column' position='relative'>
        <Swiper
            data-test-id='carousel'
            modules={[Navigation]}
            navigation={{
                nextEl: '.slider-right-button',
                prevEl: '.slider-left-button',
            }}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            speed={200}
            breakpoints={{
                320: {
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
                const { title, description, image, category, subcategory, id } = slide;

                return (
                    <SwiperSlide key={index} data-test-id={`carousel-card-${index}`}>
                        <Link to={`/${category[0]}/${subcategory[0]}/${id}`}>
                            <SliderCard
                                title={title}
                                description={description}
                                image={image}
                                categories={category}
                                activeSearch={activeSearch}
                            />
                        </Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
        <Flex
            position='absolute'
            top='40%'
            left={-2}
            zIndex={8}
            className='slider-left-button'
            data-test-id='carousel-back'
        >
            <SliderLeftButton />
        </Flex>
        <Flex
            className='slider-right-button'
            position='absolute'
            top='40%'
            right={{ xl: -1, '2xl': -2 }}
            zIndex={8}
            data-test-id='carousel-forward'
        >
            <SliderRightButton />
        </Flex>
    </Flex>
);
