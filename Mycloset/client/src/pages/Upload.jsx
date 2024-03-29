import React, { useState, useEffect } from 'react';

const UploadPage = () => {
  const [images, setImages] = useState([]);
  const [imageCategories, setImageCategories] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const [currentView, setCurrentView] = useState('add');
  const [currentTopImageIndex, setCurrentTopImageIndex] = useState(0);
  const [currentBottomImageIndex, setCurrentBottomImageIndex] = useState(0);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
    const storedCategories = JSON.parse(localStorage.getItem('imageCategories')) || [];

    setImages(storedImages);
    setImageCategories(storedCategories);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = images.filter((img, index) =>
        imageCategories[index].toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredImages(filtered);
    } else {
      setFilteredImages([]);
    }
  }, [searchTerm, images, imageCategories]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCurrentImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryChange = (e) => {
    setCurrentCategory(e.target.value);
  };

  const handleAddImage = () => {
    if (currentImage && currentCategory) {
      const newImages = [...images, currentImage];
      const newCategories = [...imageCategories, currentCategory];

      setImages(newImages);
      setImageCategories(newCategories);

      localStorage.setItem('uploadedImages', JSON.stringify(newImages));
      localStorage.setItem('imageCategories', JSON.stringify(newCategories));

      setCurrentImage(null);
      setCurrentCategory('');
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    const updatedCategories = [...imageCategories];

    updatedImages.splice(index, 1);
    updatedCategories.splice(index, 1);

    setImages(updatedImages);
    setImageCategories(updatedCategories);

    localStorage.setItem('uploadedImages', JSON.stringify(updatedImages));
    localStorage.setItem('imageCategories', JSON.stringify(updatedCategories));
  };

  const topImages = images
    .map((img, index) => ({ img, category: imageCategories[index], index }))
    .filter((item) => item.category === 'Top');
  const bottomImages = images
    .map((img, index) => ({ img, category: imageCategories[index], index }))
    .filter((item) => item.category === 'Bottom');

  const shouldShowPreviews = searchTerm === '' && filteredImages.length === 0;

  const handleNextTopImage = () => {
    setCurrentTopImageIndex((prevIndex) => (prevIndex + 1) % topImages.length);
  };

  const handlePrevTopImage = () => {
    setCurrentTopImageIndex((prevIndex) => (prevIndex - 1 + topImages.length) % topImages.length);
  };

  const handleNextBottomImage = () => {
    setCurrentBottomImageIndex((prevIndex) => (prevIndex + 1) % bottomImages.length);
  };

  const handlePrevBottomImage = () => {
    setCurrentBottomImageIndex((prevIndex) => (prevIndex - 1 + bottomImages.length) % bottomImages.length);
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1></h1>
        <div>
          <label htmlFor="file" style={{ color: 'white', background: '#d36dbf', padding: '8px 12px', borderRadius: '5px' }}>
            ESCOLHA SUA PEÇA
          </label>
          <input type="file" id="file" onChange={handleImageChange} style={{ display: 'none' }} />
          <select
            value={currentCategory}
            onChange={handleCategoryChange}
            style={{ marginLeft: '10px', padding: '8px', borderRadius: '5px' }}
          >
            <option value="">Tipo da Peça</option>
            <option value="Top">Top</option>
            <option value="Bottom">Bottom</option>
          </select>
          <button
            onClick={handleAddImage}
            style={{
              marginLeft: '10px',
              padding: '8px 12px',
              borderRadius: '5px',
              color: 'white',
              background: '#d36dbf',
              border: '2px solid #d36dbf',
            }}
          >
            Adicionar
          </button>
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '2px solid #d36dbf',
              width: '200px',
              margin: '0 auto',
            }}
          >
            <input
              type="text"
              placeholder="top ou bottom"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: 'none',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>

        {shouldShowPreviews && topImages.length > 0 && (
          <div>
            <h2></h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {currentTopImageIndex > 0 && (
                <button onClick={handlePrevTopImage}>&lt;</button>
              )}

              <div key={topImages[currentTopImageIndex].index} style={{ margin: '10px', position: 'relative' }}>
                <img
                  src={topImages[currentTopImageIndex].img}
                  alt={`Visualização ${topImages[currentTopImageIndex].index}`}
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
                <button
                  onClick={() => handleDeleteImage(topImages[currentTopImageIndex].index)}
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    background: 'transparent',
                    border: 'none',
                    color: '#d36dbf',
                    cursor: 'pointer',
                  }}
                >
                  X
                </button>
              </div>

              {currentTopImageIndex < topImages.length - 1 && (
                <button onClick={handleNextTopImage}>&gt;</button>
              )}
            </div>
          </div>
        )}

        {shouldShowPreviews && bottomImages.length > 0 && (
          <div>
            <h2></h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {currentBottomImageIndex > 0 && (
                <button onClick={handlePrevBottomImage}>&lt;</button>
              )}

              <div key={bottomImages[currentBottomImageIndex].index} style={{ margin: '10px', position: 'relative' }}>
                <img
                  src={bottomImages[currentBottomImageIndex].img}
                  alt={`Visualização ${bottomImages[currentBottomImageIndex].index}`}
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
                <button
                  onClick={() => handleDeleteImage(bottomImages[currentBottomImageIndex].index)}
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    background: 'transparent',
                    border: 'none',
                    color: '#d36dbf',
                    cursor: 'pointer',
                  }}
                >
                  X
                </button>
              </div>

              {currentBottomImageIndex < bottomImages.length - 1 && (
                <button onClick={handleNextBottomImage}>&gt;</button>
              )}
            </div>
          </div>
        )}

        {!shouldShowPreviews && (
          <div>
            <h2>Resultados da Pesquisa:</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {filteredImages.map((img, index) => (
                <div key={index} style={{ margin: '10px', position: 'relative' }}>
                  <img
                    src={img}
                    alt={`Visualização ${index}`}
                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                  />
                  <button
                    onClick={() => handleDeleteImage(index)}
                    style={{
                      position: 'absolute',
                      top: '5px',
                      right: '5px',
                      background: 'transparent',
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
