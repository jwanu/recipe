import React from 'react';
import styled from 'styled-components';

const BoxTemplate = styled.div`
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 15px rgba(0,0,0,0.04);
    overflow: hidden;
    
`;

const Box = ({children}) => {
    return (
        <BoxTemplate>
            {children}
        </BoxTemplate>
    );
};

export default Box;