import { CategoryCardProps } from '~/components/shared-components/CategorySection/CategorySectionCard';
import { BORDERS } from '~/constants/styles';

import RecieptCard from '../../RecieptCard';

const CategorySectionNextCard: React.FC<CategoryCardProps> = ({
    title,
    description,
    subcategory,
    icon,
}) => (
    <RecieptCard
        text={description}
        title={title}
        titleMargin={2}
        titleTextFz={{ base: 'md', xl: 'lg', '2xl': 'xl' }}
        titleTextLh='28px'
        titleHeading='h3'
        titleTextAlign='left'
        categoryBg='lime.50'
        categoryPy={0} // очень криво из-за --chakra-line-clamp
        categoryPx={2}
        cardBorderRadius='4px'
        noCategory={false}
        noImage={true}
        noButtons={true}
        descriptionMargin={6}
        cardContentPadding={{
            base: '12px',
            xl: '16px 24px 20px',
        }}
        cardBorder={BORDERS.light}
        stateIconSize={3}
        stateTextFontSize='14px'
        statTextFontWeight={600}
        categoryText={subcategory}
        categoryTextFz={14}
        categoryIconUrl={icon}
        bookmarkJustify='space-between'
        bookmarkStatGap={{ base: 2, md: 4, xl: 2 }}
        titleTextNoOfLines={{ base: 2, md: 1 }}
        categoryTextNoofLines={{ base: 1, md: 0, xl: 1 }}
        cardFlexWidth={{ base: '1 1 100%', md: '0 0 33%', xl: '0 0 33%', '2xl': '0 0 322px' }}
    />
);

export default CategorySectionNextCard;
