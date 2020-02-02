import React from 'react';

import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

export default props => (    
    <div>
        <ul className="sidebar-menu">
            <MenuItem 
                path="/dashboard" 
                label="Dashboard" 
                icon="dashboard" 
            />            

            <MenuTree label="Cadastros" icon="edit">
                <MenuItem 
                    path="/billingCycles" 
                    label="Ciclos de Pagamentos" 
                    icon="usd" 
                />
            </MenuTree>
        </ul>
    </div>
)