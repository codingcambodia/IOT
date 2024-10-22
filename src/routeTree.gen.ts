/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SwitchLazyImport = createFileRoute('/switch')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SwitchLazyRoute = SwitchLazyImport.update({
  id: '/switch',
  path: '/switch',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/switch.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/switch': {
      id: '/switch'
      path: '/switch'
      fullPath: '/switch'
      preLoaderRoute: typeof SwitchLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/switch': typeof SwitchLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/switch': typeof SwitchLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/switch': typeof SwitchLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/switch'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/switch'
  id: '__root__' | '/' | '/about' | '/switch'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  SwitchLazyRoute: typeof SwitchLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  SwitchLazyRoute: SwitchLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/switch"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/switch": {
      "filePath": "switch.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
