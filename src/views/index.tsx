import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { navTree } from '~/configs/navigationConfig';

const AppViews: React.FC = () => (
    // TODO Make normal LOADER
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {navTree.map((navItem) => (
                <Route
                    key={navItem.navKey}
                    path={navItem.route}
                    Component={lazy(() => {
                        if (navItem.route === '/') {
                            return import('./home');
                        }
                        return import('./category');
                    })}
                />
            ))}
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    </Suspense>
);

export default AppViews;
