import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { PADDINGS } from '~/constants/styles';
import { RecipeProps } from '~/types';

import CategoryCard from '../CategorySection/CategorySectionCard';

type RecieptSectionProps = {
    categoryTitle?: string;
    categoryButtonText?: string;
    noButton?: boolean;
    reciept: RecipeProps;
    categoryHeaderMb?: string | number;
    noHeader?: boolean;
    noFooter?: boolean;
    noNavMenu?: boolean;
    noButtonIcon?: boolean;
    noHeaderButton?: boolean;
    mb?: string | number;
};

export const RecieptSection: React.FC<RecieptSectionProps> = ({
    reciept,
    mb = PADDINGS.subsectionMb,
}) => {
    const { pathnames } = useParams();
    console.log(pathnames);
    const { title, description, image, category } = reciept;

    return (
        <Flex justifyContent='space-between' mb={mb} direction='column'>
            <CategoryCard
                title={title}
                description={description}
                img={image}
                categories={category}
                bookmarkMaxHeight={12}
            />
        </Flex>
    );
};
