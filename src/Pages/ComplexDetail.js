import React, { useState, useEffect } from "react";
import axios from "axios";
import { COMPLEX_DETAIL_URL } from "Config";

import Layout from "Components/Layout/Layout";
import ComplexHeader from "Components/Detail/Header/ComplexHeader";
import ComplexTable from "Components/Detail/Detail/ComplexTable";
import ImageView from "Components/Detail/ImageView/ImageView";
import ImgViewModal from "Components/Detail/ImageView/ImgViewModal";
import Nav from "Components/Detail/Nav/ComplexNav";
// import DetailContainer from "Components/Detail/Nav/DetailContainer";
import ComplexPrice from "Components/Detail/Price/ComplexPrice";
import Space from "Components/Detail/Space/Space";
import Location from "Components/Detail/Location";

const ComplexDetail = props => {
  const [info, setInfo] = useState({});
  // console.log();
  useEffect(() => {
    axios
      .get(`${COMPLEX_DETAIL_URL}&id=${props.match.params.id}`)
      .then(res => setInfo(res.data.complex_detail));
  }, [props.match.params.id]);

  // info => 단지 거래 상세 정보
  return (
    <Layout>
      {info.image_urls && (
        <>
          <ComplexHeader info={info} />
          <ComplexTable info={info} />
          <ImageView imgUrl={info.image_urls} />
          <ImgViewModal imgUrl={info.image_urls} />
          <Nav />
          <div>
            <ComplexPrice
              build_cov_ratio={info.build_cov_ratio}
              floor_area_index={info.floor_area_index}
            />
            <Space info={info} />
          </div>
          <Location />
        </>
      )}
    </Layout>
  );
};

export default ComplexDetail;
