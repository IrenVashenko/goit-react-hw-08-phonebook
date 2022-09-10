import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';


export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isReffresgingIn = useSelector(authSelectors.getIsReffreshing);
  const shouldRedirect = !isLoggedIn && !isReffresgingIn;
  return (shouldRedirect ? <Navigate to={redirectTo} /> : Component);
}