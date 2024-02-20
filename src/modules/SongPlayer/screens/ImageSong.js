import React from "react";

export default function ImageSong() {
  return (
    <div class="flex flex-wrap justify-content-center m-8">
      <div
        class="border-circle w-20rem h-20rem m-2 font-bold flex align-items-center justify-content-center"
        style={{ backgroundColor: "#03CE58" }}
      >
        <img
          src="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"
          alt=""
          className="border-circle w-19rem h-19rem font-bold flex align-items-center justify-content-center"
        />
      </div>
    </div>
  );
}
