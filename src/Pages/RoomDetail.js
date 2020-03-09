import React from "react";
import styled from "styled-components";
import RoomHeader from "Components/Detail/Header/RoomHeader";
import ContactModal from "Components/Detail/Header/ContactModal";
import Layout from "Components/Layout/Layout";

const RoomDetail = () => {
  return (
    <Layout>
      <Div>
        <RoomHeader />
        <ContactModal />
      </Div>
    </Layout>
  );
};

export default RoomDetail;

const Div = styled.div`
  width: 100%;
`;
