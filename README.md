# 프로젝트 소개

- 통합 주거 플랫폼(부동산 정보 서비스)인 [다방](https://www.dabangapp.com/) 클론 프로젝트입니다.

## 개발 인원 및 기간

- 개발기간 : 2020/3/9 ~ 2020/3/20
- 개발인원 : 프론트엔드 3명, 백엔드 3명

## 목표

- 부동산 정보서비스인 다방을 클론함으로써 복잡한 데이터 구조를 이해하기.
- 위치를 기반으로 한 다양한 필터링 기능 구현, 소셜 로그인을 활용한 유저 정보 관리를 구현하기.
- 새롭게 알게 된 기술인 Redux, styled components, Highcharts 적용해보기.

## 사용된 기술

- Front-End :
  - JavaScript
  - React
  - Redux
  - styled components
  - HighCharts
- Back-End :
  - Python
  - Django web framework
  - Bcrypt
  - JWT
  - KAKAO / FACEBOOK social login
  - MYSQL
- Deployment :
  - AWS EC2, RDS
  - Docker
  - CORS headers

## 구현 기능

- BackEnd API에 Room ID를 쿼리로 post한 뒤 해당 data를 받아와 상세페이지에 필요한 데이터들을 적절히 가공하여 화면에 랜더링
- Redux를 사용하여 서로 분리된 컴포넌트들 간의 state를 관리.
- HighCharts 라이브러리를 사용하여 실거래가 이루어지는 데이터들을 시각화.
- kakao Map API와 BackEnd API를 제공 받아 반경 2km~3km내 위치한 편의시설 및 치안시설들의 위치를 마커로 표시함.
- React Modal을 사용하여 로그인,약관동의,회원가입페이지 모달적용.
- React Hook인 useContext로 전역(global)hooks 지정하여 단계별 modal(로그인,약관동의,회원가입) 구현하였음.
- React Hook인 useState,useEffect로 전체동의 상태 true/false 조건 구현.
- Styled Components로 GlobalStyle을 적용하여 Layout페이지에 NavBar 컴포넌트 children 적용하였음.
- kakao Map API와 BackEnd의 매물 위치 API 제공 받아 Map center position의 반경 2km내 위치한 매물의 위치를 마커로 표시함.
- kakao Map의 클러스터러 기능을 사용하여 지도가 축소되었을 때 매물 위치마커들을 클러스터링함.
- kakao Map의 오버레이 기능을 사용하여 각각의 마커를 클릭하였을 때 해당 마커에 위치한 매물의 이미지와 간략한 정보 (월세,전세,매매,가격 등)를 띄우고 사용자가 직접 오버레이를 닫을 수 있도록 닫기 버튼을 적용하였음.
- kakao Map을 드래그하여 변경하면 변경이 끝난 시점에 보이는 Map의 영역의 center position을 받아와 BackEnd API refetch하여 매물의 위치를 마커로 표시함.
- kakao Map에서 center position을 받아와 BackEnd 매물 정보 API에 적용, 해당 영역 내의 반경 2km 매물 정보를 RoomList 페이지에 적용(Map의 center position이 변경될 때마다 매물 정보 변경됨)
- RoomList의 매물을 클릭하게 되면 매물의 number형식으로 된 ID를 path로 상세페이지에 넘겨줌.

## 데모영상

[DaNaeBang](https://www.youtube.com/watch?v=-EckvjpZX1c)

## Reference

[Back-End repo address](https://github.com/wecode-bootcamp-korea/DANAEBANG-backend)
