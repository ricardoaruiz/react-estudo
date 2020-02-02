import React from 'react';
import { filhoComProps } from '../utils/ComponentUtils';

const Familia = props => 
    <div>
        {
        filhoComProps(props)
        
        // React.Children.map(props.children, child => 
        //     React.cloneElement(child, { ...props })
        // )
        }
    </div>

Familia.displayName = "Familia";

export default Familia;    