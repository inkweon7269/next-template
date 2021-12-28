import {observable} from 'mobx'
import {message} from 'antd'
import {postLogin} from "../library/user";
import {LoginUser} from "../pages/auth/login";

const login = async (data: LoginUser, callback) => {
    try {
        const res = await postLogin(data);
        if (res.status === 200 || res.status === 201) {
            user.token = res.data.token;
            localStorage.setItem('asToken', res.data.token);

            callback(true, null, '로그인에 성공했습니다.');
        }
    } catch (e) {
        // message.error(e.response.data.message);
        callback(false, null, e.response.data.message);
    }
}

const logOut = async () => {
    localStorage.clear();
    window.location.href = '/';
}

const user = observable({
    token: typeof window == 'object' ? localStorage.getItem('asToken') ? localStorage.getItem('asToken') : null : null,
    login,
    logOut
})

export default user;