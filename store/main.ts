import { defineStore } from 'pinia'

const useMain = defineStore('main', {
    state: () => {
        const theme = ref("light")
        return {
            currentPath: "/",
            theme
        }
    },
    actions: {
        updatePath(path: string) {
            this.currentPath = path
        },
        updateTheme(theme: boolean) {
            if (theme == true) {
                this.theme = "dark"
            } else {
                this.theme = "light"
            }
        }
    },
})

export default useMain