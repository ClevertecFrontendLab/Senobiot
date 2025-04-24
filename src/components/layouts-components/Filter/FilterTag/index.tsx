import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

const FilterTag: React.FC<{
    item: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}> = ({ item, onClick }) => (
    <Tag
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
