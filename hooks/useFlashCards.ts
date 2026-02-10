import { useState } from 'react';
import { FlashCard } from '@/types';

export function useFlashCards(cards: FlashCard[]) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isFlipped, setIsFlipped] = useState(false);

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
    };
}
