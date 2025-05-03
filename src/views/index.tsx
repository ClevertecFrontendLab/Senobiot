import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { PAGE_TITLES } from '~/constants';
import { AllCategories } from '~/types';

const CategoryComponent = lazy(() => import('./category'));
const juciestPageData = {
    categoryEn: 'The juiciest',
    categoryRu: PAGE_TITLES.juiciest,
    route: '/the-juiciest',
};
const AppViews: React.FC<{ navTree: AllCategories[] }> = ({ navTree }) => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route path=':category/:subcategory/:id' Component={lazy(() => import('./reciept'))} />
            <Route path='/' Component={lazy(() => import('./home'))} />
            <Route
                path='/the-juiciest'
                element={<CategoryComponent pageData={juciestPageData} />}
            />

            {navTree.map((navItem, index) => (
                <React.Fragment key={index}>
                    <Route
                        path={navItem.route}
                        element={<CategoryComponent pageData={navItem} />}
                    />
                    {navItem.subCategories?.map((subNavItem, idx) => (
                        <Route
                            key={idx}
                            path={subNavItem.route}
                            element={<CategoryComponent pageData={subNavItem} />}
                        />
                    ))}
                </React.Fragment>
            ))}

            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    </Suspense>
);

export default AppViews;
