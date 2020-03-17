import React, { useState, useEffect } from "react";
import Layout from "Components/Layout/Layout";
import axios from "axios";
import ComplexHeader from "Components/Detail/Header/ComplexHeader";
import ComplexTable from "Components/Detail/Detail/ComplexTable";
import ImageView from "Components/Detail/ImageView/ImageView";
import ImgViewModal from "Components/Detail/ImageView/ImgViewModal";
import Nav from "Components/Detail/Nav/ComplexNav";
import DetailContainer from "Components/Detail/Nav/DetailContainer";
import ComplexPrice from "Components/Detail/Price/ComplexPrice";
import Space from "Components/Detail/Space/Space";
import styled from "styled-components";
import { COMPLEX_DETAIL_URL } from "Config";

const ComplexDetail = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    const fetchComplexInfo = async () => {
      const result = await axios.get(
        `${COMPLEX_DETAIL_URL}/room/detail?type=complex&id=510`
      );
      setInfo(result.data.complex_detail);
    };
    fetchComplexInfo();
  }, []);
  return (
    <Layout>
      <Div>
        <ComplexHeader info={info} />
        <ComplexTable info={info} />
        <ImageView info={info.image_urls} />
        <ImgViewModal info={info.image_urls} />
        <Nav></Nav>
        <DetailContainer>
          <ComplexPrice />
          <Space info={info} />
        </DetailContainer>
      </Div>
    </Layout>
  );
};

export default ComplexDetail;

const Div = styled.div`
  width: 100%;
`;
