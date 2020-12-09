import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '../components/header/Autocomplete';
import { getAutocomplete } from '../modules/autocomplete';

const AutocompleteContainer = () => {
    const { data, loading, error } = useSelector(state => state.autocomplete);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAutocomplete());
    }, [dispatch]);

    if(loading) return <div>로딩중..</div>;
    if(error) return <div>에러발생!</div>;
    if(!data) return null;
    return (
        <Autocomplete autocomplete={data} />
    );
};

export default AutocompleteContainer;