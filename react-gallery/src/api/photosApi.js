const fetchPhotos = async (page, limit) => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
    const data = await response.json();
    return data;
  };
  
  export { fetchPhotos };
  