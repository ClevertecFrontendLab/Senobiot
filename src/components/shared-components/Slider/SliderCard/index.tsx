import { useBreakpointValue } from '@chakra-ui/react';

import { RecieptCard } from '../..';

type SliderCardProps = {
    title: string;
    description?: string;
    subcategory?: string;
    img?: string;
    icon?: string;
};

const SliderCard: React.FC<SliderCardProps> = ({ title, description, subcategory, img, icon }) => {
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
            minWidth={{ base: 158, xl: 322 }}
            text={description}
            title={title}
            titleMargin={2}
            titleTextFz={{ base: 'md', xl: 'lg', '2xl': 'xl' }}
            titleTextLh='28px'
            titleHeading='h3'
            titleTextAlign='left'
            noButtons={true}
            position={{ base: 'relative', xl: 'static' }}
            noDescription={hiddenElements}
            categorySx={categoryResponsivePosition}
            imageSrc={img}
            stateIconSize={3}
            stateTextFontSize='12px'
            statTextFontWeight={600}
            categoryText={subcategory}
            categoryIconUrl={icon}
            bookmarkJustify='space-between'
            titleTextNoOfLines={{ base: 2, xl: 1 }}
        />
    );
};

export default SliderCard;
