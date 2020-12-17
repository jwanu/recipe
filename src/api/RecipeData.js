import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import BasicInfo from '../components/recipe/BasicInfo';
import Equipments from '../components/recipe/Equipments';
import PriceBreakdown from '../components/recipe/PriceBreakdown';
import Instructions from '../components/recipe/Instructions';

const apiKey = process.env.REACT_APP_API_KEY.replace(';', '');

const getDetailData = async ({ id }) => {
  const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`);
  return res.data;
};

const getEquipsData = async ({ id }) => {
  const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/equipmentWidget.json?apiKey=${apiKey}`);
  return res.data;
};
const getPbData = async ({ id }) => {
  const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json?apiKey=${apiKey}`);
  return res.data;
};
const getInstData = async ({ id }) => {
  const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`);
  return res.data;
};


export const RecipeDetailData = ({ id }) => {
  const { data, error, isLoading } = useAsync({ promiseFn: getDetailData, id, watch: id });
  if (isLoading) return <BasicInfo loading />;
  if (error) return <div className="exception">Something went wrong</div>;
  if (data) return (<BasicInfo detail={data} />);
  return null;
};

export const RecipeEquipmentData = ({ id }) => {
  const { data, error, isLoading } = useAsync({ promiseFn: getEquipsData, id, watch: id });
  if (isLoading) return <Equipments loading />;
  if (error) return <div className="exception">Something went wrong</div>;
  if (data) return <Equipments equip={data.equipment} />;
  return null;
};

export const RecipePbData = ({ id }) => {
  const { data, error, isLoading } = useAsync({ promiseFn: getPbData, id, watch: id });
  if (isLoading) return <PriceBreakdown loading />;
  if (error) return <div className="exception">Something went wrong</div>;
  if (data) return <PriceBreakdown pb={data} />;
  return null;
};

export const RecipeInstructionData = ({ id }) => {
  const { data, error, isLoading } = useAsync({ promiseFn: getInstData, id, watch: id });
  if (isLoading) return <Instructions loading />;
  if (error) return <div className="exception">Something went wrong</div>;
  if (data) return <Instructions inst={data} />;
  return null;
};