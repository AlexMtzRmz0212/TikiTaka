// components/Public/GallerySection.jsx
import React, { useState } from 'react';
import { galeriaImagenes } from '../../data/mockData';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-sand to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">Galería Tikitaka</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Conoce nuestras instalaciones de primer nivel para el mejor fútbol de la ciudad
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galeriaImagenes.map((imagen) => (
            <div 
              key={imagen.id} 
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelectedImage(imagen)}
            >
              <img 
                src={imagen.url} 
                alt={imagen.titulo}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl">{imagen.titulo}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para imagen ampliada */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="max-w-4xl w-full">
              <img src={selectedImage.url} alt={selectedImage.titulo} className="w-full h-auto rounded-lg" />
              <h3 className="text-white text-center mt-4 text-xl font-bold">{selectedImage.titulo}</h3>
              <button className="absolute top-4 right-4 text-white text-3xl hover:text-accent transition">&times;</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;