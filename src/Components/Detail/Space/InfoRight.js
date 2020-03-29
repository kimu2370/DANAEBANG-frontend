import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";
import { TRADE_HISTORY_URL } from "Config";
import { clearFix } from "Styles/clearFix";
const InfoRight = props => {
  const [tradeInfo, setTradeInfo] = useState({});
  const [isSell, setSell] = useState(true);
  const [isLease, setLease] = useState(false);
  const [isRent, setRent] = useState(false);
  const [realS, setRealS] = useState([]);
  const [realR, setRealR] = useState([]);
  const [realL, setRealL] = useState([]);
  const [realData, setRealData] = useState([]);

  useEffect(() => {
    const fetchTradeHistory = async () => {
      try {
        const result = await axios.get(
          `${TRADE_HISTORY_URL}?id=${props.pyeongInfo.complex_space_info_id}`
        );
        setTradeInfo(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    props.pyeongInfo instanceof Object &&
      props.pyeongInfo.hasOwnProperty("complex_space_info_id") &&
      fetchTradeHistory();
  }, [props.pyeongInfo]);

  // lease 전세, rent 월세, selling 매매

  //매매
  const getSellingData = () => {
    const [...selling_history] = tradeInfo.selling_history;
    const data = [];
    selling_history.map(item => {
      return data.push([
        new Date(
          item.date.slice(0, 4) + "." + item.date.slice(4) + ".01"
        ).getTime(),
        Number((item.average_deposit / 10000).toFixed(1))
      ]);
    });
    return data;
  };
  //전세
  const getLeaseData = () => {
    const [...lease_history] = tradeInfo.lease_history;
    const data = [];
    lease_history.map(item => {
      return data.push([
        new Date(
          item.date.slice(0, 4) + "." + item.date.slice(4) + ".01"
        ).getTime(),
        Number((item.average_deposit / 10000).toFixed(1))
      ]);
    });
    return data;
  };

  const getRentData = () => {
    const [...rent_history] = tradeInfo.rent_history;
    const data = [];
    rent_history.map(item => {
      return data.push([
        new Date(
          item.histories[0].date.slice(0, 4) +
            "." +
            item.histories[0].date.slice(4) +
            "." +
            "01"
        ).getTime(),
        Number((item.histories[0].deposit / 10000).toFixed(1))
      ]);
    });
    return data;
  };

  // const getRealData = data => {
  //   console.log(data);
  //   function setRealData() {}
  // };

  //chart options
  //options.js파일 만들어서 따로 관리하는게 가독성이 좋다
  const options = {
    chart: {
      width: 424,
      height: 280
    },
    plotOptions: {
      series: {
        showInLegend: false,
        type: "line",
        marker: {
          enabled: true
        },
        point: {
          events: {
            mouseOver: function() {
              let curIndex = this.index;
              let data = [];
              if (isSell) {
                setRealS(tradeInfo.selling_history);
                data = realS.filter((item, i) => i === curIndex);
              } else if (isRent) {
                setRealR(tradeInfo.rent_history);
                data = realR.filter((item, i) => i === curIndex);
              } else if (isLease) {
                setRealL(tradeInfo.lease_history);
                data = realL.filter((item, i) => i === curIndex);
              }
              setRealData(data);
            }
          }
        }
      }
    },
    title: {
      text: ""
    },
    colors: ["rgb(135, 232, 198)", "rgb(50, 137, 255)"],
    tooltip: {
      pointFormat: "",
      shared: true,
      formatter: function() {
        let curIndex = this.points[0].point.index;

        let rentNum = tradeInfo.rent_history.filter(
          (item, i) => i === curIndex && item.histories[0].price
        );
        let year = new Date(this.x).getFullYear();
        let month = new Date(this.x).getMonth();
        return `<b>날짜: ${year}년 ${month + 1}월</b> <br/> <b>금액: ${
          this.y
        }억</b> <br/>
        <b>${isRent ? "월세 " + rentNum[0].histories[0].price : ""}</b>`;
      }
    },
    credits: {
      enabled: false
    },
    xAxis: {
      title: {
        text: ""
      },

      type: "datetime",
      labels: {
        style: {
          fontSize: "14px",
          color: "black"
        },
        formatter: function() {
          let year = String(new Date(this.value).getFullYear()).slice(2);
          let month = new Date(this.value).getMonth();
          return `${year}년 ${month + 1}월`;
        },
        rotation: -10
      },
      crosshair: {
        width: 2,
        color: "rgba(0,0,0,0.3)"
      }
    },
    yAxis: {
      title: {
        text: ""
      },
      labels: {
        format: "{value}억",
        style: {
          fontSize: "15px"
        }
      }
    },
    series: [
      {
        type: "line",
        data:
          tradeInfo.hasOwnProperty("rent_history") && isSell
            ? getSellingData()
            : isLease
            ? getLeaseData()
            : isRent && getRentData()
      }
    ]
  };
  // console.log(
  //   realData[0] instanceof Object &&
  //     realData[0].hasOwnProperty("date") &&
  //     realData[0].histories
  // );
  return (
    <>
      {props.pyeongInfo && (
        <Box>
          <Header>실거래 시세</Header>
          <Wrap>
            <Text>면적</Text>
            <SpaceInfoWrap>
              <SpaceName>{props.pyeongInfo.pyeong_type}</SpaceName>
              <BtnWrap>
                <Btn
                  onClick={() => {
                    setSell(true);
                    isLease && setLease(false);
                    isRent && setRent(false);
                  }}
                  active={isSell}
                >
                  매매
                </Btn>
                <Btn
                  onClick={() => {
                    setLease(true);
                    isSell && setSell(false);
                    isRent && setRent(false);
                  }}
                  active={isLease}
                >
                  전세
                </Btn>
                <Btn
                  onClick={() => {
                    setRent(true);
                    isSell && setSell(false);
                    isLease && setLease(false);
                  }}
                  active={isRent}
                >
                  월세
                </Btn>
              </BtnWrap>
            </SpaceInfoWrap>
            {tradeInfo.rent_history && tradeInfo.rent_history.length === 0 ? (
              <NoChart>
                <p>최근 1년간 실제 거래된 기록이 없습니다. </p>
              </NoChart>
            ) : (
              <>
                <HighchartsReact highcharts={Highcharts} options={options} />
                <ChartWrap>
                  <ChartTooltip>
                    <ChartDate></ChartDate>
                    <PriceWrap>
                      <li>
                        <PriceText>실거래가</PriceText>
                        <PriceValue>
                          {isRent &&
                          realData[0] instanceof Object &&
                          realData[0].hasOwnProperty("date")
                            ? realData[0].histories[0].deposit / 10000 + "억"
                            : (isLease || isSell) &&
                              realData[0] instanceof Object &&
                              realData[0].hasOwnProperty("date")
                            ? realData[0].average_deposit / 10000 + "억"
                            : "-"}
                        </PriceValue>
                      </li>
                      <li>
                        <PriceText>실거래건수</PriceText>
                        <PriceValue>
                          {isSell
                            ? realData[0] instanceof Object &&
                              realData[0].hasOwnProperty("date") &&
                              realData[0].selling_count
                            : isLease
                            ? realData[0] instanceof Object &&
                              realData[0].hasOwnProperty("date") &&
                              realData[0].lease_count
                            : isRent
                            ? realData[0] instanceof Object &&
                              realData[0].hasOwnProperty("date") &&
                              realData[0].rent_count
                            : "-"}
                        </PriceValue>
                      </li>
                    </PriceWrap>
                  </ChartTooltip>
                  <History>
                    <HistoryTitle>
                      <p>실거래가 히스토리</p>
                      <div>
                        {isSell ? (
                          <span>
                            {realData[0] instanceof Object &&
                            realData[0].hasOwnProperty("date")
                              ? "매매" + realData[0].histories.length + "건"
                              : "매매0건"}
                          </span>
                        ) : isLease ? (
                          <span>
                            {realData[0] instanceof Object &&
                            realData[0].hasOwnProperty("date")
                              ? "전세" + realData[0].histories.length + "건"
                              : "전세0건"}
                          </span>
                        ) : (
                          isRent && (
                            <span>
                              {realData[0] instanceof Object &&
                              realData[0].hasOwnProperty("date")
                                ? "월세" + realData[0].histories.length + "건"
                                : "월세0건"}
                            </span>
                          )
                        )}
                      </div>
                    </HistoryTitle>
                    <Table>
                      <colgroup>
                        <col width="112px" />
                        <col width="132px" />
                        <col width="78px" />
                        <col width="102px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>거래년월</th>
                          <th>거래금액</th>
                          <th>층수</th>
                          <th>거래종류</th>
                        </tr>
                      </thead>
                      <tbody>
                        {realData[0] instanceof Object &&
                          realData[0].hasOwnProperty("date") &&
                          realData[0].histories.map((item, i) => {
                            return isRent ? (
                              <tr key={i}>
                                <td>{item.date}</td>
                                <td className="Price">
                                  {item.deposit / 10000 + "억"}
                                  {item.price && " / " + item.price}
                                </td>
                                <td>{item.floor}</td>
                                <td>{item.type}</td>
                              </tr>
                            ) : (
                              <tr>
                                <td>{item.date}</td>
                                <td className="Price">
                                  {item.deposit / 10000 + "억"}
                                </td>
                                <td>{item.floor}</td>
                                <td>{item.type}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
                    <MoreHistory>실거래 히스토리 보기</MoreHistory>
                  </History>
                </ChartWrap>
              </>
            )}
          </Wrap>
        </Box>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    pyeongInfo: state.selectPyeong.pyeongInfo
  };
};

export default connect(mapStateToProps)(InfoRight);

const Box = styled.div`
  float: left;
  width: 464px;
  height: 853px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(229, 229, 229);
  border-image: initial;
  border-radius: 4px 0px 0px 4px;
  ${clearFix}
`;

const Header = styled.div`
  width: 100%;
  height: 54px;
  color: rgb(34, 34, 34);
  font-size: 16px;
  font-weight: 700;
  line-height: 54px;
  text-align: left;
  padding-left: 20px;
  border-bottom: 1px solid rgb(228, 228, 228);
`;

const Wrap = styled.div`
  width: 100%;
  padding: 25px 20px 20px;
`;
const Text = styled.p`
  font-size: 13px;
  line-height: 19px;
  color: rgb(34, 34, 34);
`;

const SpaceInfoWrap = styled.div`
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;
const SpaceName = styled.p`
  float: left;
  height: 33px;
  line-height: 33px;
  font-size: 22px;
  font-weight: 500;
  color: rgb(34, 34, 34);
`;
const BtnWrap = styled.div`
  float: right;
  height: 34px;
  text-align: right;
`;
const Btn = styled.button`
  width: 72px;
  height: 34px;
  font-size: 13px;
  float: left;
  ${props =>
    props.active
      ? `line-height: 32px;
        color: rgb(34, 34, 34);
        background-color: rgb(255, 255, 255);
        font-weight: 500;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(34, 34, 34);
        border-image: initial;`
      : `line-height: 34px;
          color: rgb(102, 102, 102);
          background-color: rgb(250, 250, 250);
          font-weight: 400;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(221, 221, 221);
          border-image: initial;`}
`;
const ChartWrap = styled.div`
  width: 100%;
`;
const ChartTooltip = styled.div`
  margin-top: -6px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  padding: 27px 6px;
  border-top: 1px solid rgb(187, 187, 187);
  border-bottom: 1px solid rgb(228, 228, 228);
  ${clearFix}
`;
const ChartDate = styled.p`
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: rgb(50, 108, 249);
  margin-bottom: 12px;
`;
const PriceWrap = styled.ul`
  width: 100%;
  > li {
    width: 50%;
    height: 52px;
    float: left;
    text-align: center;
  }
  > li + li {
    border-left: 1px solid rgb(216, 216, 216);
  }
  ${clearFix}
`;
const PriceText = styled.p`
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  color: rgb(136, 136, 136);
  margin-bottom: 2px;
`;
const PriceValue = styled.p`
  height: 36px;
  line-height: 36px;
  font-size: 24px;
  font-weight: 700;
  color: rgb(34, 34, 34);
`;
const History = styled.div`
  position: relative;
  width: 100%;
  height: 265px;
  overflow: hidden;
`;
const HistoryTitle = styled.div`
  margin-top: 22px;
  margin-bottom: 11px;
  ${clearFix}
  > p {
    float: left;
    height: 22px;
    font-size: 15px;
    font-weight: 700;
    color: rgb(0, 0, 0);
  }
  > div {
    float: right;
    height: 19px;
  }
  > div > span {
    text-align: right;
    height: 19px;
    font-size: 13px;
    color: rgb(170, 170, 170);
  }
  > div > span + span {
    margin-left: 5px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-top: 1px solid rgb(228, 228, 228);
  border-bottom: 1px solid rgb(228, 228, 228);
  > thead > tr > th {
    background-color: rgb(246, 246, 246);
    height: 20px;
    font-size: 14px;
    color: rgb(136, 136, 136);
    font-weight: 400;
    text-align: center;
    padding: 10px 0px 12px;
  }
  tbody > tr > td {
    height: 20px;
    font-size: 14px;
    color: rgb(136, 136, 136);
    text-align: center;
    padding: 11px 0px;
  }
  tbody > tr > td.Price {
    color: rgb(34, 34, 34);
  }
`;

const MoreHistory = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  margin-top: 20px;
  width: 423px;
  height: 48px;
  line-height: 46px;
  background-color: rgb(255, 255, 255);
  font-size: 15px;
  text-align: center;
  color: rgb(50, 108, 249);
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(50, 108, 249);
  border-image: initial;
`;
const NoChart = styled.div`
  width: 100%;
  height: 229px;
  margin-top: 6px;
  background-color: rgb(255, 255, 255);
  position: relative;
  > p {
    color: rgb(187, 187, 187);
    font-size: 14px;
    white-space: nowrap;
    position: absolute;
    bottom: 109px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
