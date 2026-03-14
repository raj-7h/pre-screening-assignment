function PhotoCard({ photo, favourites, dispatch }) {
  const isFav = favourites.some((p) => String(p.id) === String(photo.id));

  const toggleFavourite = () => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: photo,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={photo.author}
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      <div className="flex justify-between items-center p-3">
        <p className="text-sm font-semibold text-gray-700">{photo.author}</p>

        <button onClick={toggleFavourite} className="text-xl">
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
