import { lazy, LazyExoticComponent } from 'react'
import { LazyPage1 } from "../01-lazyload/pages";
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Route {
    to: string
    path: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1 "*/'../01-lazyload/layout/LazyLayout'))
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2 "*/'../01-lazyload/pages/LazyPage2'))
const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3 "*/'../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        // todos los paths que pasen por esta ruta van a ser 
        // sean procesadas por el layout
        path: 'lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'Lazy-1'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]

// export const routes: Route[] = [
//     {
//         to: '/lazy1',
//         path: 'lazy1',
//         Component: LazyPage1,
//         name: 'Lazy-1'
//     },
//     {
//         to: '/lazy2',
//         path: 'lazy2',
//         Component: lazy2,
//         name: 'Lazy-2'
//     },
//     {
//         to: '/lazy3',
//         path: 'lazy3',
//         Component: lazy3,
//         name: 'Lazy-3'
//     },
// ]