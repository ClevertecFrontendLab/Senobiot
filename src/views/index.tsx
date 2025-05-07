import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { NavigationConfig } from '~/types';

const CategoryComponent = lazy(() => import('./category'));
const RecieptComponent = lazy(() => import('./reciept'));
const HomeComponent = lazy(() => import('./home'));
const ErrorComponent = lazy(() => import('./404'));

const AppViews: React.FC<{ navigationConfig: NavigationConfig }> = ({ navigationConfig }) => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route
                path=':category/:subcategory/:id'
                element={<RecieptComponent navigationConfig={navigationConfig} />}
            />
            <Route path='/' element={<HomeComponent navigationConfig={navigationConfig} />} />
            <Route
                path='/:category/:subcategory?'
                element={<CategoryComponent navigationConfig={navigationConfig} />}
            />
            <Route path='/not-found' element={<ErrorComponent />} />
            <Route path='*' element={<Navigate to='/not-found' replace />} />
        </Routes>
    </Suspense>
);

export default AppViews;
