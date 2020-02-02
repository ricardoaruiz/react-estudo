import React from 'react';

const filhoComProps = (props) => {
    return React.Children.map(props.children, child =>
        React.cloneElement(child, { ...props })
    )
};

export { filhoComProps };