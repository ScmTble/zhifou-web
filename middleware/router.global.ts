import useMain from '@/store/main';

export default defineNuxtRouteMiddleware((to) => {
    const main = useMain()
    main.updatePath(to.path)
})
