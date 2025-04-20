import { useBreakpointValue } from '@chakra-ui/react';
import { useMemo } from 'react';

import { RecieptCard, RecieptCardProps } from '../..';

export interface CategoryCardProps extends RecieptCardProps {
    title: string;
    description?: string;
    img?: string;
    icon?: string;
    hiddenElements?: boolean;
    categories: string[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    description,
    img,
    categories,
    ...props
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
            {...props}
            minWidth={{ base: 158, xl: 322 }}
            text={description}
            title={title}
            titleMargin={2}
            titleTextFz={{ base: 'md', xl: 'lg', '2xl': 'xl' }}
            titleTextLh='28px'
            titleHeading='h3'
            titleTextAlign='left'
            categoryBg='lime.50'
            categoryPy={1}
            categoryPx={1}
            position={{ base: 'relative', xl: 'static' }}
            imageBorderRadius='6px 0 0 6px'
            noDescription={hiddenElements}
            categorySx={categoryResponsivePosition}
            imageSrc={img}
            stateIconSize={3}
            stateTextFontSize='12px'
            statTextFontWeight={600}
            bookmarkJustify='space-between'
            cardFlexWidth={{ md: '1 1 40%', xl: '1 1 100%', '2xl': '1 1 40%' }}
            cardHeaderNoOfLines={{ base: 2, xl: 1 }}
            wrap={{ base: 'nowrap' }}
            bookmarksOrder={{ base: -1 }}
            bookmarkMb={{ xl: 6 }}
            bookmarkMaxHeight={{ base: 'unset', xl: 6 }}
            categories={categories}
        />
    );
};

export default CategoryCard;
