import { useState } from 'react';
import { FlashCard, CardStatus } from '@/types';

type CardStatuses = Record<number, CardStatus>;

export function useFlashCards(cards: FlashCard[]) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isFlipped, setIsFlipped] = useState(false);

    const [cardStatuses, setCardStatuses] = useState<CardStatuses>({});

    const goToNext = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsFlipped(false);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsFlipped(false);
        }
    };

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    const reset = () => {
        setCurrentIndex(0);
        setIsFlipped(false);
    };

    const markCard = (status: CardStatus) => {
        setCardStatuses((prev) => ({
            ...prev,
            [cards[currentIndex].id]: status,
        }));

        goToNext();
    };

    const getCurrentStatus = (): CardStatus => {
        return cardStatuses[cards[currentIndex].id] ?? 'Unseen';
    };

    const getStats = () => {
        const known = Object.values(cardStatuses).filter(
            (s) => s === 'known',
        ).length;
        const review = Object.values(cardStatuses).filter(
            (s) => s === 'review',
        ).length;
        const unseen = cards.length - known - review;

        return { known, review, unseen };
    };

    return {
        currentCard: cards[currentIndex],
        currentIndex,
        totalCards: cards.length,
        isFlipped,
        goToNext,
        goToPrevious,
        flipCard,
        reset,
        isFirst: currentIndex === 0,
        isLast: currentIndex === cards.length - 1,
        markCard,
        currenStatus: getCurrentStatus(),
        stats: getStats(),
    };
}
