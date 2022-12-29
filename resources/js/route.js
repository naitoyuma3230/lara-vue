import { createRouter, createWebHistory } from "vue-router";

import TopPage from "./pages/TopPage.vue";
import NextPage from "./pages/NextPage.vue";

import HeaderComponent from "./components/HeaderComponent.vue";
import TaskListComponent from "./components/TaskListComponent.vue";
import TaskShowComponent from "./components/TaskShowComponent.vue"

const routes = [
    {
        path: "/",
        name: "TopPage",
        component: TopPage,
    },
    {
        path: "/next",
        name: "NextPage",
        component: NextPage,
    },
    {
        path: '/tasks',
        name: 'task.list',
        component: TaskListComponent
    },
    {
        path: '/tasks/:taskId',
        name: 'task.show',
        component: TaskShowComponent,
        props: true
    },
];
const router = createRouter({
    routes,
    history: createWebHistory(),
});
export default router;
