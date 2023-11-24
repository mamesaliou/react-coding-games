import React, {useState} from 'react';

function Child({ onValueChange }) {
    // Utiliser useState pour créer un état local
    let [value, setValue] = useState("");

    // Utiliser la fonction handleChange comme attribut onChange de l'input
    function handleChange(event) {
        value = event.target.value;
        setValue(value); // Mettre à jour l'état local
        onValueChange(value); // Remonter la valeur au Parent
    }

    return (
        <div>
            <input id="input" type="text" value={value} onChange={handleChange} />
        </div>
    );
}

/*function Child({ value }) {
    // Afficher la valeur dans un div ayant l'id "child"
    return <div id="child">{value}</div>;
}*/

export default Child;
