import { CategoryCardProps } from '~/components/shared-components/CategorySection/CategorySectionCard';

import { RecieptCard } from '../..';

const CategorySectionNextCard: React.FC<CategoryCardProps> = ({
    title,
    description,
    subcategory,
    icon,
    ...props
}) => (
    <RecieptCard
        {...props}
        minWidth='initial'
        text={description}
        title={title}
        titleMargin={2}
        titleTextFz={{ base: 'md', xl: 'lg', '2xl': 'xl' }}
        titleTextLh='28px'
        titleHeading='h3'
        titleTextAlign='left'
        categoryBg='lime.50'
        categoryPy={0}
        categoryPx={2}
        noCategory={false}
        noImage={true}
        noButtons={true}
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
        cardFlexWidth={{ base: '1 1 100%', md: '0 0 33.33%', xl: '0 0 33.33%', '2xl': '1 0 322px' }}
        cardContentPadding={{
            base: '8px',
            xl: '16px',
            '2xl': '24px 24px 20px',
        }}
        cardHeaderNoOfLines={1}
    />
);

export default CategorySectionNextCard;
