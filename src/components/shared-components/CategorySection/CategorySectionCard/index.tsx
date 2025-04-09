import { useBreakpointValue } from '@chakra-ui/react';
import { useMemo } from 'react';

import { BORDERS } from '~/constants/styles';

import RecieptCard from '../../RecieptCard';

type CategoryCardProps = {
    title: string;
    description?: string;
    subcategory?: string;
    img?: string;
    icon?: string;
    hiddenElements?: boolean;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    description,
    subcategory,
    img,
    icon,
}) => {
    const responsiveValues = useBreakpointValue({
        base: {
            hiddenElements: true,
            categoryResponsivePosition: { position: 'absolute', top: 2, left: 2 },
        },
        xl: {
            hiddenElements: false,
            categoryResponsivePosition: { position: 'static' },
        },
    });

    const memoizedValues = useMemo(() => responsiveValues, [responsiveValues]);

    const { hiddenElements, categoryResponsivePosition } = memoizedValues || {};

    return (
        <RecieptCard
            minWidth={{ base: 158, xl: 322 }}
            text={description}
            title={title}
            titleMargin={2}
            titleTextFz='xl'
            titleTextLh='28px'
            titleHeading='h3'
            titleTextAlign='left'
            categoryBg='lime.50'
            categoryPy={1}
            categoryPx={1}
            position={{ base: 'relative', xl: 'static' }}
            cardBorderRadius='4px'
            imageBorderRadius='6px 0 0 6px'
            noDescription={hiddenElements}
            categorySx={categoryResponsivePosition}
            imageSrc={img}
            descriptionMargin={6}
            cardContentPadding={{
                base: '8px',
                xl: '16px 24px 20px',
            }}
            cardBorder={BORDERS.light}
            stateIconSize={3}
            stateTextFontSize='12px'
            statTextFontWeight={600}
            categoryText={subcategory}
            categoryIconUrl={icon}
            bookmarkJustify='space-between'
            cardFlexeidth={{ md: '1 1 40%', xl: '1 1 100%', '2xl': '1 1 40%' }}
            titleTextNoOfLines={{ base: 2, xl: 1 }}
            wrap={{ base: 'nowrap' }}
            bookmarksOrder={{ base: -1 }}
            bookmarkMb={{ xl: 6 }}
        />
    );
};

export default CategoryCard;
