import { defineStore } from 'pinia';

const useUser = defineStore('user', {
    // 推荐使用 完整类型推断的箭头函数
    state: () => {
        const authModalShow = ref<boolean>(false)
        const authModelTab = ref<string>('signin');
        return {
            authModalShow,
            authModelTab,
            is_admin: false,
            id: "",
            username: '',
            nickname: '',
            avatar: "",
            phone: "",
            status: 0,
        }
    },
    actions: {
        triggerAuth(key: string) {
            this.authModalShow = true;
            this.authModelTab = key;
        },
        changeTab(key: string) {
            this.authModelTab = key;
        },
        hiddenAuth() {
            this.authModalShow = false;
        },
        updateUserAvatar(avatar: string) {
            this.avatar = avatar
        },
        updateUserPhone(phone: string) {
            this.phone = phone
        },
        updateUserinfo(data: any) {
            this.is_admin = data.is_admin
            this.id = data.id
            this.username = data.username
            this.nickname = data.nickname
            this.avatar = data.avatar
            this.phone = data.phone
            this.status = data.status
        },
        userLogout() {
            const cookie = useCookie("Authorization");
            cookie.value = null;
            this.$reset()
        },
    },
    getters: {
        isLogin(state): boolean {
            return state.id != "";
        },
    },
})

export default useUser