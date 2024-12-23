import React, { useState } from 'react';

export function useHoneypot() {
    const [value, setValue] = useState('');

    return {
        isBot: value !== '',
        honeypotField: {
            name: 'website', // Common honeypot field name
            type: 'text',
            value,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
            style: {
                opacity: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                height: 0,
                width: 0,
                zIndex: -1,
            },
            tabIndex: -1,
            autoComplete: 'off',
            'aria-hidden': true,
        },
    };
}