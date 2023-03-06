import React from "react";

const Blog = () => {
    return (
        <section className="hero">
         <h1>Welcome To Blog Page</h1>
        </section>
    )
}

// export default Blog;

// import React from 'react'
// import { useState } from 'react';
// import SearchBar from './Searchbar';
// import ImageList from './ImageList';
// import searchImages from './api';

// function Blog() {
//   const [images, setImages] = useState([]);

//   const handleSubmit = async (term) => {
//     const result = await searchImages(term);

//     setImages(result);
//   };
  
//   return (
//     <div>
//         <section className="hero">
//         <SearchBar onSubmit={handleSubmit} />
//         <ImageList images={images} />
//         </section>
//     </div>
//   );
// }

export default Blog;