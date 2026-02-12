interface NavigationProps {
    onPrevious: () => void;
    onNext: () => void;
    isFirst: boolean;
    isLast: boolean;
}
export default function Navigation({
    onPrevious,
    onNext,
    isFirst,
    isLast,
}: NavigationProps) {
    return (
        <div className="flex gap-4 w-full max-w-md">
            <button
                onClick={onPrevious}
                disabled={isFirst}
                className={`
          flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200
          ${
              isFirst
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg active:scale-95'
          }
        `}
            >
                ← Précédent
            </button>

            <button
                onClick={onNext}
                disabled={isLast}
                className={`
          flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200
          ${
              isLast
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg active:scale-95'
          }
        `}
            >
                Suivant →
            </button>
        </div>
    );
}
