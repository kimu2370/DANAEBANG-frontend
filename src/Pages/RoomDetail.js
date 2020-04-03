import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ROOM_DETAIL_URL } from "Config";

import Layout from "Components/Layout/Layout";
import RoomHeader from "Components/Detail/Header/RoomHeader";
import ContactModal from "Components/Detail/Header/ContactModal";
import RoomTable from "Components/Detail/Detail/RoomTable";
import ImageView from "Components/Detail/ImageView/ImageView";
import ImageViewModal from "Components/Detail/ImageView/ImgViewModal";
import Memo from "Components/Detail/Memo";
import RoomPrice from "Components/Detail/Price/RoomPrice";
import Location from "Components/Detail/Location";
import Score from "Components/Detail/Score/Score";

const RoomDetail = props => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    axios
      .get(`${ROOM_DETAIL_URL}&id=${props.match.params.id}`)
      .then(res => setInfo(res.data.room_detail));
  }, [props.match.params.id]);
  const history = useHistory();
  const handleUrl = () => {
    history.push(`/complex/detail/${info.complex.complex_id}`);
  };
  console.log(info);
  return (
    <Layout>
      {info.room_type && (
        <div>
          <RoomHeader info={info} />
          <ContactModal info={info} />
          <RoomTable info={info} />
          <ImageView imgUrl={info.image_urls} />
          <ImageViewModal imgUrl={info.image_urls} />
          <Memo info={info} />
          {info.complex && (
            <ComplexBtn onClick={handleUrl}>단지정보 보러가기</ComplexBtn>
          )}
          <RoomPrice info={info} />
          <Location />
          <Score score={info.score} />
        </div>
      )}
    </Layout>
  );
};

export default RoomDetail;
const ComplexBtn = styled.div`
  cursor: pointer;
  display: block;
  width: 320px;
  height: 54px;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  line-height: 54px;
  background-color: rgb(136, 136, 136);
  margin: 20px auto;
`;
