import { createRouter, createWebHistory } from 'vue-router';

import Guard from './services/middleware.js';

//Paginas
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Posts from './pages/Posts.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import BreedsGalery from './pages/BreedsGalery.vue';

// Páginas individuais
import UserPage from './pages/UserPage.vue';
import PetPage from './pages/PetPage.vue';

import Dashboard from './pages/master/Dashboard.vue';


//Páginas Dashboard
import ResumeAnimal from './pages/ResumeAnimal.vue';

//Components Dashboard
import Users from './components/Users.vue';
import Species from './components/Species.vue';
import Races from './components/Races.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/userpage',
    component: UserPage,
  },
  {
    path: '/petpage',
    component: PetPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts',
    component: Posts,
  },
  {
    path: '/breedsgalery',
    component: BreedsGalery
  },
  {
    path: '/login',
    component: Login,
    meta: { hideFooter: true }
  },
  {
    path: '/register',
    component: Register,
    meta: { hideFooter: true }
  },
  {
    path: '/post/:url',
    name: 'PostPage',
    component: () => import('@/pages/PostPage.vue'),
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    // beforeEnter: Guard.auth, //precisa de autenticação
    meta: { hideFooter: true }, //retira o footer
    meta: { hideNavBar: true },
    children: [
      {
        name: 'users',
        path: '/users',
        component: Users
      },
      {
        name: 'ResumeAnimal',
        path: '/ResumeAnimal',
        component: ResumeAnimal
      },
      {
        name: 'species',
        path: '/species',
        component: Species
      },
      {
        name: 'races',
        path: '/races',
        component: Races
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    nex('/login');
  } else {
    next();
  }
})

export default router;
