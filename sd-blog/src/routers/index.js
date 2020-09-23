import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main.vue';
import Archives from '@/components/Archives.vue';
import Clock from '@/components/Clock.vue';
import About from '@/components/About.vue';
import NotFound from '@/components/NotFound.vue';
import Image from '@/components/Image.vue';
import File from '@/components/File.vue';

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
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
            path: '/about',
            component: About
        },
        {
            path: '*',
            component: NotFound
        }
    ]
});
