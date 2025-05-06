import { Image, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router';

import { PageWrapper, SubtitleText } from '~/components/shared-components';
import { PAGE_TITLES } from '~/constants';

const NotFoundPage: React.FC = () => (
    <PageWrapper>
        <VStack
            justifyContent='center'
            alignItems='center'
            flexGrow={1}
            wrap='wrap'
            gap={4}
            maxW={{ base: '230px', xl: 'unset' }}
            mx='auto'
            textAlign='center'
        >
            <Image src='/404.png' mb={4}></Image>
            <SubtitleText
                titleHeading='h1'
                titleTextFw={700}
                titleTextFz='24px'
                titleTextLh='32px'
                titleText={PAGE_TITLES.notFound}
            />
            <Text>
                Можете поискать другой рецепт{' '}
                <Link
                    data-test-id='error-page-go-home'
                    to='/'
                    style={{ textDecoration: 'underline' }}
                >
                    здесь.
                </Link>
            </Text>
        </VStack>
    </PageWrapper>
);

export default NotFoundPage;
