import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

const RegistrationPage = lazy(() => import('~/components/pages/Registration'));

export const AuthViews: React.FC = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route path='/registration' element={<RegistrationPage />} />
            <Route path='*' element={<Navigate to='/registration' replace />} />
        </Routes>
    </Suspense>
);
