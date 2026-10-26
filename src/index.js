export const named = () => import(/* webpackChunkName: "named" */ './lazy.js')
export const unnamed = () => import('./lazy.js')
