import React, { useState, useEffect } from 'react';
import { fetchPhotos } from '../api/photosApi';
import './App.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchPhotos(page, 4)
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [page]);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  if (page < 1) setPage(1);

  return (
    <div>
      {loading ? (
        <div>Завантаження...</div>
      ) : (
        <div>
          <div className="gallery">
            {photos.map((photo) => (
              <div key={photo.id} className="photo">
                <img src={photo.download_url} alt={photo.author} />
                <p>Автор: {photo.author}</p>
              </div>
            ))}
          </div>
          <div>
            <button onClick={prevPage} disabled={page <= 1}>Попередні</button>
            <button onClick={nextPage}>Наступні</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
