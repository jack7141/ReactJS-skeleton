// API Fetch
import axios from "axios";
import Cookie from "js-cookie";

interface ILoginToken{
    email: string
    password: string
}

const instance = axios.create({
        baseURL: "http://127.0.0.1:8000/api/v1",
        withCredentials: true
});

export const logOut = () => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Authorization': 'Token ' + token,
            'Content-Type': 'application/json'
        }
    };
    return instance.get('/users/logout', config)
        .then(response => {
            // 응답 처리
            localStorage.removeItem('token')
            return response.data;
        })
        .catch(error => {
            // 에러 처리
            console.error(error);
            throw error;
        });
}


export const getUserProfile = () => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Authorization': 'Token ' + token,
            'Content-Type': 'application/json'
        }
    };

    return instance.get('/users/profile', config)
        .then(response => {
            // 응답 처리
            return response.data;
        })
        .catch(error => {
            // 에러 처리
            console.error(error);
            throw error;
        });
};

export interface IUsernameLoginSuccess {
    ok: string;
}
export interface IUsernameLoginError {
    error: string;
}

export async function userLogin({email, password}: ILoginToken) {
    const response = instance.post("/users/login", {email, password})
    const json = await response
    const userToken = json.data.payload.token
    localStorage.setItem('token', userToken);
    const UserItems = instance.get("/users/profile", {headers: {"Authorization": `Token ${userToken}`},})
    return UserItems;
}

export const kakaoLogin = (code: string) =>
    instance
        .post(
            `/users/kakao`,
            { code },
            {
                headers: {
                    "X-CSRFToken": Cookie.get("csrftoken") || "",
                },
            }
        )
        .then((response) => response.status);