import React, { Component, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Agreement1 from "./Agreement1";
import Agreement2 from "./Agreement2";
import Agreement3 from "./Agreement3";
import { FaRegCheckCircle } from "react-icons/fa";
import { FlexDiv } from "Components/Auth/Modal/Style";
import { AppContext } from "Contexts/AppContext";

const ClickBtn = styled(FaRegCheckCircle)`
  width: auto;
  opacity: 0.3;
  height: 21px;
  margin-left: 124px;
  position: absolute;
  left: 239px;
`;
const AllClickBtn = styled(FaRegCheckCircle)`
  width: auto;
  opacity: 0.3;
  height: 21px;
  margin-left: 124px;
  position: absolute;
  left: 132px;
`;

export const Agreement = () => {
  const { setLoginStep, loginStep } = useContext(AppContext);
  const [agreements, setAgreements] = useState({
    firstAgreement: false,
    secondAgreement: false,
    thirdAgreement: false,
    allAgreed: false
  });

  const handleCheckbox = e => {
    switch (e.target.name) {
      case "allAgreed":
        setAgreements({
          ...agreements,
          [e.target.name]: !agreements[e.target.name],
          firstAgreement: !agreements[e.target.name],
          secondAgreement: !agreements[e.target.name],
          thirdAgreement: !agreements[e.target.name]
        });
        break;

      default:
        setAgreements({
          ...agreements,
          [e.target.name]: !agreements[e.target.name]
        });
        break;
    }
  };
  useEffect(() => {
    if (
      agreements.firstAgreement &&
      agreements.secondAgreement &&
      agreements.thirdAgreement
    ) {
      setAgreements({ ...agreements, allAgreed: true });
    } else {
      setAgreements({ ...agreements, allAgreed: false });
    }

    // setAgreements({
    //   ...agreements,
    //   allAgreed:
    //     agreements.firstAgreement &&
    //     agreements.secondAgreement &&
    //     agreements.thirdAgreement
    ///       ? true
    //       : false
    // });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    agreements.firstAgreement,
    agreements.secondAgreement,
    agreements.thirdAgreement
  ]);

  const handleAlert = () => {
    if (!agreements.allAgreed) {
      alert("모든 약관에 동의해주세요!!");
    } else {
      agreements.allAgreed = setLoginStep(2);
    }
  };

  return (
    <>
      <BorderDiv />
      <FlexDiv>
        <p>
          다방 서비스 이용약관 동의<BlueSpan>(필수)</BlueSpan>
        </p>
        <label>
          <Input
            type="checkbox"
            name="firstAgreement"
            checked={agreements.firstAgreement}
            onChange={handleCheckbox}
          />
          {/* <ClickBtn onClick={Clicked} /> */}
        </label>
      </FlexDiv>
      <TextDiv>
        <Agreement1 />
      </TextDiv>
      <FlexDiv>
        <p>
          개인정보 수집 및 이용 동의<BlueSpan>(필수)</BlueSpan>
        </p>
        <Input
          type="checkbox"
          name="secondAgreement"
          checked={agreements.secondAgreement}
          onChange={handleCheckbox}
        />
        {/* <ClickBtn /> */}
      </FlexDiv>
      <TextDiv>
        <Agreement2 />
      </TextDiv>
      <FlexDiv>
        <p>
          마케팅 정보 수신에 대한 동의<BlueSpan>(선택)</BlueSpan>
        </p>
        <Input
          type="checkbox"
          name="thirdAgreement"
          checked={agreements.thirdAgreement}
          onChange={handleCheckbox}
        />
        {/* <ClickBtn /> */}
      </FlexDiv>
      <TextDiv>
        <Agreement3 />
      </TextDiv>
      <div>
        <AllAgreeBtn>모두 동의 합니다</AllAgreeBtn>
        <AllAgreeInput
          type="checkbox"
          name="allAgreed"
          checked={agreements.allAgreed}
          onChange={handleCheckbox}
        />
        {/* <AllClickBtn /> */}
      </div>
      <ConfirmBtn onClick={(() => setLoginStep(2), handleAlert)}>
        확인
      </ConfirmBtn>
    </>
  );
};

const BorderDiv = styled.div`
  border-top: 1px solid black;
  margin: 10px;
`;

const BlueSpan = styled.span`
  color: blue;
`;

const TextDiv = styled.div`
  width: 100%;
  height: 120px;
  white-space: pre-wrap;
  background-color: rgb(244, 244, 244);
  padding: 15px 0px 15px 15px;
  overflow: hidden;
  font-size: 13px;
  overflow-y: scroll;
  margin: 10px 0;
`;

const AllAgreeBtn = styled.button`
  font-size: 100%;
  text-align: center;
  width: 94%;
  font-weight: 700;
`;

const AllAgreeInput = styled.input`
  width: auto;
  opacity: 1;
  height: 21px;
  margin-left: 124px;
  position: absolute;
  left: 132px;
`;

const ConfirmBtn = styled.button`
  width: 100%;
  height: 70px;
  color: rgb(255, 255, 255);
  font-size: 17px;
  font-weight: 500;
  background-color: rgb(26, 90, 232);
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  margin-top: 17px;
`;

const Input = styled.input`
  width: auto;
  opacity: 1;
  height: 21px;
  margin-left: 124px;
  position: absolute;
  left: 239px;
`;
