import {useNavigate} from "react-router-dom";
import Logo from "../component/Logo";
import HouseItem from "../component/HouseItem";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthItemContext } from "../context/AuthItemContext";

const Mypage = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { item } = useContext(AuthItemContext);

    const onChangeData = () => {
        navigate("/changingUserData");
    }

    const onUnregister = () => {
        navigate("/unregister");
    }

    const onClickChat = () => {
        navigate("/chat");
    }

    const onContractList = () => {
        navigate("/contractList");
    }

    const onCreateItem = () => {
        navigate("/createItemPage");
    }

    const onDeleteItem = () => {
        alert("DELETE");
    }

    //const ownItem = registerInfo;
    //const likedItem = registerInfo;
    //const contracts = registerInfo;
    const ownItem = [1];
    const likedItem = [2,3];
    const contracts = [2];

    return (
        <div>
                        <div className = "logo"><Logo /></div>
                        <div className = "title">MY page</div>
                        <div className = "UserData">
                            <div>이름: {user.name}</div>
                            <div>닉네임: {user.nickName}</div>
                            <div>전화번호: {user.phoneNumber}</div>
                            <div>Email: {user.email}</div>
                        </div>
                        <div className = "select">
                            <div className = "title">내 매물</div>
                            {ownItem.map((it) => <HouseItem key = {it} itemId = {it} type = {"OWN"} />)}
                            <button className = "create" onClick = {onCreateItem}>+</button>
                        </div>
                        <div className = "select">
                            <div className = "title">찜한 매물</div>
                            {likedItem.map((it) => <HouseItem key = {it} itemId = {it} />)}
                        </div>
                        <div className = "select">
                            <div className = "title">거래 내역</div>
                            {contracts.map((it) => <HouseItem key = {it} itemId = {it} type = {"CONTRACT"} />)}
                            <button className = "create" onClick = {onContractList}>+</button>
                        </div>
                        <div className = "buttonWrapper">
                            <button className = "button" onClick = {onClickChat}>채팅</button>
                            <button className = "button" onClick = {onChangeData}>정보 변경</button>
                            <button className = "button" onClick = {onUnregister}>회원 탈퇴</button>
                        </div>
    </div>);
};
export default Mypage;
