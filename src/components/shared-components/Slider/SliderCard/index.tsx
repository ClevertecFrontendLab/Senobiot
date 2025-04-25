import { useBreakpointValue } from '@chakra-ui/react';

import { RecieptCard } from '../..';

type SliderCardProps = {
    title: string;
    description?: string;
    categories?: string[];
    image?: string;
    activeSearch?: string | null;
};

const SliderCard: React.FC<SliderCardProps> = ({
    title,
    description,
    categories,
    image,
    activeSearch,
}) => {
    const hiddenElements = useBreakpointValue({
        base: true,
        xl: false,
    });

    const categoryResponsivePosition = useBreakpointValue({
        base: {
            position: 'absolute',
            top: 2,
            left: 2,
        },
        xl: {
            position: 'static',
        },
    });

    return (
        <RecieptCard
            descriptionHeight={{ xl: 16 }}
            minWidth={{ base: 'auto', xl: 279 }}
            maxWidth={{ xl: 277, '2xl': 322 }}
            width={{ base: 'auto', xl: 277, '2xl': 322 }}
            imageHeight={{ base: 128, xl: 230 }}
            height={{ base: 220, xl: 402, '2xl': 414 }}
            text={description}
            title={title}
            titleMargin={2}
            titleTextFz={{ base: 'md', xl: 'lg', '2xl': 'xl' }}
            titleTextLh={{ base: '24px' }}
            titleHeading='h3'
            titleTextAlign='left'
            noButtons={true}
            position={{ base: 'relative', xl: 'static' }}
            imageSrc={image}
            stateIconSize={3}
            stateTextFontSize='12px'
            statTextFontWeight={600}
            categories={categories}
            bookmarkJustify='space-between'
            titleTextNoOfLines={{ base: 2, xl: 1 }}
            cardHeaderNoOfLines={{ base: 2, xl: 1 }}
            noDescription={hiddenElements}
            categorySx={categoryResponsivePosition}
            bookmarkMaxHeight={{ base: 'unset', xl: 6 }}
            titleTextHighlight={activeSearch}
        />
    );
};

export default SliderCard;
