import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { AllCategories } from '~/types';

const AppViews: React.FC<{ navTree: AllCategories[] }> = ({ navTree }) => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route path=':category/:subcategory/:id' Component={lazy(() => import('./reciept'))} />
            <Route path='/' Component={lazy(() => import('./home'))} />
            <Route path='/the-juiciest' Component={lazy(() => import('./juiciest'))} />

            {navTree.map((navItem, index) => {
                const CategoryComponent = lazy(() => import('./category'));

                return (
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
                );
            })}

            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    </Suspense>
);

export default AppViews;
