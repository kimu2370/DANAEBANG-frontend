import React, { Component } from "react";
import Layout from "Components/Layout/Layout";
import styled from "styled-components";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SearchbarDiv>
            <p>
              <span>어떤 동네, 어떤 방 </span>에서
            </p>
            <p>살고싶으신가요?</p>
          </SearchbarDiv>

          <div>Hello</div>
        </Layout>
      </div>
    );
  }
}

const SearchbarDiv = styled.div`
  text-align: center;
  width: 100%;
  min-width: 1366px;
  padding-top: 115px;
  padding-bottom: 113px;
`;
