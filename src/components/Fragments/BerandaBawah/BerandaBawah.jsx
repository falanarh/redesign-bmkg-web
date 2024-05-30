import React from "react";
import {Tabs, Tab} from "@nextui-org/react";


export default function BerandaBawah() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon/>
              <span>Informasi Terbaru</span>
            </div>
          }
        />
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <MusicIcon/>
              <span>Berita Terbaru</span>
            </div>
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon/>
              <span>Artikel Terbaru</span>
            </div>
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon/>
              <span>Pengumuman Terbaru</span>
            </div>
          }
        />
      </Tabs>
    </div>  
  );
}
