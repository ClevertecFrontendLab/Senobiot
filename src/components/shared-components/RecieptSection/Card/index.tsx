import { RecipeProps } from '~/types';

import { RecieptCard } from '../../RecieptCard';

export const RecieptSectionCard: React.FC<{ reciept: RecipeProps }> = ({ reciept }) => {
    const { title, description, image, category, time, bookmarks, likes } = reciept;

    return (
        <RecieptCard
            imageWidth={{ base: '100%', md: 232, xl: 353, '2xl': 553 }}
            imageHeight={{ base: 224, md: 'auto', xl: 410 }}
            wrap={{ base: 'wrap', md: 'nowrap' }}
            title={title}
            titleMargin={{ base: 4, xl: 6 }}
            text={description}
            imageSrc={image}
            categories={category}
            bookmarkMaxHeight={12}
            bookmarkMarginTop={{ base: 4, md: 'unset' }}
            bookmarkWrap={{ base: 'nowrap' }}
            titleTextFz={{ md: '24px', xl: '48px' }}
            titleTextLh={{ md: '32px', xl: '48px' }}
            titleTextFw={700}
            titleTextAlign='left'
            categoryBg='lime.50'
            imageFit='cover'
            bookmarksOrder={{ base: -1 }}
            bookmarkMb={8}
            bookmarksBookmarksValue={bookmarks}
            bookmarksLikesValue={likes}
            stateIconSize={3.5}
            stateTextFontSize='14px'
            bookBtnText='Оценить рецепт'
            bookBtnIconUrl='/icons/bookmarks/emoji-heart-eyes.svg'
            bookBtnTextDisplay={{ base: 'initial' }}
            bookBtnSize={{ base: '132px', xl: 'unset' }}
            coockingButtonText='Сохранить в закладки'
            coockingButtonBg='lime.400'
            coockingButtonTextColor='#000'
            coockingButtonIconUrl='/icons/bookmarks/heart.svg'
            noTimeButton={false}
            timeBtnText={time}
            cardBorder='none'
            cardContentPadding={{
                base: 0,
                md: '0 0 0 16px',
                xl: '0 0 0 24px',
            }}
            regTextNoOfLines={{ md: 2, xl: 3 }}
            recieptButtonsSectionDirection={{ base: 'column', md: 'row' }}
            timeBtnMarginBottom={{ base: 3, md: 'unset' }}
            bookBtnIconMarginInlineEnd={2}
            noHoverEffect={true}
            recieptButtonsSize={{ base: 'xs', xl: 'sm', '2xl': 'lg' }}
        />
    );
};
