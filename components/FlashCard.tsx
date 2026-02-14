import { FlashCard as FlashCardType, CardStatus } from '@/types';

interface FlashCardProps {
    card: FlashCardType;
    isFlipped: boolean;
    onFlip: () => void;
    currentStatus: CardStatus;
    onMark: (status: CardStatus) => void;
}

export default function FlashCard({
    card,
    isFlipped,
    onFlip,
    currentStatus,
    onMark,
}: FlashCardProps) {
    return (
        <div className="flex">
            {currentStatus !== 'unseen' && (
                <div
                    className={`
          text-sm font-medium px-3 py-1 rounded-full
          ${
              currentStatus === 'known'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-orange-100 text-orange-700'
          }
        `}
                >
                    {currentStatus === 'known' ? '✅ Connue' : '🔁 À revoir'}
                </div>
            )}
            <div
                onClick={onFlip}
                className="relative w-full max-w-md h-64 cursor-pointer perspective-1000"
            >
                <div
                    className={`relative w-full h-full transition-transform duration-500 transform-style-3d
          ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                    <div className="absolute w-full h-full backface-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 text-white">
                            <p className="text-sm uppercase tracking-wider mb-4 opacity-80">
                                Question
                            </p>
                            <p className="text-4xl font-bold text-center">
                                {card.question}
                            </p>
                            <p className="text-sm mt-6 opacity-70">
                                Clique pour voir la réponse
                            </p>
                        </div>
                    </div>
                    <div className="absolute w-full h-full backface-hidden rotate-y-180">
                        <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 text-white">
                            <p className="text-sm uppercase tracking-wider mb-4 opacity-80">
                                Réponse
                            </p>
                            <p className="text-3xl font-bold text-center">
                                {card.answer}
                            </p>
                            <p className="text-sm mt-6 opacity-70">
                                Clique pour voir la question
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
