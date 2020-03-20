import React, { Component } from "react";
import styled from "styled-components";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameCheck: "",
      email: "",
      emailCheck: "",
      password: "",
      re_password: "",
      passwordMatch: "",
      mobileRequest: "",
      auth_code: ""
    };
  }

  //이메일 input handle

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  //이메일 중복검사

  checkEmail = e => {
    e.preventDefault();
    //이메일 type check
    const chkEmail = function(str) {
      let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return regExp.test(str) ? true : false;
    };

    const inputEmail = {
      email: this.state.email
    };
    const email_info = {
      method: "POST",
      body: JSON.stringify(inputEmail),
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (chkEmail(this.state.email) === false) {
      alert("이메일 형식이 유효하지 않습니다");
      this.setState({
        email: ""
      });
    } else {
      fetch("http://10.58.3.222:8000/account/sign-up", email_info)
        .then(res => res.json())
        .then(json => {
          if (json === true) {
            alert("사용가능 한 아이디입니다");
            this.setState({
              emailFormCheck: this.state.email
            });
          } else {
            alert("이미 존재하는 아이디입니다");
          }
        });
    }
  };

  //닉네임 인풋창 핸들링

  handleNickname = e => {
    this.setState({
      name: e.target.value
    });
    console.log(this.state);
  };

  // //닉네임 중복검사
  // checkNickname = e => {
  //   e.preventDefault();
  //   const checkNickname = function(str) {
  //     let regNm = /^[가-힣]{2,15}|[a-zA-Z]{2,15}\s[a-zA-Z]{2,15}$/;
  //     return regNm.test(str) ? true : false;
  //   };
  //   const inputName = {
  //     name: this.state.name
  //   };
  //   const name_info = {
  //     method: "POST",
  //     body: JSON.stringify(inputName),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   };
  //   if (checkNickname(this.state.name) === false) {
  //     alert("한글,영문 대소문자 2~15자리만 사용가능합니다");
  //   } else {
  //     fetch("http://10.58.3.222:8000/account/sign-up", name_info)
  //       .then(res => res.json())
  //       .then(json => {
  //         if (json === true) {
  //           alert("사용가능 한 이름입니다");
  //           this.setState({
  //             emailFormCheck: this.state.email
  //           });
  //         } else {
  //           alert("이미 존재하는 이름입니다");
  //         }
  //       });
  //   }
  // };

  //first password

  handlePW = e => {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  };

  //second password
  handleRE_PW = e => {
    e.preventDefault();
    this.setState({
      re_password: e.target.value
    });
  };

  //password 1st 2nd match check

  checkPW = e => {
    e.preventDefault();

    const chkPwd = function(str) {
      let reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
      return !reg_pwd.test(str) ? false : true;
    };

    if (chkPwd(this.state.re_password) === false) {
      alert("영문,숫자를 혼합하여 6~12자 이내");
      this.setState({
        password: "",
        re_password: ""
      });
    } else {
      if (this.state.password === this.state.re_password) {
        alert("일치합니다.");
        this.setState({
          passwordMatch: this.state.re_password
        });
      } else {
        alert("불일치합니다.");
      }
    }
  };

  //번호 확인
  requestNumber = e => {
    this.setState({
      mobileRequest: e.target.value
    });
  };

  getNumber = e => {
    const phone = {
      phone_number: this.state.mobileRequest
    };
    const phone_info = {
      method: "POST",
      body: JSON.stringify(phone),
      headers: {
        "Content-Type": "application/json"
      }
    };
    // if (this.state.) === false) {
    //   alert("한글,영문 대소문자 2~15자리만 사용가능합니다");
    // } else {
    fetch("http://10.58.2.138:8000/account/auth-mobile", phone_info).then(res =>
      console.log(res)
    );

    // .then(res => {
    //   this.setState({
    //     mobileRequest: res.message
    //   });
    //   console.log(this.state);
    // } else {
    //   alert("이미 존재하는 이름입니다");
    // }
    // });
  };

  checkMatchMobile = e => {
    this.setState({
      auth_code: e.target.value
    });
  };

  sendAuthMobile = e => {
    const number = {
      phone_number: this.state.mobileRequest,
      auth_code: parseInt(this.state.auth_code)
    };
    // const number1 = {
    //   phone_number: this.state.mobileRequest
    // };
    const phone_info = {
      method: "POST",
      body: JSON.stringify(number),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://10.58.2.138:8000/account/mobile-confirm", phone_info)
      .then(res => res.json())
      .then(res => console.log(res));
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      nameCheck,
      email,
      emailCheck,
      password,
      re_password,
      passwordMatch,
      mobileRequest,
      auth_code
    } = this.state;

    const signupInfo = {
      email: this.state.emailCheck,
      password: this.state.passwordCheck,
      name: this.state.name
    };
    const signup_info = {
      method: "POST",
      body: JSON.stringify(signupInfo),
      headers: {
        "Content-Type": "application/json"
      }
    };
    if (
      email &&
      name &&
      password &&
      passwordMatch &&
      email === emailCheck &&
      name === nameCheck &&
      password === re_password &&
      re_password === passwordMatch
    ) {
      fetch("http://10.58.3.222:8000/account/sign-up", signup_info)
        .then(alert("가입이 완료되었습니다."))
        .then(this.props.history.push("/"));
    } else {
      alert("입력값을 확인해주세요");
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <BorderDiv />
        <Body>
          <BodyText>
            <P>이름</P>
            <Input
              type="text"
              onChange={this.handleNickname}
              // onChange={this.checkNickname}
              name="name"
              id="name"
            />
          </BodyText>

          <div style={{ display: "flex" }}>
            <P>이메일</P>
            <EmailInput
              type="email"
              onChange={this.handleEmail}
              // onChange={this.checkEmail}
              value={this.state.email}
            />
            {/* @
            <Select>
              <option value="">선택해주세요.</option>
              <option value="">naver.com</option>
              <option value="">daum.net</option>
              <option value="">hanmail.net</option>
              <option value="">hotmail.com</option>
              <option value="">nate.com</option>
              <option value="">yahoo.co.kr</option>
              <option value="">gmail.com</option>
              <option value="">직접입력</option>
            </Select> */}
          </div>
          <div style={{ display: "flex" }}>
            <p>비밀번호</p>
            <Input
              type="password"
              onChange={this.handlePW}
              value={this.state.password}
            />
          </div>
          <div style={{ display: "flex" }}>
            <P>비밀번호 확인</P>
            <Input
              type="password"
              onChange={this.handleRE_PW}
              //checkPW={this.passwordMatch}
              value={this.state.re_password}
            />
          </div>
          <div style={{ display: "flex" }}>
            <P>휴대폰 번호</P>
            <div>
              <Input type="number" onChange={this.requestNumber} />
              {/* <PhoneSelect>
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>018</option>
                <option>019</option>
              </PhoneSelect> */}
            </div>
            {/* -<PhoneInput />-<PhoneInput /> */}
            <RequireAuthPhoneNum onClick={this.getNumber}>
              인증번호 요청
            </RequireAuthPhoneNum>
          </div>
          <div style={{ display: "flex" }}>
            <AuthPhoneNumInput onChange={this.checkMatchMobile} />
            <RequireAuthPhoneNum onClick={this.sendAuthMobile}>
              인증번호 확인
            </RequireAuthPhoneNum>
          </div>
        </Body>

        <RegisterBtn onClick={this.handleSubmit}>이메일 회원가입</RegisterBtn>
      </>
    );
  }
}

