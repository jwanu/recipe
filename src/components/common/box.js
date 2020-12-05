import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    border-radius: 20px;
    box-shadow: 0 0 15px rgba(0,0,0,0.02);
`;

const box = ({children}) => {
    return (
        <Box>
            {children}
        </Box>
    );
};

export default box;