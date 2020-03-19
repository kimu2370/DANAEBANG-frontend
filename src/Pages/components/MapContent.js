/*global kakao*/
import React, { Component } from "react";
import { roomData } from "../RoomData";
// import { connect } from "react-redux";
// import { showRoomAction } from "Redux/Actions/showRoomAction";
import styled from "styled-components";

class MapContent extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=8262d5e266681d61ca7cf3d4a8eb1242&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Mymap");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7
        };
        //map
        const map = new window.kakao.maps.Map(container, options);

        roomData.map(el => {
          //마커 생성
          this.marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(el.lng, el.lat),
            clickable: true
          });
          //커스텀 오버레이 옵션
          const overlay = new kakao.maps.CustomOverlay({
            map: map,
            position: this.marker.getPosition(),
            yAnchor: 1.5
          });
          //네이티브DOM으로 커스텀오버레이생성
          const content = document.createElement("div");
          content.style.cssText =
            "width:160px;padding:20px 0 7px;font-size:15px;background-color:#fff;border-radius:5px;box-shadow:0 1px 5px 0 rgba(0,0,0,0.4);position:relative";
          //title
          const titleWrap = document.createElement("div");
          titleWrap.style.cssText = "margin:1px 0 0 10px;";
          const title = document.createElement("span");
          title.innerText = el.type;
          title.style.cssText = "margin-right:5px";
          const price = document.createElement("span");
          price.innerText = el.price;
          titleWrap.appendChild(title);
          titleWrap.appendChild(price);
          //상세
          const detail = document.createElement("div");
          detail.style.cssText =
            "margin:3px 0 0 10px;font-size:12px; color:#666;";
          const floor = document.createElement("span");
          floor.innerText = el.floor;
          floor.style.cssText = "margin-right:5px;";
          const size = document.createElement("span");
          size.innerText = el.size;
          detail.appendChild(floor);
          detail.appendChild(size);

          //오버레이 내의 이미지
          const img = document.createElement("img");
          img.src = el.roomImg;
          img.style.cssText =
            "width:160px; height:100px;margin-bottom: 7px; display:block";
          // 닫기 버튼
          const closeBtn = document.createElement("button");
          closeBtn.innerHTML = "X";
          closeBtn.style.cssText =
            "border:none;position:absolute;top:2px;right:1px;";
          closeBtn.onclick = function() {
            overlay.setMap(null);
          };
          content.appendChild(closeBtn);
          content.appendChild(img);
          content.appendChild(detail);
          content.appendChild(titleWrap);

          // contentDOM overlay에 추가
          overlay.setContent(content);
          overlay.setMap(null);
          kakao.maps.event.addListener(this.marker, "click", function() {
            overlay.setMap(map);
          });
        });
      });
    };
  }

  render() {
    return <MapContents id="Mymap"></MapContents>;
  }
}

const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;

export default MapContent;
