import { index, prefix, route, type RouteConfig } from '@react-router/dev/routes'

export default [
    index("routes/home.tsx"),
    ...prefix("photos", [
        index("routes/photos/home.tsx"),
        route(":photoId", "routes/photos/photo.tsx"),
    ]),
] satisfies RouteConfig