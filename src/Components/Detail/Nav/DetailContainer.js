import React from "react";
import styled from "styled-components";
const DetailContainer = props => {
  return <Container anyValue>{props.children}</Container>;
};

export default DetailContainer;

const Container = styled.div`
  padding-top: ${props => (props.anyValue ? "0px" : "160px")};
`;
