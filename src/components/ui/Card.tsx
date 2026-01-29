import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-soft overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-musical hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
