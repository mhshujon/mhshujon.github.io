import { useCallback } from 'react';

export const useScrollTo = () => {
    return useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, []);
};