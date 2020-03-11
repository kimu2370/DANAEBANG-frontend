import React, { useState } from "react";
import Login from "Components/Login/Login";
import styled from "styled-components";

const Stepper = () => {
  const [step, setstep] = useState(0);

  const componentSteps = [
    {
      title: "로그인 ",
      component: <Login />
    },
    {
      title: "Step 2 "
      //component: <SecondStep />
    },
    {
      title: "Step 3 "
      //component: <ThirdStep />
    }
  ];

  return (
    <>
      <Title>{componentSteps[step].title}</Title>
      {componentSteps[step].component}
      <footer>
        <div>
          {step < componentSteps.length - 1 && (
            <button onClick={() => setstep(step + 1)}>Next</button>
          )}
        </div>
        <div>
          {step > 0 && (
            <button onClick={() => setstep(step - 1)}>Return</button>
          )}
        </div>
      </footer>
    </>
  );
};

export default Stepper;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 20px;
  color: rgb(34, 34, 34);
  font-size: 25px;
  text-align: center;
  line-height: 37px;
  font-weight: 500;
`;
