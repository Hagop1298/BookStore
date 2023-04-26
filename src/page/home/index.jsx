// // import React, { useState } from 'react'
// // import Nav from '../../navigation'
// // import Cards from '../../component'
// // import data from '../../data'
// // const Home = () => {
// //   const [filteredData, setFilteredData] = useState(null);
// //   const handleCategoryChange = (value) => {
// //     console.log(`selected ${value}`);
// //     if (value) {
// //       const filtered = data.filter((book) => book.categories.includes(value));
// //       console.log(filtered, "filteredData");
// //       setFilteredData(filtered);
// //     } else {
// //       alert("error");
// //     }
// //   };
// //   return (
// //     <div>
// //       <Nav onChange={handleCategoryChange}/>
// //       <Cards data={filteredData || data}/>
// //     </div>
// //   )
// // }

// // export default Home



// // import { useState } from 'react';
// // import data from '../../data';
// // import FilterProduct from '../../component/filterProduct';
// // import Nav from '../../navigation';
// // const Home = () => {
// //   const [filteredData, setFilteredData] = useState(data);
// // // const[selectedOptions,setSelectedOptions] = useState(null)
// //   const handleCategoryChange = (value) => {
// //     if (value) {
// //       const filtered = data.filter((book) => book.categories.includes(value));
// //       setFilteredData(filtered);
// //     } else {
// //       setFilteredData(data);
// //     }
// //   };

// //   const handlePriceFilter = (event) => {
// //     const priceFilter = parseFloat(event.target.value);
// //     const filtered = data.filter((book) => book.published.price === priceFilter);
// //     setFilteredData(filtered);
// //   };

// //   const resetFilters = () => {
// //     setFilteredData(data);
// //   };

// //   return (
// //     <div>
// //       <Nav
// //         handleCategoryChange={handleCategoryChange}
// //         handlePriceFilter={handlePriceFilter}
// //         resetFilters={resetFilters}
// //         // setSelectedOptions={setSelectedOptions}
// //       />
// //       <FilterProduct  filteredData={filteredData} />
// //     </div>
// //   );
// // };

// // export default Home;



import { useState } from 'react';
import data from '../../data';
import Nav from '../../navigation';


const Home = () => {
  const [, setFilteredData] = useState(data);
  const [, setSelectedCategory] = useState("");

  const handleCategoryChange = (value) => {
    if (value) {
      const filtered = data.filter((book) => book.categories.includes(value));
      setSelectedCategory(value);
      setFilteredData(filtered);
    } else {
      setSelectedCategory("");
      setFilteredData(data);
    }
  };

  const handlePriceFilter = (event) => {
    const priceFilter = parseFloat(event.target.value);
    const filtered = data.filter((book) => book.published.price === priceFilter);
    setSelectedCategory("");
    setFilteredData(filtered);
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setFilteredData(data);
  };
  // const navigate= useNavigate()
  // const handleCardClick = (book) => {
  //   navigate(`/bookdetails/${book.isbn}`, { state: { selectedBook: book } });
  // };
  return (
    // <div>
    //   <Nav
    //     handleCategoryChange={handleCategoryChange}
    //     handlePriceFilter={handlePriceFilter}
    //     resetFilters={resetFilters}
    //   />
    //    {/* <div className="card-container">
    //     {filteredData.map((book) => (
    //       <Link to={{
    //         pathname: `/bookdetails/${book.isbn}`,
    //         state: { selectedBook: book }
    //       }}>
    //         <Card key={book.isbn} book={book} />
    //       </Link>
    //     ))}
    //   </div> */}
    //   <BookDetails selectedBook={selectedBook} filteredData={filteredData} />
    // </div>
    <div>
    <Nav
      handleCategoryChange={handleCategoryChange}
      handlePriceFilter={handlePriceFilter}
      resetFilters={resetFilters}
    />
  
  </div>
  );
};

export default Home;
