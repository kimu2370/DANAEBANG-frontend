import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ImageCard() {
  const CardImage = [
    {
      id: 1,
      image: "https://www.dabangapp.com/static/media/easy_1.8ea3046f.png",
      category: "월세 + 관리비",
      roomtype: "월 50 이하 원룸"
    },
    {
      id: 2,
      image: "https://www.dabangapp.com/static/media/easy_2.c530a302.png",
      category: "보증금",
      roomtype: "500 이하 원룸"
    },
    {
      id: 3,
      image: "https://www.dabangapp.com/static/media/easy_3.5da2163e.png",
      category: "반려동물",
      roomtype: "가능한 원룸"
    },
    {
      id: 4,
      image: "https://www.dabangapp.com/static/media/easy_4.d1dd22a5.png",
      category: "낭만적인",
      roomtype: "옥탑방 원룸"
    },
    {
      id: 5,
      image: "https://www.dabangapp.com/static/media/easy_5.a6042ff7.png",
      category: "2억 이하",
      roomtype: "전세 투쓰리룸"
    },
    {
      id: 6,
      image: "https://www.dabangapp.com/static/media/easy_6.966df187.png",
      category: "전세자금대출",
      roomtype: "가능한 투쓰리룸"
    },
    {
      id: 7,
      image: "https://www.dabangapp.com/static/media/easy_7.603ba420.png",
      category: "보증금",
      roomtype: "1천이하 오피스텔"
    },
    {
      id: 8,
      image: "https://www.dabangapp.com/static/media/easy_8.afb21d4c.png",
      category: "단기임대",
      roomtype: "가능한 오피스텔"
    },
    {
      id: 9,
      image: "https://www.dabangapp.com/static/media/easy_9.e5873e16.png",
      category: "3억 이하",
      roomtype: "전세 아파트"
    }
  ];

  // function Arrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <SlickArrow
  //       className={className}
  //       style={{ ...style, display: "block", background: "white" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
    //nextArrow: <Arrow />
  };
  return (
    <div>
      <Slider {...settings}>
        {CardImage.map((item, i) => (
          <CardWrapper key={i}>
            <CardView>
              <CardListWrapper>
                <CardItem>
                  <Img src={item.image} alt="" />
                  <TextDiv>
                    <p>{item.category}</p>
                    <p>{item.roomtype}</p>
                  </TextDiv>
                </CardItem>
              </CardListWrapper>
            </CardView>
          </CardWrapper>
        ))}
      </Slider>
    </div>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  height: 172px;
  margin-top: 26px;
  position: relative;
`;

const CardView = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const CardListWrapper = styled.div`
  width: 1777px;
  height: 172px;
  position: relative;
  right: 0px;
  transition: right 300ms ease-out 0s;
`;

const CardItem = styled.div`
  width: 185px;
  height: 172px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
`;

const Img = styled.img`
  width: 100%;
  height: 100px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const TextDiv = styled.div`
  width: 100%;
  height: 72px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 14px;
  border-left: 1px solid rgb(238, 238, 238);
  border-right: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const SlickArrow = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 3px 1px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 56%;
  right: 0px;
  z-index: 1;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 50%;
  /* display: block;
    background: white; */
  /* font-size: 25px; */
  width: 32px;
  height: 30px;
`;
