import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Search from './Search';
import { RiArrowLeftLine } from 'react-icons/ri'

const HeaderTemp = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 40px;
    margin-bottom: 16px;
`;

const HeaderTemplate = ({logo,title,search,back}) => {
    let history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <HeaderTemp>
            {logo && <div>LOGO</div>}
            {back && <Button onClick={goBack}><RiArrowLeftLine /></Button>}
            {title && <h1>{title}</h1>}
            {search && <Search />} 
        </HeaderTemp>
    );
};

export default HeaderTemplate;