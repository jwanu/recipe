import React from 'react';
import styled from 'styled-components';
import { color, size, media } from '../../styles';
import skeleton from '../../styles/skeleton';

const EquipmentsTemplate = styled.div`
  ${media.lg`width: calc(50% - 8px);`}
  ${media.lg`margin-left: 16px;`}
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
      & + .equipment {
        margin-left: 16px;
      }
      &:nth-child(4n + 1) {
        margin-left: 0;
      }
      width: calc(calc(100% - 48px) / 4);
      ${media.lg`width: calc(calc(100% - 48px) / 4);`}
      margin-top: 8px;
      .image {
        height: calc(calc(100vw - 80px) / 4);
        ${media.lg`height: 80px;`}
        ${media.xl`height: calc(calc(872px - 112px) / 8);`}
          background: #fff;
        box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
        border-radius: 10px;
        overflow: hidden;
        padding: 8px;
        ${props => props.loading? skeleton : ''};
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .name {
        margin-top: 6px;
        font-size: ${size.font.xs};
        font-weight: bold;
        text-align: center;
        ${props => props.loading? skeleton : ''};
        &:empty {
          height: ${props => props.loading? size.font.xs : ''};
        }
      }
    }
  }
`;

const Equipments = ({ equip, loading }) => {
  if (loading)
    return (
      <EquipmentsTemplate loading>
        <h3 className="header">Equipments</h3>
        <div className="equipments">
          <div className="equipment">
            <div className="image" />
            <div className="name" />
          </div>
          <div className="equipment">
            <div className="image" />
            <div className="name" />
          </div>
          <div className="equipment">
            <div className="image" />
            <div className="name" />
          </div>
          <div className="equipment">
            <div className="image" />
            <div className="name" />
          </div>
        </div>
      </EquipmentsTemplate>
    );
  return (
    <EquipmentsTemplate>
      <h3 className="header">Equipments</h3>
      <div className="equipments">
        {equip.map((item) => (
          <div className="equipment" key={`equipmentListItem_${item.name}`}>
            <div className="image">
              <img src={`https://spoonacular.com/cdn/equipment_100x100/${item.image}`} alt={item.name}/>
            </div>
            <div className="name">{item.name}</div>
          </div>
        ))}
      </div>
    </EquipmentsTemplate>
  );
};

export default Equipments;
