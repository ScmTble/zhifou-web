import { defineStore } from 'pinia'

const useCache = defineStore('cache', {
    state: () => {
        const tagsOptions = ref<any[]>([
            {
                label: 'Go Let It Out',
                value: '1'
            },
            {
                label: 'Who Feels Love?',
                value: '2'
            },
            {
                label: 'Sunday Morning Call',
                value: '3',
            },
            {
                label: 'Roll It Over',
                value: '4'
            },
            {
                label: 'Go Let It Out',
                value: '5'
            },
            {
                label: 'Who Feels Love?',
                value: '6'
            },
            {
                label: 'Sunday Morning Call',
                value: '7',
            },
            {
                label: 'Roll It Over',
                value: '8'
            }
        ])
        return {
            tagsOptions
        }
    },
    actions: {
    },
})

export default useCache