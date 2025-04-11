import { Flex } from '@chakra-ui/react';

import ButtonViewMore from '~/components/shared-components/ButtonViewMore';
import { getSubCategoryList, routeFinder } from '~/configs/navigationConfig';
import { PADDINGS } from '~/constants/styles';
import { usePathnames } from '~/utils';

import { CategoryHeader } from '../Headers';
import CategoryMenu from './CategoryMenu';
import CategoryCard from './CategorySectionCard';

export type CategorySectionDataProps = {
    title: string;
    description: string;
    img: string;
    subcategory?: string;
    icon?: string;
};

export type CategorySectionProps = {
    categoryTitle: string;
    categoryButtonText?: string;
    noButton?: boolean;
    data: CategorySectionDataProps[];
    categoryHeaderMb?: string | number;
    noHeader?: boolean;
    noFooter?: boolean;
    noNavMenu?: boolean;
    noButtonIcon?: boolean;
    noHeaderButton?: boolean;
    mb?: string | number;
};

export const CategorySection: React.FC<CategorySectionProps> = ({
    categoryTitle,
    categoryButtonText = '',
    data,
    categoryHeaderMb = PADDINGS.subsectionHeaderMb,
    mb = PADDINGS.subsectionMb,
    noHeaderButton = false,
    noHeader = false,
    noFooter = false,
    noNavMenu = false,
    noButtonIcon,
}) => {
    const pathnames = usePathnames();
    const activeCategory = routeFinder(pathnames.length > 1 ? pathnames[1] : pathnames[0]);
    const menuList = activeCategory?.title ? getSubCategoryList(activeCategory?.title) : []; // когда будет апи всё это выпилить

    return (
        <Flex justifyContent='space-between' mb={mb} direction='column'>
            {!noHeader && (
                <Flex justifyContent='space-between' mb={categoryHeaderMb}>
                    <CategoryHeader title={categoryTitle} />
                    {!noHeaderButton && (
                        <ButtonViewMore
                            dataTestId='juiciest-link'
                            title={categoryButtonText}
                            noButtonIcon={noButtonIcon}
                        />
                    )}
                </Flex>
            )}
            {!noNavMenu && <CategoryMenu list={menuList} />}
            <Flex flexWrap='wrap' gap={4}>
                {data.map((card, index) => {
                    const { title, description, img, subcategory, icon } = card;

                    return (
                        <CategoryCard
                            key={index}
                            title={title}
                            description={description}
                            img={img}
                            subcategory={subcategory}
                            icon={icon}
                        />
                    );
                })}
            </Flex>
            {!noFooter && (
                <Flex justifyContent='center' mt={categoryHeaderMb}>
                    <ButtonViewMore title={categoryButtonText} dataTestId='juiciest-link-mobile' />
                </Flex>
            )}
        </Flex>
    );
};
