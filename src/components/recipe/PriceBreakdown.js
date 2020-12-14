import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";
import { color, size, media } from "../../styles";

const PbTemplate = styled.div`
  margin-top: 16px;
  ${media.lg`width: calc(50% - 8px);`}
  .header {
    font-size: ${size.font.md};
    font-weight: bold;
  }
  .chart {
    position: relative;
    padding: 16px;
    svg {
      overflow: visible;
      path {
      }
    }
    .chartInside {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 50%;
      top: 25%;
      left: 25%;
      h4 {
        font-weight: bold;
        font-size: ${size.font.lg};
        color: #f6f8fc;
        text-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
      }
      .cost {
        margin-top: 8px;
        font-weight: bold;
        font-size: ${size.font.md};
        color: ${color.gray[7]};
      }
    }
  }
`;

const segStyle = {
  filter: "drop-shadow(1px 1px 1px #d8dade) drop-shadow(-1px -1px 1px #ffffff)",
};

const PriceBreakdown = ({ pb }) => {
  console.log(pb.ingredients);
  const chartData = pb.ingredients.map((item) => ({
    title: item.name,
    value: item.price,
    color: "#F6F8FC",
  }));
  return (
    <PbTemplate>
      <div className="header">Price Breakdown</div>
      <div className="chart">
        <PieChart
          data={chartData}
          lineWidth={30}
          paddingAngle={8}
          segmentsStyle={segStyle}
          animate
        />
        <div className="chartInside">
          <h4>TOTAL COST</h4>
          <div className="cost">$ {pb.totalCost}</div>
        </div>
      </div>
    </PbTemplate>
  );
};

export default PriceBreakdown;
