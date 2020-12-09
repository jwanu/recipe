import React from 'react';

const Autocomplete = ({autocomplete}) => {
    return (
        <ul>
            {autocomplete.map(autocomplet => (
                <li key={autocomplet.id}>
                    {autocomplet.title}
                </li>
            ))}
        </ul>
    );
};

export default Autocomplete;