import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { navTree } from '~/configs/navigationConfig';

const AppViews: React.FC = () => (
    // TODO Make normal LOADER
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {navTree.map((navItem) => (
                <Route
                    key={navItem.key}
                    path={navItem.path}
                    Component={lazy(() => import(`./${navItem.key}`))}
                />
            ))}
            <Route path='*' element={<Navigate to={navTree[0]?.path} replace />} />
        </Routes>
    </Suspense>
);

export default AppViews;
