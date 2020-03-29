import React from "react";
import styled from "styled-components";
import { imgOpenModalAction } from "Redux/Actions/imgOpenModalAction";
import { connect } from "react-redux";
import { clearFix } from "Styles/clearFix";
const ImageView = props => {
  const { imgUrl } = props;
  const noImg = "https://www.dabangapp.com/static/media/no_image.91d4ad2d.svg";
  return (
    <Box onClick={() => props.imgOpenModalAction()}>
      <ImgView>
        <BigView src={imgUrl && imgUrl[0]} />
        {imgUrl && imgUrl.length > 1 ? (
          imgUrl.map(
            (item, i) =>
              i > 0 && i < 5 && <SmallView key={i} src={item} noImg={noImg} />
          )
        ) : (
          <>
            <SmallView noImg={noImg} />
            <SmallView noImg={noImg} />
            <SmallView noImg={noImg} />
            <SmallView noImg={noImg} />
          </>
        )}
        {imgUrl && imgUrl.length > 5 && (
          <More>
            <p>전체보기</p>
          </More>
        )}
      </ImgView>
    </Box>
  );
};

export default connect(null, { imgOpenModalAction })(ImageView);

const Box = styled.div`
  width: 1180px;
  position: relative;
  margin: 0px auto;
`;
const ImgView = styled.div`
  width: 1180px;
  height: 420px;
  margin-bottom: 49px;
  position: relative;
  cursor: pointer;
  /* 클리어 속성으로 밑에 내용 따라붙지 않게 하기 */
  ${clearFix}
`;
const BigView = styled.div`
  float: left;
  width: 620px;
  height: 420px;
  background-color: rgb(246, 247, 248);
  position: relative;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  ::before {
    width: 86px;
    height: 86px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${props => props.src || props.noImg}) center center
      no-repeat;
  }
  ::after {
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background: url(${props => props.src}) center center / cover no-repeat;
  }
  ::before,
  ::after {
    content: "";
    display: block;
    position: absolute;
  }
`;
const SmallView = styled.div`
  float: left;
  width: 280px;
  height: 210px;
  background-color: rgb(246, 247, 248);
  position: relative;
  ::before {
    width: 86px;
    height: 86px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${props => props.src || props.noImg}) center center
      no-repeat;
  }
  ::after {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    top: 0px;
    left: 0px;
    border-width: 0px;
    border-style: solid;
    border-color: rgb(217, 218, 220);
    border-image: initial;
    background: url(${props => props.src}) center center / cover no-repeat;
  }
  ::before,
  ::after {
    content: "";
    display: block;
    position: absolute;
  }
`;
const More = styled.div`
  width: 280px;
  height: 210px;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  right: 0px;
  bottom: 0px;
  ::before {
    width: 39px;
    height: 1px;
    background-color: rgb(255, 255, 255);
    top: 91px;
  }
  > p {
    width: 100%;
    color: rgb(255, 255, 255);
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    position: absolute;
    top: 122px;
    left: 0px;
  }
  ::after {
    width: 1px;
    height: 39px;
    background-color: rgb(255, 255, 255);
    top: 72px;
  }
  ::before,
  ::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
