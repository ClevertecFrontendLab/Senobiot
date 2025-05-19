import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { EXCLUDED_ROUTES } from '~/constants';

const RegistrationPage = lazy(() => import('~/components/pages/Registration'));
const LoginPage = lazy(() => import('~/components/pages/Login'));
const VerificationPage = lazy(() => import('~/components/pages/Verification'));

export const AuthViews: React.FC = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route path={`/${EXCLUDED_ROUTES.login}`} element={<LoginPage />} />
            <Route path={`/${EXCLUDED_ROUTES.registration}`} element={<RegistrationPage />} />
            <Route path={`/${EXCLUDED_ROUTES.verification}`} element={<VerificationPage />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    </Suspense>
);
