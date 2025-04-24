import { Text } from '@chakra-ui/react';

const FilterTitle: React.FC<{ title: string }> = ({ title = '' }) => (
    <Text fontWeight={500} fontSize='16px' lineHeight='24px' color='#000' fontFamily='Inter'>
        {title}:
    </Text>
);

export default FilterTitle;
