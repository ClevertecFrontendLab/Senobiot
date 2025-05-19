import { ReactNode, useState } from 'react';

import { FormValues } from '~/types';

import { RecentCredentialsContext } from './Context';

export const RecentCredentialsProvider = ({ children }: { children: ReactNode }) => {
    const [recentCredentials, setRecentCredentialsState] = useState<
        Partial<Record<keyof FormValues, string>>
    >({});

    const setRecentCredentials = (credentials: Partial<Record<keyof FormValues, string>>) => {
        setRecentCredentialsState(credentials);
    };

    const clearRecentCredentials = () => setRecentCredentialsState({});

    return (
        <RecentCredentialsContext.Provider
            value={{ recentCredentials, setRecentCredentials, clearRecentCredentials }}
        >
            {children}
        </RecentCredentialsContext.Provider>
    );
};
