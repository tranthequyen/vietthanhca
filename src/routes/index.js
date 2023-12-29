import { DashBoard } from "@/modules/DashBoard"


const publicRoutes = [
    { path: '/', component: DashBoard, layout: true }
]
const privateRoutes = []

export { privateRoutes, publicRoutes } 