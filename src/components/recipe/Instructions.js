import React from "react";
import styled from "styled-components";
import { color, size } from "../../styles";

const InstructionTemplate = styled.div`
  color: ${color.gray[9]};
  .header {
    font-size: ${size.font.md};
    font-weight: bold;
  }
  .instruction {
    .itemname {
      font-size: ${size.font};
    }
    .step {
      border-bottom: 2px dashed orange;
      .instEquipList {
        .instEquips {
          display: flex;
          flex-wrap: wrap;
          .instEquip {
            & + .instEquip {
              margin-left: 16px;
            }
            &:nth-child(4n + 1) {
              margin-left: 0;
            }
            width: calc(calc(100vw - 80px) / 4);
            margin-top: 8px;
            .image {
              height: calc(calc(100vw - 80px) / 4);
              background: #fff;
              box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
              border-radius: 10px;
              overflow: hidden;
              padding: 8px;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            .name {
              margin-top: 6px;
              font-size: ${size.font.xs};
              text-align: center;
            }
          }
        }
      }
      .instIngredientList {
        .instIngredients {
          display: flex;
          flex-wrap: wrap;
          .instingrdnt {
            & + .instingrdnt {
              margin-left: 16px;
            }
            &:nth-child(4n + 1) {
              margin-left: 0;
            }
            width: calc(calc(100vw - 80px) / 4);
            margin-top: 8px;
            .image {
              height: calc(calc(100vw - 80px) / 4);
              background: #fff;
              box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
              border-radius: 10px;
              overflow: hidden;
              padding: 8px;
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            .name {
              margin-top: 6px;
              font-size: ${size.font.xs};
              text-align: center;
            }
          }
        }
      }
    }
  }
`;

const Instructions = ({ inst }) => {
  return (
    <InstructionTemplate>
      <h3 className="header">Instructions</h3>
      {inst.map((item, idx) => (
        <div className="instruction" key={idx}>
          <div className="itemname">{item.name}</div>
          {item.steps.map((step) => (
            <div className="step" key={step.number}>
              {step.equipment.length > 0 && (
                <div className="instEquipList">
                  <h5>Equipments</h5>
                  <div className="instEquips">
                    {step.equipment.map((equip) => (
                      <div className="instEquip" key={equip.id}>
                        <div className="image">
                          <img
                            src={`https://spoonacular.com/cdn/equipment_100x100/${equip.image}`}
                          />
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
                          <img
                            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingrdnt.image}`}
                          />
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
