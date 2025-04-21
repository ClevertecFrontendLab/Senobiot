import { Flex, ResponsiveValue } from '@chakra-ui/react';

import { PADDINGS } from '~/constants/styles';

type PageWrapperProps = {
    pt?: ResponsiveValue<number>;
    children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ pt = PADDINGS.pageTop, children }) => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx} // на макете не учтен скроллбар
        px={{ base: 4, md: 5, xl: 0 }}
        display='column'
        w={{ '2xl': 1360 }}
        pt={pt}
        pb={{ base: PADDINGS.footer, xl: 'unset' }} // конец контента
    >
        {children}
    </Flex>
);

export default PageWrapper;
