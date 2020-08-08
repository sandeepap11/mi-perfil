import * as React from "react";
import { galleryList } from "../../utils/GalleryList";
import "../../styles/Gallery.css";
import LocationCard from "./LocationCard";

export default function Gallery() {
  return (
    <div className="gallery-main">
      <h1>On the road ...</h1>
      <div className="gallery-location-list">
        {galleryList.map(locationItem => (
          <LocationCard
            key={locationItem.id}
            location={locationItem.location}
          />
        ))}
      </div>
    </div>
  );
}
