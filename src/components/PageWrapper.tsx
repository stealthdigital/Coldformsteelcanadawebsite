import { ReactNode } from 'react';
import { useAppNavigation } from '../hooks/useAppNavigation';

interface PageWrapperProps {
  children: (onNavigate: (page: string, id?: string) => void) => ReactNode;
}

/**
 * Wrapper component that provides navigation function to pages
 * This allows components using the old onNavigate prop pattern to work with React Router
 */
export function PageWrapper({ children }: PageWrapperProps) {
  const navigate = useAppNavigation();
  return <>{children(navigate)}</>;
}
