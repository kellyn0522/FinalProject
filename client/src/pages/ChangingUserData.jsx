import { useNavigate } from "react-router-dom";
import {useRef, useState, useContext} from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import Logo from "../component/Logo";


const ChangingUserData = () => {
      const { 
        user,
        updaterInfo,
        updateUpdaterInfo,
        updaterUser,
        updateError,
        isUpdateLoading, 
        } = useContext(AuthContext);
/*
        const pwRef = useRef();
        const nickNameRef = useRef();
        const phoneNumRef = useRef();
        const birthRef = useRef();
        const identityNumRef = useRef();
        const zipCodeRef = useRef();
        const addressRef = useRef();

        if (!settedPW) {pwRef.current.focus(); return;
        } else if (!checkedPW) {checkPWRef.current.focus(); return;
        } else if (!userName) {nameRef.current.focus(); return;
        } else if (!userPhoneNum) {telNumRef.current.focus(); return;
        } else if (String(birth).length!==6) {birthRef.current.focus(); return;
        } else if (String(zipCode).length!==5) {zipCodeRef.current.focus(); return;
        } else if (settedPW !== checkedPW) { 
            checkPWRef.current.focus(); 
            alert("비밀번호가 일치하지 않습니다.");
            return;
        } else {          
            onUpdateUser(keyID, settedPW, userName, userPhoneNum, birth, zipCode, email);
            alert("개인정보 변경이 완료되었습니다.");
            navigate("/mypage");
            return;
        };
*/
      return (<>
          <Form onSubmit={updaterUser}>
              <Row style={{
                  height: "100vh",
                  justifyContent: "Center",
                  paddingTop: "10%"
              }}>
                  <Col xs={6}>
                      <Stack gap={3}>
                          <div className = "logo"><Logo /></div>
                          <h2>정보변경</h2>
  
                          <Form.Control 
                            type="text" 
                            placeholder={user.name} 
                            disabled 
                            />
                          <Form.Control 
                            type="email" 
                            placeholder={user.email} 
                            disabled 
                            />
                          <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            maxLength="50"
                            onChange={(e) =>
                                updateUpdaterInfo({ ...updaterInfo, password: e.target.value })
                            } 
                          />
                          <Form.Control
                              type="text"
                              placeholder={user.nickName}
                              maxLength="10"
                              onChange={(e) =>
                                updateUpdaterInfo({ ...updaterInfo, nickName: e.target.value })
                              }
                          />
                           <Form.Control
                              type="tel"
                              placeholder={user.phoneNumber}
                              maxLength="13"
                              onChange={(e) =>
                                updateUpdaterInfo({ ...updaterInfo, phoneNumber: e.target.value })
                              }
                          />
                          <Form.Control 
                            type="text" 
                            placeholder="생년월일" 
                            maxLength="6"
                            onChange={(e) =>
                                updateUpdaterInfo({ ...updaterInfo, birth: e.target.value })
                            } />
                        <Form.Control 
                            type="password" 
                            placeholder="주민등록번호" 
                            maxLength="7"
                            onChange={(e) =>
                                updateUpdaterInfo({ ...updaterInfo, identityNum: e.target.value })
                            } />
                          <Form.Control 
                            type="text" 
                            placeholder="Zipcode" 
                            maxLength="5"
                            onChange={(e) =>
                                updateUpdaterInfo({ ...updaterInfo, zipCode: e.target.value })
                            } />
                            <Form.Control 
                                type="text" 
                                placeholder="House Address" 
                                maxLength="100"
                                onChange={(e) =>
                                    updateUpdaterInfo({ ...updaterInfo, houseAddres: e.target.value })
                                } />
                      
                          <Button variant="primary" type="submit" >
                              { isUpdateLoading? "Updating your account":"정보변경"}
                          </Button>
                          {
                              updateError?.error && <Alert variant="danger">
                              <p>{updateError?.message}</p></Alert>
                          }
                          
                      </Stack>
                  </Col>
              </Row>
          </Form>
      </>);
};
export default ChangingUserData;