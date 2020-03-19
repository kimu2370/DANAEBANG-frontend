import React, { Component } from "react";
import FindRoomTop from "Pages/Findroom/components/FindRoomTop";
import RoomContent from "Pages/Findroom/components/RoomContent";
import MapContent from "Pages/Findroom/components/MapContent";
import Layout from "Components/Layout/Layout";
import styled from "styled-components";

class FindRoom extends Component {
  constructor() {
    super();
    this.state = {
      lat: 37.506502,
      lng: 127.053617,
      roomData: [],
      roomlength: ""
    };
  }

  componentDidMount() {
    this.roomDataFetch();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lat !== this.state.lat || prevState.lng !== this.state.lng) {
      this.setState({
        roomData: []
      });
      this.roomDataFetch();
    }
  }

  roomDataFetch = () => {
    fetch(
      `http://52.78.11.154:8000/room/list?latitude=${this.state.lat}&longitude=${this.state.lng}&zoom=1&offset=1&limit=24&multi_room_type=1&multi_room_type=2&multi_room_type=3&multi_room_type=4&multi_room_type=5&selling_type=1&selling_type=2&selling_type=3&room_size=0&room_size=50&maintenance_price=0&maintenance_price=10&deposit_range=0&deposit_range=20000&fee_range=0&fee_range=200`,
      { method: "GET" }
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          roomData: res.results
        });
      });
  };

  //map과 연결하여 state 관리하는 함수
  parentsData = (lat, lng, roomlength) => {
    this.setState({ lat, lng, roomlength });
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
