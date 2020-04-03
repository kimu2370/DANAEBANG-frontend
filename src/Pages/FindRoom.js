import React, { Component } from "react";
import styled from "styled-components";
import Layout from "Components/Layout/Layout";
import { FIND_ROOM_URL } from "Config";
import FindRoomTop from "Pages/Findroom/components/FindRoomTop";
import RoomContent from "Pages/Findroom/components/RoomContent";
import MapContent from "Pages/Findroom/components/MapContent";

class FindRoom extends Component {
  constructor() {
    super();
    this.state = {
      lat: 37.506502,
      lng: 127.053617,
      roomData: [],
      roomlength: 0,
      clusterData: []
    };
  }

  componentDidMount() {
    this.roomDataFetch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.lat !== this.state.lat ||
      prevState.lng !== this.state.lng
      // ||
      // prevState.clusterData !== this.state.clusterData
    ) {
      this.setState({
        roomData: []
      });
      this.roomDataFetch();
    }
  }

  roomDataFetch = () => {
    fetch(
      `${FIND_ROOM_URL}?latitude=${this.state.lat}&longitude=${this.state.lng}&zoom=1&offset=1&limit=24&multi_room_type=4&multi_room_type=5&selling_type=1&selling_type=2&selling_type=3&room_size=0&room_size=50&maintenance_price=0&maintenance_price=10&deposit_range=0&deposit_range=20000&fee_range=0&fee_range=200`,
      { method: "GET" }
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          roomData: res.results
        });
      });
  };

  //클러스터 클릭시 data 새로 만들기
  // clusterClick = () => {
  //   const test = [];
  //   for (let i = 0; i < this.state.clusterData.length; i++) {
  //     let c = Number(this.state.clusterData[i].Ga.toFixed(7));
  //     let d = Number(this.state.clusterData[i].Ha.toFixed(8));

  //     for (let j = 0; j < this.state.roomData.length; j++) {
  //       if (
  //         d === this.state.roomData[j].latitude &&
  //         c === this.state.roomData[j].longitude
  //       ) {
  //         test.push(this.state.roomData[j]);
  //         console.log(test);
  //         //        console.log(d === b[j].latitude && c === b[j].longitude)
  //         //        console.log(i, j, d, b[j].latitude, c, b[j].longitude)
  //       }
  //     }
  //   }
  // };

  //map과 연결하여 state 관리하는 함수
  parentsData = (lat, lng, roomlength, clusterData) => {
    this.setState({ lat, lng, roomlength, clusterData });
  };

  render() {
    return (
      <>
        <Layout>
          <FindRoomTop />
          <FindRoomContentWrap>
            <RoomListWrap>
              <RoomList>
                {this.state.roomData && (
                  <RoomContent
                    roomDatafromparents={this.state.roomData}
                    roomlength={this.state.roomlength}
                  />
                )}
              </RoomList>
            </RoomListWrap>
            <MapWrap>
              <MapContent mapdatafromparents={this.parentsData} />
            </MapWrap>
          </FindRoomContentWrap>
        </Layout>
      </>
    );
  }
}

const FindRoomContentWrap = styled.div`
  width: 100%;
  min-width: 1366px;
  display: flex;
`;
const RoomListWrap = styled.div`
  width: 60%;
  height: 100vh;
  overflow-y: scroll;
`;
const RoomList = styled.div`
  width: 100%;
  height: 100%;
`;
const MapWrap = styled.div`
  width: 40%;
  height: 100vh;
`;

export default FindRoom;
