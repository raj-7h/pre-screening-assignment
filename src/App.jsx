import { useState, useMemo, useCallback } from "react";
import useFetchPhotos from "./hooks/useFetchPhoto.js";
import SearchBar from "./components/SearchBar.jsx";
import PhotoGrid from "./components/PhotoGrid.jsx";
import { useReducer, useEffect } from "react";
import { favouriteReducer } from "./reducers/favouriteReducer";

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");
  const [favourites, dispatch] = useReducer(favouriteReducer, [], () => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-40">
        <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg shadow">
          ⚠️ Failed to load photos. Please try again later.
        </div>
      </div>
    );

  return (
    <div className="p-5">
      <SearchBar search={search} setSearch={handleSearch} />
      <PhotoGrid
        photos={filteredPhotos}
        favourites={favourites}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
