interface ProgressBarProps {
    currentIndex: number;
    totalCards: number;
}

export default function ProgressBar({
    currentIndex,
    totalCards,
}: ProgressBarProps) {
    const progress = ((currentIndex + 1) / totalCards) * 100;

    return (
        <div className="w-full max-w-md">
            <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-gray-600">Progression</p>
                <p className="text-sm font-bold text-gray-800">
                    {currentIndex + 1} / {totalCards}
                </p>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <p className="text-xs text-gray-500 mt-2 text-center">
                {currentIndex + 1 === totalCards
                    ? '🎉 Dernière carte !'
                    : `Encore ${totalCards - (currentIndex + 1)} carte(s)`}
            </p>
        </div>
    );
}
