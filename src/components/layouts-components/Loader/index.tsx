import { Box, Flex, Spinner } from '@chakra-ui/react';

import { TEST_IDS } from '~/constants';

import * as styles from './Loader.styles';

export const Loader: React.FC = () => (
    <Box sx={styles.mainWrapper}>
        <Flex sx={styles.wrapper}>
            <Spinner data-test-id={TEST_IDS.spinner} sx={styles.spinner} />
        </Flex>
    </Box>
);

export const SearchLoader: React.FC = () => (
    <Flex sx={styles.searchWrapper}>
        <Spinner data-test-id={TEST_IDS.minispinner} sx={styles.searchSpinner} />
    </Flex>
);
