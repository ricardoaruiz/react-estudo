import React from 'react'
import './PageHeader.scss'

const PageHeader = props => (
    <header className="page-header">
        <h2>
            {props.name} <small>{props.small}</small>
        </h2>
    </header>
)

PageHeader.displayName = 'PageHeader';

export default PageHeader;