const BorderDiv = styled.div`
  border-top: 1px solid black;
  margin: 10px;
`;

const P = styled.p`
  float: left;
  width: 100px;
  height: 46px;
  color: rgb(34, 34, 34);
  font-size: 15px;
  line-height: 46px;
`;

const Input = styled.input`
  height: 46px;
  color: rgb(68, 68, 68);
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: calc(100% - 100px);
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  outline: none;
  width: 100%;
}
`;
const EmailInput = styled.input`
  height: 46px;
  color: rgb(68, 68, 68);
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: 128px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  outline: none;
`;

const PhoneInput = styled.input`
  height: 46px;
  color: rgb(68, 68, 68);
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: 92px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  outline: none;
`;

const RequireAuthPhoneNum = styled.button`
  float: left;
  width: 120px;
  height: 46px;
  margin-left: 10px;
  color: rgb(21, 100, 249);
  font-size: 14px;
  font-weight: 500;
  background-color: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(49, 133, 248);
  border-image: initial;
`;

const AuthPhoneNumInput = styled.input`
  height: 46px;
  color: rgb(68, 68, 68);
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: 320px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  outline: none;
`;

const RegisterBtn = styled.button`
  width: 100%;
  height: 70px;
  color: rgb(255, 255, 255);
  font-size: 17px;
  font-weight: 500;
  background-color: rgb(26, 90, 232);
  bottom: 0px;
  left: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 0px;
  margin-top: 18px;
`;

const Body = styled.div`
  width: 100%;
`;

const BodyText = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
`;

const Select = styled.select`
  color: rgb(68, 68, 68);
  font-size: 15px;
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: 297px;
  min-width: auto;
  height: 46px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  background: url(/static/media/arrow.f3c02f94.svg) right 15px center / 10px
    no-repeat rgb(255, 255, 255);
  outline: none;
`;

const PhoneSelect = styled.select`
  color: rgb(68, 68, 68);
  font-size: 15px;
  box-sizing: border-box;
  -webkit-appearance: none;
  float: left;
  width: 92px;
  min-width: auto;
  height: 46px;
  padding: 0px 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(208, 210, 214);
  border-image: initial;
  border-radius: 0px;
  background: url(/static/media/arrow.f3c02f94.svg) right 15px center / 10px
    no-repeat rgb(255, 255, 255);
  outline: none;
`;
