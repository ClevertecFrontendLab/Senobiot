import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

const RegistrationPage = lazy(() => import('~/components/pages/Registration'));
const LoginPage = lazy(() => import('~/components/pages/Login'));

export const AuthViews: React.FC = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/registration' element={<RegistrationPage />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    </Suspense>
);
