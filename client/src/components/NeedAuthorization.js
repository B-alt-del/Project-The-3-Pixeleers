import { isAuthenticated } from '../utilities/isAuthenticated';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function NeedAuthorization(props) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated() && location.pathname.match(/create|dashboard/ig))
      navigate('/login');

    // if (isAuthenticated() && (location.pathname.match(/\/|login/ig)))
    //   navigate('/');
  }, []);

  return (
    <>
      {props.children}
    </>
  )
}

export default NeedAuthorization;

