import  { useEffect } from 'react';
import { useRouter } from 'next/router';
import useProfile from '@/store/hooks/useProfile';
import { GuardProps } from 'types';
import useViewer from '@/store/hooks/useViewer';

// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }: GuardProps) => {
  const { state: { email: viewerEmail } } = useViewer();
  const { state: { email } } = useProfile();

  const router = useRouter();
  useEffect(() => {
    if (email === '' || viewerEmail === '') {
      router.push('/login');
      
    }
    // eslint-disable-next-line
  }, [email]);
  return children;
};

export default AuthGuard;
