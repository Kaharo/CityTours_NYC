import React from 'react';

export default function Card({ image, title, description, address }) {
  return (
    <div class="flex justify-center my-4 min-h-fit">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg grayscale"
          src={
            image
              ? image
              : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
          }
          alt={title}
        />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p class="text-gray-700 text-base mb-4">{description}</p>
          <p class="text-gray-600 text-xs">{address}</p>
        </div>
      </div>
    </div>
  );
}
