import { createContext } from 'react';

import { FormValues } from '~/types';

export type RecentCredentialsContextType = {
    recentCredentials: Partial<Record<keyof FormValues, string>>;
    setRecentCredentials: (credentials: Partial<Record<keyof FormValues, string>>) => void;
    clearRecentCredentials: () => void;
};

export const RecentCredentialsContext = createContext<RecentCredentialsContextType | undefined>(
    undefined,
);
