import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { NavigationConfig } from '~/types';

const CategoryComponent = lazy(() => import('./category'));
const RecieptComponent = lazy(() => import('./reciept'));

const AppViews: React.FC<{ navigationConfig: NavigationConfig }> = ({ navigationConfig }) => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route
                path=':category/:subcategory/:id'
                element={<RecieptComponent navigationConfig={navigationConfig} />}
            />
            <Route path='/' Component={lazy(() => import('./home'))} />
            <Route
                path='/:category/:subcategory?'
                element={<CategoryComponent navigationConfig={navigationConfig} />}
            />
            <Route path='/not-found' Component={lazy(() => import('./404'))} />
            <Route path='*' element={<Navigate to='/not-found' replace />} />
        </Routes>
    </Suspense>
);

export default AppViews;
