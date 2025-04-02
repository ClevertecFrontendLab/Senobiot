import { HStack, Image, Text } from '@chakra-ui/react';

interface StatProps {
    icon: string;
    value: number;
    name: string;
}

const StatItem: React.FC<StatProps> = ({ icon, value, name }) => (
    <HStack spacing={2}>
        <Image src={icon} alt={name} boxSize='24px' />
        <Text fontSize='lg' color='green.500' fontWeight='bold'>
            {value}
        </Text>
    </HStack>
);

export default StatItem;
