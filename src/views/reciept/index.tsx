import { Flex } from '@chakra-ui/react';

import { RecieptSection } from '~/components/shared-components';
import { PADDINGS, WIDTHS } from '~/constants/styles';
import mockRespone from '~/data/data.json';

const data = JSON.parse(JSON.stringify(mockRespone));

const RecieptPage: React.FC = () => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx}
        px={{ base: 4, md: 5, xl: WIDTHS.sideMunu }}
        display='column'
    >
        <RecieptSection reciept={data[0]} />
    </Flex>
);

export default RecieptPage;
