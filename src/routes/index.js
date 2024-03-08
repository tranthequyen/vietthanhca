<<<<<<< HEAD
import { AdminLayout } from "@/layout";
import { Home } from "@/modules/Home";
import { HomeAdmin } from "@/modules/HomeAdmin";
import { ListSong } from "@/modules/ListSong";
import { ListUser } from "@/modules/ListUser";
import SongPlayer from "@/modules/SongPlayer/screens/SongPlayer";

const publicRoutes = [
  { path: "/", component: Home, layout: "user" },
  { path: "/songplayer", component: SongPlayer, layout: "user" },
];
=======

import { AdminLayout } from "@/layout"
import Favourite from "@/modules/Favourite/Favourite"
import { Home } from "@/modules/Home"
import { HomeAdmin } from "@/modules/HomeAdmin"
import Library from "@/modules/Library/Library"
import { ListSong } from "@/modules/ListSong"
import { ListUser } from "@/modules/ListUser"
import PlayList from "@/modules/PlayList/PlayList"
import Rank from "@/modules/Rank/Rank"
import Song from "@/modules/Songs/screens/Song"
import { Track } from "@/modules/Track"


const publicRoutes = [
    { path: '/', component: Home, layout: 'user' },
    { path: '/track', component: Track, layout: 'user' },
    { path: '/rank', component: Rank, layout: 'user' },
    { path: '/library', component: Library, layout: 'user' },
    { path: '/play_list', component: PlayList, layout: 'user' },
    { path: '/favourite', component: Favourite, layout: 'user' },
    { path: '/song', component: Song, layout: 'user' }
]
>>>>>>> 57e6f999c5b5cb21630e906e0dcd7ab626136c3d
const privateRoutes = [
  { path: "/admin", component: HomeAdmin, layout: "admin" },
  { path: "/list_user", component: ListUser, layout: "admin" },
  { path: "/list_song", component: ListSong, layout: "admin" },
];

export { privateRoutes, publicRoutes };
