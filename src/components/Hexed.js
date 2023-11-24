import React from 'react';

function Hexed({ value, component }) {
    // Transformer le nombre en sa représentation hexadécimale précédée de "0x"
    const hex = "0x" + value.toString(16);

    // Afficher le composant dans un div ayant l'id "hexed" en lui passant la valeur transformée
    return (
        <div id="hexed">
            {React.createElement(component, { value: hex })}
        </div>
    );
}

export default Hexed;
