import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main.vue';
import Archives from '@/components/Archives.vue';
import Clock from '@/components/Clock.vue';
import About from '@/components/About.vue';
import NotFound from '@/components/NotFound.vue';
import Image from '@/components/Image.vue';
import File from '@/components/File.vue';
import Facade from '@/components/Facade.vue';
import Bot from '@/components/Bot.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
    // mode: 'histonry',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/archives',
            component: Archives
        },
        {
            path: '/clock',
            component: Clock
        },
        {
            path: '/image',
            component: Image
        },
        {
            path: '/file',
            component: File
        },
        {
            path: '/facade',
            component: Facade
        },
        {
            path: '/bot',
            component: Bot
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '*',
            component: NotFound
        }
    ]
});
