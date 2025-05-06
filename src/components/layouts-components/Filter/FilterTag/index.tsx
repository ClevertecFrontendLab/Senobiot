import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

import { TEST_IDS } from '~/constants';

const FilterTag: React.FC<{
    item: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    testId?: boolean;
}> = ({ item, onClick, testId = false }) => (
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
