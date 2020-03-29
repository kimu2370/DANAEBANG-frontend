import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { selectPyeongAction } from "Redux/Actions/selectPyeongAction";

const Spaces = props => {
  const [isMeter, setMeter] = useState(true);
  const [isPyeong, setPyeong] = useState(false);
  const [selectId, setSelectId] = useState(0);
  const checkId = id => {
    if (id === selectId) return true;
    else return false;
  };
  const { info, num } = props;
  useEffect(() => {
    props.selectPyeongAction(num, info && info[selectId]);
  }, [info, num, props, selectId]);

  return (
    <Box>
      <Header>
        <h1>면적</h1>
        <BtnWrap>
          <Btn
            onClick={() => {
              setMeter(true);
              isPyeong && setPyeong(false);
            }}
            active={isMeter}
          >
            ㎡
          </Btn>
          <Btn
            onClick={() => {
              setPyeong(true);
              isMeter && setMeter(false);
            }}
            active={isPyeong}
          >
            평
          </Btn>
        </BtnWrap>
      </Header>
      <List>
        {/* id값을 넘기고 클릭했을 떄 */}
        {info &&
          info.map((item, i) => (
            <Item
              key={i}
              id={i}
              active={checkId(i)}
              onClick={() => {
                setSelectId(i);
              }}
            >
              <p>
                {item.pyeong_type}({/* 평수 계산하기  1㎡ = 0.3025 */}
                {isPyeong
                  ? Math.round(item.room_size * 0.3025) + "평"
                  : item.room_size + "㎡"}
                )
              </p>
            </Item>
          ))}
      </List>
    </Box>
  );
};
//계약면적일때, 공급면적일때

const mapStateToProps = state => {
  // console.log(state);
  return {
    householdNum: state.selectPyeong.householdNum,
    pyeongInfo: state.selectPyeong.pyeongInfo
  };
};

export default connect(mapStateToProps, { selectPyeongAction })(Spaces);

const Box = styled.div`
  width: 200px;
  height: 567px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const Header = styled.div`
  width: 100%;
  height: 54px;
  position: relative;
  > h1 {
    color: rgb(34, 34, 34);
    font-size: 18px;
    font-weight: 400;
    line-height: 54px;
  }
`;

const BtnWrap = styled.div`
  width: 70px;
  height: 28px;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  :nth-child(1) {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    border-right: 0px;
  }
  :nth-child(2) {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-left: 0px;
  }
`;

const Btn = styled.button`
  float: left;
  width: 35px;
  height: 28px;
  color: ${props =>
    props.active ? "rgb(255, 255, 255)" : "rgb(102, 102, 102)"};
  font-size: 12px;
  background-color: ${props =>
    props.active ? "rgb(20, 118, 252)" : "rgb(255, 255, 255)"};
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.active ? "rgb(20, 118, 252)" : "rgb(213, 213, 213)"};
  border-image: initial;
`;

const List = styled.ul`
  width: 200px;
  height: 513px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Item = styled.li`
  cursor: pointer;
  height: 48px;
  border-top: 1px solid rgb(229, 229, 229);
  > p {
    display: block;
    width: 100%;
    color: ${props =>
      props.active ? "rgb(20, 118, 252)" : "rgb(102, 102, 102)"};
    font-size: 15px;
    line-height: 48px;
    outline: none;
  }
`;
