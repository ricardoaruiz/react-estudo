import React from 'react';

export default props =>    
    <div>
        <h1>Parte 1</h1>,
        <h2>Parte 2</h2>
    </div>

//  Solução 01 - envolver em uma tag.
// export default props =>    
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>

// Solução 02 - usar o fragment.
// export default props =>    
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>

// Solução 03 - retornar um array de elementos
// export default props =>    
//     [
//         <h1>Parte 1</h1>,
//         <h2>Parte 2</h2>
//     ]