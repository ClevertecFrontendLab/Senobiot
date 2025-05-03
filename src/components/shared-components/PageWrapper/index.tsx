import { Flex, ResponsiveValue } from '@chakra-ui/react';

import { PADDINGS } from '~/constants/styles';

type PageWrapperProps = {
    pt?: ResponsiveValue<number>;
    children: React.ReactNode;
};

export const PageWrapper: React.FC<PageWrapperProps> = ({ pt = PADDINGS.pageTop, children }) => (
    <Flex
        minH='100vh'
        mx={PADDINGS.sectionMx} // на макете не учтен скроллбар
        direction='column'
        w={{ '2xl': 1360 }}
        pt={pt}
        pb={{ base: PADDINGS.footer, xl: 'unset' }} // конец контента
    >
        {children}
    </Flex>
);
