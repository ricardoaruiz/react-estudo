import React from 'react';
import PropTypes from 'prop-types';
import { Route as RouteDOM, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext/useAuth';

const Route = ({
  isPrivate,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const isSigned = !!user.token;

  return (
    <RouteDOM
      {...rest}
      render={({ location }) => {
        if (isPrivate === isSigned) {
          return <Component />;
        }
        return (<Redirect
          to={{
            pathname: isPrivate ? '/' : '/main',
            state: { from: location }
          }}
        />);
      }}
    />
  )
}

Route.defaultProps = {
  isPrivate: false,
  component: () => <></>
}

Route.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.elementType,
}

export default Route
