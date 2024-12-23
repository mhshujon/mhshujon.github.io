import { useState, useEffect, useCallback } from 'react';

type AutoScrollOptions = {
    interval?: number;
    initialDelay?: number;
};

export function useAutoScroll(itemCount: number, { interval = 5000, initialDelay = 0 }: AutoScrollOptions = {}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev === itemCount - 1 ? 0 : prev + 1));
    }, [itemCount]);

    const previous = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? itemCount - 1 : prev - 1));
    }, [itemCount]);

    useEffect(() => {
        if (isPaused || itemCount <= 1) return;

        // Initial delay
        const startTimer = setTimeout(() => {
            // Continuous interval after initial delay
            const scrollInterval = setInterval(next, interval);

            return () => clearInterval(scrollInterval);
        }, initialDelay);

        return () => clearTimeout(startTimer);
    }, [isPaused, interval, initialDelay, itemCount, next]);

    return {
        currentIndex,
        isPaused,
        next,
        previous,
        pause: () => setIsPaused(true),
        resume: () => setIsPaused(false)
    };
}