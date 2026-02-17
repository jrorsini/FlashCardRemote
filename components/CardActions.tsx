// components/CardActions.tsx
import { CardStatus } from '@/types';

interface CardActionsProps {
    onMark: (status: CardStatus) => void;
}

export default function CardActions({ onMark }: CardActionsProps) {
    return (
        <div className="flex gap-3 mt-6" onClick={(e) => e.stopPropagation()}>
            <button
                onClick={() => onMark('known')}
                className="bg-white text-green-600 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 active:scale-95 transition-all shadow"
            >
                ✅ Je connais
            </button>
            <button
                onClick={() => onMark('review')}
                className="bg-white text-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-orange-50 active:scale-95 transition-all shadow"
            >
                🔁 À revoir
            </button>
        </div>
    );
}
