import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { NavigationConfig } from '~/types';

const CategoryPage = lazy(() => import('./category'));
const RecieptPage = lazy(() => import('./reciept'));
const HomePage = lazy(() => import('./home'));
const ErrorPage = lazy(() => import('./404'));

export const ContentViews: React.FC<{ navigationConfig: NavigationConfig }> = ({
    navigationConfig,
}) => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route
                path=':category/:subcategory/:id'
                element={<RecieptPage navigationConfig={navigationConfig} />}
            />
            <Route path='/' element={<HomePage navigationConfig={navigationConfig} />} />
            <Route
                path='/:category/:subcategory?'
                element={<CategoryPage navigationConfig={navigationConfig} />}
            />
            <Route path='/not-found' element={<ErrorPage />} />
            <Route path='*' element={<Navigate to='/not-found' replace />} />
        </Routes>
    </Suspense>
);
