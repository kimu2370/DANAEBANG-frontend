/*global kakao*/
import React, { Component } from "react";
import styled from "styled-components";

class MapContent extends Component {
  constructor() {
    super();
    this.state = {
      clusterData: [], //클러스터 눌렀을 때 들어오는 데이터
      lat: 37.506502,
      lng: 127.053617,
      roomlength: 0
    };
  }
  componentDidMount() {
    kakao.maps.load(() => {
      this.mapSide();
    });
  }
  mapSide = () => {
    let container = document.getElementById("Mymap");
    let options = {
      center: new kakao.maps.LatLng(this.state.lat, this.state.lng),
      level: 5,
      minLevel: 2,
      maxLevel: 7
    };
    //map
    this.map = new kakao.maps.Map(container, options);
    // map drag시 변경되는 중심좌표
    kakao.maps.event.addListener(this.map, "dragend", () => {
      // 지도 중심좌표를 얻어오기
      const latlng = this.map.getCenter();
      this.setState({
        lat: latlng.getLat(),
        lng: latlng.getLng()
      });
      this.clusterer.clear();
      this.getRooms(this.clusterer);
    });

    //clusterer
    this.clusterer = new kakao.maps.MarkerClusterer({
      map: this.map,
      averageCenter: true,
      minLevel: 3,
      gridSize: 200,
      disableClickZoom: true
    });
    this.getRooms(this.clusterer);
  };

  getRooms = clusterer => {
    fetch(
      `http://52.78.11.154:8000/room/map?latitude=${this.state.lat}&longitude=${this.state.lng}&zoom=1&multi_room_type=1&multi_room_type=2&multi_room_type=3&selling_type=1&selling_type=2&room_size=0&room_size=50&maintenance_price=0&maintenance_price=10&deposit_range=0&deposit_range=20000&fee_range=0&fee_range=200`,
      { method: "GET" }
    )
      .then(res => res.json())
      .then(res => {
        const markers = [];
        res.results.forEach(el => {
          //마커 생성
          const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(el.latitude, el.longitude),
            clickable: true
          });
          marker.id = el.room_id;
          markers.push(marker);
          this.setState({
            roomlength: markers.length
          });
          //오버레이관련함수
          this.overlayContents = () => {
            fetch(
              `http://52.78.11.154:8000/room/click?offset=1&limit=24&room_id=${marker.id}`,
              { method: "GET" }
            )
              .then(res => res.json())
              .then(res => {
                //커스텀 오버레이 옵션
                const overlay = new kakao.maps.CustomOverlay({
                  position: marker.getPosition(),
                  yAnchor: 1.27
                });
                //네이티브DOM으로 커스텀오버레이생성
                const content = document.createElement("div");
                content.style.cssText =
                  "width:160px;padding:20px 0 7px;font-size:15px;background-color:#fff;border-radius:5px;box-shadow:0 1px 5px 0 rgba(0,0,0,0.4);position:relative";
                //title
                const titleWrap = document.createElement("div");
                titleWrap.style.cssText = "margin:4px 0 0 10px;";
                const title = document.createElement("span");
                title.innerText = res.results[0].trade_type_str
                  ? res.results[0].trade_type_str
                  : res.results[0].monthly_type_str;
                title.style.cssText = "margin-right:5px";
                const price = document.createElement("span");
                price.innerText = res.results[0].trade_deposit
                  ? res.results[0].trade_deposit
                  : res.results[0].monthly_deposit;
                titleWrap.appendChild(title);
                titleWrap.appendChild(price);
                //상세
                const detail = document.createElement("div");
                detail.style.cssText =
                  "margin:3px 0 0 10px;font-size:12px; color:#666;";
                const floor = document.createElement("span");
                floor.innerText = res.results[0].floor_str;
                floor.style.cssText = "margin-right:5px;";
                const size = document.createElement("span");
                size.innerText = res.results[0].room_size;
                detail.appendChild(floor);
                detail.appendChild(size);

                //오버레이 내의 이미지
                const img = document.createElement("img");
                img.src = res.results[0].image_url;
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
                overlay.setMap(this.map);
              });
          };
          // 마커클릭이벤트(오버레이띄우기)
          kakao.maps.event.addListener(marker, "click", this.overlayContents);
        });

        clusterer.addMarkers(markers);
        // 클러스터러 클릭이벤트
        kakao.maps.event.addListener(clusterer, "clusterclick", cluster => {
          const markerInfo = cluster.getMarkers();
          let markerArray = [];
          for (var idx = 0; idx < markerInfo && markerInfo.length; idx++) {
            markerArray.push(markerInfo[idx].getPosition());
          }
          // const leng = markerArray.length;
          // console.log("array", markerArray);
          this.setState({
            clusterData: markerArray
          });
          // map 줌인
          this.map.setLevel(this.map.getLevel() - 1);
          this.map.setCenter(cluster.getCenter());
        });
      });

    this.toParents = () => {
      this.props.mapdatafromparents(
        this.state.lat,
        this.state.lng,
        this.state.roomlength,
        this.state.clusterData
      );
    };
    this.toParents();
  };

  render() {
    return <MapContents id="Mymap"></MapContents>;
  }
}

const MapContents = styled.div`
  width: 100%;
  height: 100vh;
`;

export default MapContent;
