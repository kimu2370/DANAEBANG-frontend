import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { imgCloseModalAction } from "Redux/Actions/imgCloseModalAction";
import { connect } from "react-redux";
import { clearFix } from "Styles/clearFix";
const ImgViewModal = props => {
  const { imgUrl } = props;
  return (
    <Modal show={props.showModal}>
      <Overlay>
        <CloseBtn onClick={() => props.imgCloseModalAction()}>
          <AiOutlineClose size={50} color={"white"} />
        </CloseBtn>
        <Wrap>
          <ThumbnailWrap>
            <SmallLeftBtn>
              <FiChevronLeft size={18} color={"white"} />
            </SmallLeftBtn>
            <ImgList>
              {imgUrl &&
                imgUrl.map((item, i) => (
                  <Item key={i}>
                    <ThumbnailImg src={item} />
                  </Item>
                ))}
            </ImgList>
            <SmallRightBtn>
              <FiChevronRight size={18} color={"white"} />
            </SmallRightBtn>
          </ThumbnailWrap>
          <PhotoWrap>
            <LargeLeftBtn>
              <FiChevronLeft size={40} color={"white"} />
            </LargeLeftBtn>
            <Photo src={imgUrl && imgUrl[0]} />
            <LargeRightBtn>
              <FiChevronRight size={40} color={"white"} />
            </LargeRightBtn>
          </PhotoWrap>
        </Wrap>
      </Overlay>
    </Modal>
  );
};
const mapStateToProps = state => {
  return {
    showModal: state.imgShowModal
  };
};

export default connect(mapStateToProps, { imgCloseModalAction })(ImgViewModal);

const Modal = styled.div`
  display: ${props => (props.show ? "block" : "none")};
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.98);
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 21;
`;
const CloseBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  top: 50px;
  right: 50px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  max-height: 663px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ThumbnailWrap = styled.div`
  width: 100%;
  height: 93px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
`;
const SmallBtn = styled.button`
  cursor: pointer;
  background-color: rgba(34, 34, 34, 0.5);
  position: absolute;
  z-index: 1;
  width: 28px;
  height: 100%;
  top: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
`;
const SmallLeftBtn = styled(SmallBtn)`
  left: 0px;
`;

const ImgList = styled.ul`
  width: 2876px;
  height: 93px;
  position: relative;
  transition: transform 200ms ease 0s;
  ${clearFix}
`;

const Item = styled.li`
  float: left;
  width: 140px;
  height: 93px;
`;
const ThumbnailImg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.src}) center center / cover no-repeat;
  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-bottom: 4px solid rgb(0, 108, 255);
  }
`;

const SmallRightBtn = styled(SmallBtn)`
  right: 0px;
`;

const PhotoWrap = styled.div`
  width: 100%;
  padding-top: 57.2917%;
  position: relative;
`;

const LargeBtn = styled.button`
  cursor: pointer;
  background-color: rgba(34, 34, 34, 0.5);
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
`;

const LargeLeftBtn = styled(LargeBtn)`
  left: 0px;
`;
const LargeRightBtn = styled(LargeBtn)`
  right: 0px;
`;

const Photo = styled.div`
  width: 100%;
  padding-top: 57.2917%;
  position: absolute;
  top: 0px;
  left: 0px;
  background: url(${props => props.src}) center center / contain no-repeat;
`;
