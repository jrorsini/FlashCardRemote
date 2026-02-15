import { CardStatus } from '@/types';

interface CardStatusBadgeProps {
    status: CardStatus;
}

export default function CardStatusBadge({ status }: CardStatusBadgeProps) {
    if (status === 'unseen') return null;

    return (
        <div
            className={`
      text-sm font-medium px-3 py-1 rounded-full
      ${
          status === 'known'
              ? 'bg-green-100 text-green-700'
              : 'bg-orange-100 text-orange-700'
      }
    `}
        >
            {status === 'known' ? '✅ Connue' : '🔁 À revoir'}
        </div>
    );
}
