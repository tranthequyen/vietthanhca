
import { AdminLayout } from "@/layout"
import { Home } from "@/modules/Home"
import { HomeAdmin } from "@/modules/HomeAdmin"
import { ListSong } from "@/modules/ListSong"


const publicRoutes = [
    { path: '/', component: Home, layout: 'user' },
]
const privateRoutes = [

    { path: '/admin', component: HomeAdmin, layout: 'admin' },
    { path: '/list_song', component: ListSong, layout: 'admin' },

]

export { privateRoutes, publicRoutes } 