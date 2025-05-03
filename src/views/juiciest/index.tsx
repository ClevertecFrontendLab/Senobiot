// import { VStack } from '@chakra-ui/react';
// import { useCallback, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { Loader } from '~/components/layouts-components';
// import { SearchBar } from '~/components/layouts-components/SearchBar';
// import {
//     CategorySection,
//     // CategorySectionNext,
//     ServerErrorAlert,
// } from '~/components/shared-components';
// import PageWrapper from '~/components/shared-components/PageWrapper';
// import { useJuciestRecieptsQuery } from '~/redux/query/create-api';
// import { getSubCategoriesByIds } from '~/redux/selectors';
// import { setAppError, userErrorSelector } from '~/redux/store/app-slice';
// import { RecipeProps } from '~/types';
// import { populateRecieptCategory } from '~/utils';

// // const nexSection = navTree.find((e) => e.navKey === 'desserts-baking'); // TODO remove after true api

// const JuiciestPage: React.FC = () => {
//     // const activeSearch = ''; /// REMOVE!!!!!!!!!!!
//     const [juciestReciepts, setJuciestReciepts] = useState<RecipeProps[]>([]);
//     const [page, setPage] = useState<number>(1);
//     const dispatch = useDispatch();
//     const categories = useSelector(getSubCategoriesByIds);
//     const error = useSelector(userErrorSelector);
//     const resetError = useCallback(() => {
//         dispatch(setAppError(null));
//     }, [dispatch]);

//     const {
//         data: { data, meta } = {},
//         isLoading: isLoadingJuciest,
//         isError: isErrorJuciest,
//         isFetching,
//     } = useJuciestRecieptsQuery(
//         { limit: 8, page },
//         {
//             skip: !categories,
//         },
//     );

//     const getMore = () => {
//         setPage((prevPage) => prevPage + 1);
//     };

//     useEffect(() => {
//         if (categories && !isLoadingJuciest) {
//             if (data) {
//                 const populatedData = data.map((e) => populateRecieptCategory(e, categories));
//                 setJuciestReciepts((prevData) =>
//                     page === 1 ? populatedData : [...prevData, ...populatedData],
//                 );
//             }
//             if (!isErrorJuciest) {
//                 resetError();
//             }

//             if (isErrorJuciest) {
//                 dispatch(setAppError('Error'));
//             }
//         }
//     }, [categories, data, isLoadingJuciest, page, isErrorJuciest, dispatch, resetError]);

//     // useEffect(() => {
//     //     if (isErrorJuciest) {
//     //         dispatch(setAppError('Error'));
//     //     }
//     // }, [isErrorJuciest, dispatch]);

//     if (isLoadingJuciest || isFetching) {
//         return <Loader />;
//     }

//     return (
//         <PageWrapper>
//             {error && <ServerErrorAlert onClose={resetError} />}
//             <SearchBar pageTitle='Самое сочное' />
//             <VStack px={{ base: 4, md: 5, xl: 0 }} m={0} gap={0} w='100%'>
//                 {!isErrorJuciest && juciestReciepts?.length && (
//                     <CategorySection
//                         noFooter={meta?.totalPages === page}
//                         recieptsData={juciestReciepts}
//                         categoryButtonText='Загрузить еще'
//                         noHeader={true}
//                         onClick={getMore}
//                     />
//                 )}
//                 {/* <CategorySectionNext
//                     title={nexSection?.title || ''}
//                     description={nexSection?.description || ''}
//                     data={initialData}
//                 /> */}
//             </VStack>
//         </PageWrapper>
//     );
// };

// export default JuiciestPage;
