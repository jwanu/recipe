import React from 'react';
import styled from 'styled-components';
import { color, size } from '../../styles';
import skeleton from '../../styles/skeleton';

const InstructionTemplate = styled.div`
  color: ${color.gray[9]};
  .header {
    font-size: ${size.font.md};
    font-weight: bold;
  }
  .instruction {
    margin-top: 16px;
    ${skeleton};
    &:empty { height: 120px;}
    .itemname {
      font-size: ${size.font};
      font-weight: bold;
      text-decoration: underline;
    }
    .step {
      margin-top: 16px;
      padding: 16px;
      border-radius: 20px;
      box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
      .instEquipList {
        margin-top: 8px;
        h5 {
          font-weight: bold;
          font-size: ${size.font.sm};
        }
        .instEquips {
          display: flex;
          flex-wrap: wrap;
          .instEquip {
            margin-top: 8px;
            display: inline-flex;
            align-items: center;
            margin-right: 8px;
            .image {
              width: 32px;
              height: 32px;
              background: #fff;
              box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
              border-radius: 10px;
              overflow: hidden;
              padding: 4px;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            .name {
              margin-left: 8px;
              font-size: ${size.font.xs};
              text-align: center;
            }
          }
        }
      }
      .instIngredientList {
        margin-top: 8px;
        h5 {
          font-weight: bold;
          font-size: ${size.font.sm};
        }
        .instIngredients {
          display: flex;
          flex-wrap: wrap;
          .instingrdnt {
            margin-top: 8px;
            display: inline-flex;
            align-items: center;
            margin-right: 8px;
            .image {
              width: 32px;
              height: 32px;
              background: #fff;
              box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
              border-radius: 10px;
              overflow: hidden;
              padding: 4px;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            .name {
              margin-left: 8px;
              font-size: ${size.font.xs};
              text-align: center;
            }
          }
        }
      }
      .stepNo {
        font-weight: bold;
      }
      .howTo{
        margin-top: 8px;
        font-size: ${size.font.sm};
        line-height: 1.1rem;
      }
    }
  }
`;

const Instructions = ({ inst, loading }) => {
  if (loading) return (
    <InstructionTemplate>
      <h3 className="header">Instructions</h3>
      <div className="instruction" />
      <div className="instruction" />
      <div className="instruction" />
      <div className="instruction" />
    </InstructionTemplate>
  )
  return (
    <InstructionTemplate>
      <h3 className="header">Instructions</h3>
      {inst.map((item, idx) => (
        <div className="instruction" key={`inst${idx}`}>
          <div className="itemname">{item.name}</div>
          {item.steps.map((step) => (
            <div className="step" key={step.number}>
            <div className="stepNo">Step {step.number}</div>
              {step.equipment.length > 0 && (
                <div className="instEquipList">
                  <h5>Equipments</h5>
                  <div className="instEquips">
                    {step.equipment.map((equip) => (
                      <div className="instEquip" key={equip.id}>
                        <div className="image">
                          <img src={`https://spoonacular.com/cdn/equipment_100x100/${equip.image}`} />
                        </div>
                        <div className="name">{equip.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {step.ingredients.length > 0 && (
                <div className="instIngredientList">
                  <h5>Ingredients</h5>
                  <div className="instIngredients">
                    {step.ingredients.map((ingrdnt) => (
                      <div className="instingrdnt" key={ingrdnt.id}>
                        <div className="image">
                          <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingrdnt.image}`} />
                        </div>
                        <div className="name">{ingrdnt.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="howTo">{step.step}</div>
            </div>
          ))}
        </div>
      ))}
    </InstructionTemplate>
  );
};

export default Instructions;
