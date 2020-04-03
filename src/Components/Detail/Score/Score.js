import React from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";
import { clearFix } from "Styles/clearFix";
HighchartsMore(Highcharts);

const Score = props => {
  const { score } = props;
  const options = {
    chart: {
      polar: true,
      animation: false
    },

    title: {
      text: "가격대비 괜찮은 방!"
    },

    pane: {
      size: "90%"
    },

    xAxis: {
      //   labels: {
      //     allowOverlap: true
      //   },
      categories: ["가격", "관리비", "옵션", "편의시설", "교통"],
      //   tickmarkPlacement: "between",
      lineWidth: 0
    },

    yAxis: {
      gridLineInterpolation: "polygon"
      //   lineWidth: 0,
      //   min: 0,
      //   max: 5,
      //   tickInterval: 1
    },

    tooltip: {
      enabled: false
    },

    legend: {
      enabled: false
    },

    plotOptions: {
      series: {
        animation: false
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: "polygon",
        data: [
          Number(score.price),
          Number(score.maintenance),
          Number(score.option),
          Number(score.near),
          Number(score.traffic)
        ]
      }
    ]
  };
  return (
    <Box>
      <Title>다방면 스코어</Title>
      <ChartWrap>
        <h1>
          {Math.round(
            options.series[0].data.reduce((acc, cur) => acc + cur) / 5
          )}
          <span>점</span>
        </h1>

        <Labels>
          <p>
            <svg width="19" height="23" viewBox="0 0 16 19">
              <path
                fill="#5E90F3"
                fillRule="evenodd"
                d="M7.995.5L.5 4.827v8.655l7.495 4.327 7.495-4.327V4.827z"
              ></path>
            </svg>
            <span>이 방</span>
          </p>
          <p>
            <svg width="19px" height="23px" viewBox="0 0 16 19">
              <path
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeDasharray="1,2,1,2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.995.5L.5 4.827v8.655l7.495 4.327 7.495-4.327V4.827z"
              ></path>
            </svg>
            <span>이 지역 평균</span>
          </p>
        </Labels>
        {score && <HighchartsReact highcharts={Highcharts} options={options} />}
      </ChartWrap>
    </Box>
  );
};

export default Score;

const Box = styled.div`
  width: 1180px;
  position: relative;
  padding-top: 100px;
  padding-bottom: 120px;
  margin: 0px auto;
  border-top: 1px solid rgb(221, 221, 221);
`;
const Title = styled.h1`
  color: rgb(34, 34, 34);
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  line-height: 41px;
`;

const ChartWrap = styled.div`
  padding-top: 30px;
  text-align: center;
  position: relative;
  > h1 {
    color: rgb(21, 100, 249);
    font-size: 28px;
    font-weight: 400;
    line-height: 41px;
  }
  > h1 > span {
    margin-left: 4px;
    color: rgb(102, 102, 102);
    font-size: 17px;
  }
`;
const Labels = styled.div`
  position: absolute;
  top: 146px;
  right: 140px;
  > p {
    float: left;
  }
  > p + p {
    margin-left: 20px;
  }
  > p > span {
    color: rgb(136, 136, 136);
    font-size: 14px;
  }
  > p > svg {
    margin-right: 5px;
    position: relative;
    top: 6px;
  }
  ${clearFix}
`;
