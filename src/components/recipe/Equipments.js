import React from 'react';
import styled from 'styled-components';
import { color, size } from '../../styles';

const EquipmentsTemplate = styled.div`
    margin-top: 16px;
    color: ${color.gray[8]};
    .header { 
      font-size: ${size.font.md};
      font-weight: bold;
      }
    .equipments {
    margin-top: 8px;
      display: flex;
      flex-wrap: wrap;
      .equipment {
        & + .equipment { margin-left: 16px }
        &:nth-child(4n + 1) { margin-left: 0 }
        width: calc(calc(100vw - 80px) / 4);
        margin-top: 8px;
        .image{
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
`;

const Equipments = ({equip}) => {
    return (
        <EquipmentsTemplate>
        <h3 className="header">Equipments</h3>
        <div className="equipments">
          {equip.map(item => (
            <div className="equipment" key={item.name}>
              <div className="image">
                <img src={`https://spoonacular.com/cdn/equipment_100x100/${item.image}`} />
              </div>
              <div className="name">{item.name}</div>
            </div>
          ))}
        </div>
      </EquipmentsTemplate>
    );
};

export default Equipments;