/*global kakao*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { NEAR_INFO_URL } from "Config";

import subway from "Components/Detail/Images/subway.png";
import store from "Components/Detail/Images/store.png";
import mart from "Components/Detail/Images/mart.png";
import bank from "Components/Detail/Images/bank.png";
import pharmacy from "Components/Detail/Images/pharmacy.png";
import police from "Components/Detail/Images/police.png";
import cctv from "Components/Detail/Images/cctv.png";
// `${NEAR_INFO_URL}?latitude=37.505776&longitude=127.052472`;
const imgs = {
  subway: subway,
  store: store,
  mart: mart,
  bank: bank,
  pharmacy: pharmacy,
  police: police,
  cctv: cctv
};
const lat = 37.505776,
  lng = 127.052472;

const Location = () => {
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  useEffect(() => {
    axios
      .get(`${NEAR_INFO_URL}?latitude=${lat}&longitude=${lng}`)
      .then(res => mapLoad(res.data.results));

    const mapLoad = mapInfo => {
      console.log(mapInfo.convenience.subway);
      kakao.maps.load(() => {
        //파라미터로 autoload=false를 줘서 v3이 모두 로드된 후, 이 콜백함수가 실행된다.
        //"https://www.dabangapp.com/static/media/complex.6334bc71.svg"
        let el = document.getElementById("map");
        let imageSrc = imgs.subway,
          imageSize = new kakao.maps.Size(45, 45);
        let testSrc =
          "https://www.dabangapp.com/static/media/complex.6334bc71.svg";
        let testImageSize = new kakao.maps.Size(70, 70);
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        let testMarkerImage = new kakao.maps.MarkerImage(
          testSrc,
          testImageSize
        );
        // let markerPosition = new kakao.maps.LatLng(lat, lng);
        // let test = new kakao.
        let testArr = [];
        for (let i = 0; i < mapInfo.convenience.subway.length; i++) {
          testArr.push(
            new kakao.maps.LatLng(
              mapInfo.convenience.subway[i].position[0],
              mapInfo.convenience.subway[i].position[1]
            )
          );
        }
        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.LatLng(lat, lng),
          level: 3
        });
        let testMarker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(lat, lng),
          image: testMarkerImage
        });
        for (let i = 0; i < mapInfo.convenience.subway.length; i++) {
          let marker = new kakao.maps.Marker({
            map: map, //마커를 표시할 지도
            position: testArr[i], // 마커를 표시할 위치
            image: markerImage //마커 이미지
          });
          testMarker.setMap(map);
          marker.setMap(map);
          // createSubwayMarkers(mapInfo, map);
        }
      });
    };
  }, []);

  // const getMarkerPostions = mapInfo => {
  //   let subwayPostions = mapInfo["convenience"]["subway"].map(item => {
  //     return new kakao.maps.LatLng(
  //       Number(item.position[0]),
  //       Number(item.position[1])
  //     );
  //   });
  //   console.log(subwayPostions);
  //   return subwayPostions;
  // };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // function createSubwayMarkers(mapInfo, map) {
  //   return getMarkerPostions(mapInfo).map((item, i) => {
  //     let imageSrc = imgs[subway];
  //     let imageSize = new kakao.maps.Size(40, 40);
  //     let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
  //     let marker = new kakao.maps.Marker({
  //       postion: item[i],
  //       image: markerImage
  //     });
  //     marker.setMap(map);
  //   });
  // }

  return (
    <Block>
      <Box>
        <Title>위치 및 주변 시설</Title>
        <Address>서울특별시 강남구 테헤란로</Address>
        <NearMap>
          <div id="map"></div>
        </NearMap>
        <BtnWrap>
          <TabWrap>
            <TabBtn
              onClick={() => {
                setClick1(true);
                setClick2(false);
              }}
              active={click1}
            >
              편의시설
            </TabBtn>
            <TabBtn
              onClick={() => {
                setClick2(true);
                setClick1(false);
              }}
              active={click2}
            >
              안전시설
            </TabBtn>
          </TabWrap>
          <CenterWrap>
            {click1 && (
              <>
                <Btn>
                  <Icon iName="subway" />
                  <p>지하철역</p>
                </Btn>
                <Btn>
                  <Icon iName="mart" />
                  <p>마트</p>
                </Btn>
                <Btn>
                  <Icon iName="store" />
                  <p>편의점</p>
                </Btn>
                <Btn>
                  <Icon iName="bank" />
                  <p>은행</p>
                </Btn>
                <Btn>
                  <Icon iName="pharmacy" />
                  <p>약국</p>
                </Btn>
              </>
            )}
            {click2 && (
              <>
                <Btn>
                  <Icon iName="police" />
                  <p>치안</p>
                </Btn>
                <Btn>
                  <Icon iName="cctv" />
                  <p>cctv</p>
                </Btn>
              </>
            )}
          </CenterWrap>
        </BtnWrap>
      </Box>
    </Block>
  );
};

export default Location;
const Block = styled.div`
  width: 100%;
`;

const Box = styled.div`
  width: 1180px;
  position: relative;
  padding-top: 100px;
  padding-bottom: 120px;
  margin: 0px auto;
  border-top: 1px solid rgb(221, 221, 221);
`;

const Title = styled.h1`
  color: rgb(34, 34, 34);
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  line-height: 41px;
  position: relative;
`;

const Address = styled.p`
  height: 23px;
  color: rgb(68, 68, 68);
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  margin: 3px auto 27px;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;
const NearMap = styled.div`
  width: 850px;
  height: 400px;
  position: relative;
  margin: 29px auto 0px;
  & > div {
    width: 850px;
    height: 400px;
  }
`;
const BtnWrap = styled.div`
  position: relative;
`;
const TabWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 850px;
  height: 56px;
  margin: 0px auto;
  border-bottom: 1px solid rgb(216, 216, 216);
`;

const TabBtn = styled.button`
  cursor: pointer;
  height: 52px;
  margin-top: auto;
  color: rgb(136, 136, 136);
  font-size: 16px;
  border-right-style: initial;
  border-left-style: initial;
  border-right-color: initial;
  border-left-color: initial;
  background-color: transparent;
  padding: 0px 50px;
  border-width: 2px 0px;
  border-image: initial;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-radius: 0px;
`;
const CenterWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 70px;
  margin-top: 26px;
`;
const Btn = styled.div`
  cursor: pointer;
  float: left;
  width: 94px;
  height: 70px;
  & > p {
    margin-top: 6px;
    color: rgb(68, 68, 68);
    font-size: 14px;
    text-align: center;
    line-height: 20px;
  }
`;
const Icon = styled.div`
  width: 44px;
  height: 44px;
  margin: 0px auto;
  background: url(${props => imgs[props.iName]}) center center / cover no-repeat
    transparent;
`;
