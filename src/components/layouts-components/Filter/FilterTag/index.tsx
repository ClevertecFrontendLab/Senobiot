import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';

import { TEST_IDS } from '~/constants';
import { FilterTagProps } from '~/types';

const FilterTag: React.FC<FilterTagProps> = ({ item, onClick, testId = false }) => (
    <Tag
        data-test-id={testId ? TEST_IDS.filtersTag : ''}
        size='lg'
        variant='solid'
        color='lime.700'
        bgColor='lime.100'
        borderColor='lime.400'
        mr={2}
        mb={2}
    >
        <TagLabel>{item}</TagLabel>
        <TagCloseButton onClick={onClick} />
    </Tag>
);

export default FilterTag;
