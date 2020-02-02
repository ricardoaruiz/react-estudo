import React from 'react';

const Col = props => {

    const toCssClasses = (columns) => {
        const cols = columns ? columns.split(' ') : ['12'];
    
        let classes  = cols[0] ? `col-xs-${cols[0]} ` : '';
            classes += cols[1] ? `col-sm-${cols[1]} ` : '';
            classes += cols[2] ? `col-md-${cols[2]} ` : '';
            classes += cols[3] ? `col-lg-${cols[3]}` : '';

        return classes;
    }

    return ( 
        <div className={toCssClasses(props.grid)}>
            {props.children}
        </div>
    );
}
 
export default Col;