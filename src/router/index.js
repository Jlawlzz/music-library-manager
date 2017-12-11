import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/views/Homepage';
import Login from '@/views/Login';
import { setAuth, isLoggedIn } from '@/services/spotifyService';

Vue.use(Router);

export function requireLogin() {
  return { name: 'Login' };
}

export function setLogin(to, from, next) {
  next(requireLogin(to));
}

export function loginGuard(to, from, next) {
  if (isLoggedIn()) {
    next();
    return;
  }
  setAuth(to.params);
  if (isLoggedIn()) {
    next();
    return;
  }
  next(requireLogin());
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Login,
    },
    {
      path: '/:params',
      name: 'AuthorizedCallback',
      redirect: { name: 'Browse' },
    },
    {
      path: '/browse',
      name: 'Browse',
      component: Homepage,
      beforeEnter: loginGuard,
    },
  ],
});
