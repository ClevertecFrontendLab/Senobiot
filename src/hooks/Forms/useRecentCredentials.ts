import { useContext } from 'react';

import { RecentCredentialsContext } from '~/providers/RecentCredentials/Context';

export const useRecentCredentials = () => {
    const context = useContext(RecentCredentialsContext);
    if (!context) {
        throw new Error('useRecentCredentials must be used within a RecentCredentialsProvider');
    }
    return context;
};
