import PhotoCard from "./PhotoCard";

function PhotoGrid({ photos, favourites, dispatch }) {
  const sortedPhotos = [...photos].sort((a, b) => {
    const aFav = favourites.some((f) => f.id === a.id);
    const bFav = favourites.some((f) => f.id === b.id);
    return bFav - aFav;
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {sortedPhotos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          favourites={favourites}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default PhotoGrid;
