import React from "react";
import styled from "styled-components";
import { ReactComponent as IQue } from "Components/Detail/Images/question.svg";

const ComplexDetail = props => {
  const { info } = props;
  return (
    <Box>
      <Table>
        <Row>
          <Th>건물유형</Th>
          <Tr>{info.complex_type}</Tr>
          <Th>건설사</Th>
          <Tr>{info.provider_name}</Tr>
          <Th>난방</Th>
          <Tr>{info.heat_type}</Tr>
          <Th>연료</Th>
          <Tr>{info.fuel_type}</Tr>
        </Row>
        <Row>
          <Th>단지타입</Th>
          <Tr>{info.entrance_type}</Tr>
          <ThExtend>
            <p>용적률</p>
            <IQue />
          </ThExtend>
          <Tr>{info.build_cov_ratio ? info.build_cov_ratio : "-"}</Tr>
          <ThExtend>
            <p>건폐율</p>
            <IQue />
          </ThExtend>
          <Tr>{info.floor_area_index ? info.floor_area_index : "-"}</Tr>
          <Th></Th>
          <Tr></Tr>
        </Row>
      </Table>
    </Box>
  );
};

export default ComplexDetail;

const Box = styled.div`
  width: 1180px;
  position: relative;
  margin: 0px auto;
`;
const Table = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border-top: 1px solid rgb(34, 34, 34);
  border-bottom: 1px solid rgb(235, 235, 235);
`;
const Row = styled.div`
  border-bottom: 1px solid rgba(136, 136, 136, 0.3);
  display: flex;
  > li {
    font-weight: 400;
    height: 50px;
  }
`;
const Th = styled.li`
  width: 100px;
  padding: 15px 0 15px 12px;
  font-size: 14px;
  color: rgb(136, 136, 136);
  background-color: rgb(248, 249, 250);
`;
const ThExtend = styled.li`
  width: 100px;
  padding: 0 0 0 12px;
  font-size: 14px;
  color: rgb(136, 136, 136);
  background-color: rgb(248, 249, 250);
  > p {
    float: left;
    line-height: 45px;
  }
  > svg {
    margin-left: 5px;
    position: relative;
    top: 13.5px;
  }
`;
const Tr = styled.li`
  width: 195px;
  padding: 15px 0px 15px 12px;
  color: rgb(34, 34, 34);
  font-size: 14px;
`;
