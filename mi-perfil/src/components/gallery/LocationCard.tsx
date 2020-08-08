import * as React from "react";

interface LocationCardProps {
  location: string;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="gallery-location-item">
      <div>{location}</div>
    </div>
  );
}
