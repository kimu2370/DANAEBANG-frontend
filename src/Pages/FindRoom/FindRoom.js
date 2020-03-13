import React, { Component } from "react";
import FindRoomTop from "Pages/FindRoom/components/FindRoomTop";
import RoomContent from "Pages/FindRoom/components/RoomContent";
import MapContent from "Pages/FindRoom/components/MapContent";

import styled from "styled-components";

class FindRoom extends Component {
  render() {
    return (
      <div className="FindRoom">
        <FindRoomTop />
        <FindRoomContentWrap>
          <RoomListWrap>
            <RoomList>
              <RoomContent />
            </RoomList>
          </RoomListWrap>
          <MapWrap>
            <MapContent />
          </MapWrap>
        </FindRoomContentWrap>
      </div>
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
`;
const RoomList = styled.div`
  width: 100%;
  height: 100%;
`;
const MapWrap = styled.div`
  width: 40%;
  height: 910px;
`;

export default FindRoom;
