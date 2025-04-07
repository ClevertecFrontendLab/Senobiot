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
                    Component={lazy(() =>
                        import(`./${navItem.route}`).catch(() => {
                            console.error(`Не сделал "${navItem.navKey}`);
                            return import('./main');
                        }),
                    )}
                />
            ))}
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    </Suspense>
);

export default AppViews;
