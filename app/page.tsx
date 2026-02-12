'use client';

import { flashCardData } from '@/data/questions';
import { useFlashCards } from '@/hooks/useFlashCards';
import FlashCard from '@/components/FlashCard';
import ProgressBar from '@/components/ProgressBar';
import Navigation from '@/components/Navigation';

export default function Home() {
    const {
        currentCard,
        currentIndex,
        totalCards,
        isFlipped,
        goToNext,
        goToPrevious,
        flipCard,
        reset,
        isFirst,
        isLast,
    } = useFlashCards(flashCardData);

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 gap-8">
            <h1 className="text-3xl font-bold text-gray-800">
                🇮🇳 Indian writing
            </h1>

            <ProgressBar currentIndex={currentIndex} totalCards={totalCards} />

            <FlashCard
                card={currentCard}
                isFlipped={isFlipped}
                onFlip={flipCard}
            />

            <Navigation
                onPrevious={goToPrevious}
                onNext={goToNext}
                isFirst={isFirst}
                isLast={isLast}
            />

            <button
                onClick={reset}
                className="text-sm text-gray-400 hover:text-gray-600 underline transition-colors"
            >
                Start all over
            </button>
        </main>
    );
}
