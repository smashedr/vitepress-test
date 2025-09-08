import DefaultTheme from 'vitepress/theme'
import './custom.css'

import VPCard from './components/VPCard.vue'

// import VPSwiper from '@cssnr/vitepress-swiper'
import Contributors from '@cssnr/vitepress-contributors'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('VPCard', VPCard)
        // app.component('VPSwiper', VPSwiper)
        app.component('Contributors', Contributors)
    },
}
