const base_url = import.meta.env.VITE_NUXT_BASE_URL as string
/** 用户登录（完成） */
export const userLogin = (params: NetParams.AuthUserLogin): Promise<NetReq.AuthUserLogin> => {
    return request({
        method: 'post',
        url: '/v1/auth/login',
        data: params,
    });
};

/** 注册用户（完成） */
export const userRegister = (params: NetParams.AuthUserRegister): Promise<NetReq.AuthUserRegister> => {
    return request({
        method: 'post',
        url: '/v1/auth/register',
        data: params,
    });
};

/** 用户信息（完成） */
export const userInfo = (token: NetParams.AuthUserInfo = ""): Promise<NetReq.AuthUserInfo> => {
    return request({
        method: 'get',
        url: '/v1/user/info',
        headers: {
            Authorization: token
        },
    });
};

/** 修改用户密码，该接口暂时未使用 */
export const updateUserPassword = (data: NetParams.AuthUpdateUserPassword): Promise<NetReq.AuthUpdateUserPassword> => {
    return request({
        method: 'post',
        url: '/v1/api/user/password',
        data,
    });
};
