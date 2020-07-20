import Vue from 'vue';
import VueRouter from 'vue-router';
import StartNewSession from "../views/StartNewSession";
import ShareLink from "../views/ShareLink";
import SetEntryPin from "../views/SetEntryPin";
import MessageFeed from "../views/MessageFeed";
import GreatSession from "../views/GreatSession";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'StartNewSession',
        component: StartNewSession
    },

    {
        path: '/start_new_session',
        redirect: '/'
    },

    {
        path: '/share_link',
        name: 'ShareLink',
        component: ShareLink
    },

    {
        path: '/set_entry_pin',
        name: 'SetEntryPin',
        component: SetEntryPin
    },

    {
        path: '/message_feed',
        name: 'MessageFeed',
        component: MessageFeed
    },

    {
        path: '/great_session',
        name: 'GreatSession',
        component: GreatSession
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;