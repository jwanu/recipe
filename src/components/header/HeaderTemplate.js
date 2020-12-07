import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const HeaderTemp = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 40px;
    margin-bottom: 16px;
    h1 {

    }
`;

const HeaderTemplate = () => {
    return (
        <HeaderTemp>
            <h1></h1>
            <Search />
        </HeaderTemp>
    );
};

export default HeaderTemplate;