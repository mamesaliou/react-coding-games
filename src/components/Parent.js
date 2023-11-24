//import React from 'react';
import Child from './Child';
import Hexed from './Hexed';
import React, { useState } from "react";

function Parent({ initial }) {
    // Utiliser la fonction de mise à jour renvoyée par useState
    const [value, setValue] = useState(initial);

    // Créer une fonction pour remonter la valeur du Child
    function handleValueChange(newValue) {
        setValue(newValue); // Mettre à jour l'état du Parent
    }

    return (
        <div>
            <div id="value">{value}</div>
            {/* Passer la fonction comme prop au Child */}
            <Child value={value} onValueChange={handleValueChange} />
        </div>
    );
}

/*function Parent({ value }) {
    // Afficher le composant Hexed en lui passant la valeur et le composant Child
    return <Hexed value={value} component={Child} />;
}*/

export default Parent;
