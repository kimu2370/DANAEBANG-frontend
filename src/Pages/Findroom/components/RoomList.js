import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

class Roomlist extends Component {
  constructor() {
    super();
    this.state = {
      roomid: 0
    };
  }
  roomListPath = num => {
    this.setState(
      {
        roomid: num
      },
      () => {
        // console.log(this.state.roomid);
        this.props.history.push("/room/detail/" + this.state.roomid);
      }
    );
  };
  render() {
    return (
      <>
        <RoomList
          key={this.props.room_id}
          onClick={() => this.roomListPath(this.props.id)}
        >
          <RoomImg bg={this.props.roomImg}></RoomImg>
          <RoomTxt>
            <RoomTitle>
              <span>{this.props.type}</span>
              <span>{this.props.price}</span>
              {this.props.month_price !== 0 && (
                <span>/ {this.props.month_price}</span>
              )}
            </RoomTitle>
            <DetailWrap>
              <span>{this.props.floor}</span>
              <span>{this.props.size}</span>
            </DetailWrap>
            <TextWrap>{this.props.title}</TextWrap>
          </RoomTxt>
        </RoomList>
      </>
    );
  }
}

const RoomList = styled.li`
  width: 23%;
  padding: 5px;
  margin-left: 15px;
  margin-bottom: 50px;
  background-color: #fff;
  cursor: pointer;
  float: left;
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  }
`;
const RoomTxt = styled.div`
  width: 100%;
  & span {
    margin-right: 5px;
  }
`;
const RoomImg = styled.div`
  width: 100%;
  height: 145px;
  margin-bottom: 12px;
  border-radius: 3px;
  background-image: url(${props => props.bg});
  background-size: cover;
`;
const RoomTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  & span {
    margin-right: 5px;
  }
`;
const DetailWrap = styled.div``;
const TextWrap = styled.div`
  width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

// export default Roomlist;
export default withRouter(Roomlist);
