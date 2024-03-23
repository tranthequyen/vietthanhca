import { AdminLayout } from "@/layout";
import Favourite from "@/modules/Favourite/Favourite";
import { Home } from "@/modules/Home";
import { HomeAdmin } from "@/modules/HomeAdmin";
import Library from "@/modules/Library/Library";
import { ListSong } from "@/modules/ListSong";
import { ListUser } from "@/modules/ListUser";
import PlayList from "@/modules/PlayList/PlayList";
import Rank from "@/modules/Rank/Rank";
import Song from "@/modules/Songs/screens/Song";
import { Track } from "@/modules/Track";

const publicRoutes = [
  { path: "/", component: Home, layout: "user" },
  { path: "/song/detail/:id", component: Track, layout: "user" },
  { path: "/rank", component: Rank, layout: "user" },
  { path: "/library", component: Library, layout: "user" },
  { path: "/play_list", component: PlayList, layout: "user" },
  { path: "/favourite", component: Favourite, layout: "user" },
  { path: "/song", component: Song, layout: "user" },
  { path: "/track", component: Track, layout: "user" },
];
const privateRoutes = [
  { path: "/admin", component: AdminLayout, layout: "admin" },
  { path: "/list_user", component: ListUser, layout: "admin" },
  { path: "/list_song", component: ListSong, layout: "admin" },
];

export { privateRoutes, publicRoutes };
