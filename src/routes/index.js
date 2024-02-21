
import { AdminLayout } from "@/layout"
import { Home } from "@/modules/Home"
import { HomeAdmin } from "@/modules/HomeAdmin"
import { ListSong } from "@/modules/ListSong"
import { ListUser } from "@/modules/ListUser"
import Song from "@/modules/Songs/screens/Song"


const publicRoutes = [
    { path: '/', component: Home, layout: 'user' },
    { path: '/song', component: Song, layout: 'user' },
]
const privateRoutes = [

    { path: '/admin', component: HomeAdmin, layout: 'admin' },
    { path: '/list_user', component: ListUser, layout: 'admin' },
    { path: '/list_song', component: ListSong, layout: 'admin' },

]

export { privateRoutes, publicRoutes } 