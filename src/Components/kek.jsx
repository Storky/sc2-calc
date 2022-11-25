import React from 'react';
import Button from '@mui/material/Button';

const Kek = ({str = 'ass'}) => {
    return (
        <div>
            <Button variant="contained">Hello {str}</Button>
        </div>
    );
};

export default Kek;