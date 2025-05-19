import { Image, Text, VStack } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';

import { AlertPopup, ContentPageWrapper, SubtitleText } from '~/components/shared-components';
import { BASE_URL, PAGE_TITLES, TEST_IDS } from '~/constants';
import { setAppError, userErrorSelector } from '~/redux/store/app-slice';

const NotFoundPage: React.FC = () => {
    const error = useSelector(userErrorSelector);
    const dispatch = useDispatch();
    const resetError = useCallback(() => {
        dispatch(setAppError(null));
    }, [dispatch]);

    return (
        <ContentPageWrapper>
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
                <Image src={`${BASE_URL}assets/images/404.png`} mb={4}></Image>
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
                        data-test-id={TEST_IDS.homeLink}
                        to='/'
                        style={{ textDecoration: 'underline' }}
                    >
                        здесь.
                    </Link>
                </Text>
            </VStack>
            {error && <AlertPopup onClose={resetError} />}
        </ContentPageWrapper>
    );
};
export default NotFoundPage;
