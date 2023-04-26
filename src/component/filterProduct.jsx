// import { Card } from 'antd';
// import data from '../data';
// import { useState } from 'react';

// const FilterProduct = ({filteredData}) => {

//     const [selectedBook, setSelectedBook] = useState("");



//     const handleClick = (item,value) => {
//         setSelectedBook(item);
//         console.log(`selected ${value}`);
//         if (value) {
//             const filtered = data.filter((book) => book.categories.includes(value));
//             console.log(filtered, "filteredData");
//             setSelectedBook(filtered);
//         } else {
//             alert("error");
//         }
//     };


//     return (

//         <div>
//             <div
//                 style={{
//                     background: "grey",
//                     maxWidth: "95vw",
//                     borderRadius: "10px",
//                     margin: "auto",
//                     display: "flex",
//                     justifyContent: "center",
//                 }}
//             >
//                 {filteredData.map((item) => (
//                     <Card
//                         key={item.Id}
//                         className="card-img"
//                         bordered={false}
//                         onClick={() => handleClick(item)}
//                     >
//                         <img src={item.thumbnailUrl} alt="##" />
//                         <a href={`/bookdetails/${item.isbn}`}>{item.title}</a>
//                         <p>{item.status}</p>
//                     </Card>
//                 ))}
//             </div>
//         </div>

//     )

// }
// export default FilterProduct

// // import { Card } from 'antd';
// // import data from '../data';
// // import { useState } from 'react';

// // const FilterProduct = () => {
// //   const [selectedBook, setSelectedBook] = useState("");
// //   const [filteredData, setFilteredData] = useState(null);

// //   const handleClick = (item) => {
// //     setSelectedBook(item);
// //   };

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
// //       <div
// //         style={{
// //           background: "grey",
// //           maxWidth: "95vw",
// //           borderRadius: "10px",
// //           margin: "auto",
// //           display: "flex",
// //           justifyContent: "center",
// //         }}
// //       >
// //         {filteredData ? (
// //           filteredData.map((item) => (
// //             <Card
// //               key={item.Id}
// //               className="card-img"
// //               bordered={false}
// //               onClick={() => handleClick(item)}
// //             >
// //               <img src={item.thumbnailUrl} alt="##" />
// //               <a href={`/bookdetails/${item.isbn}`}>{item.title}</a>
// //               <p>{item.status}</p>
// //             </Card>
// //           ))
// //         ) : (
// //           <div>No books found</div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FilterProduct;


// // import { Card } from 'antd';
// // import "../style/index.css"
// // import { Link } from 'react-router-dom';
// // const FilterProduct = ({ filteredData, selectCategory }) => {


// //   return (
//     // <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//     //   {filteredData.length > 0 ? (
//     //     <div style={{ display: "flex", flexWrap: "wrap" }}>
//     //       {filteredData.map((item) => (
//     //         <Card
//     //           key={item.Id}
//     //           className="card-img"
//     //           bordered={false}
//     //           style={{ width: "300px", margin: "10px" }}
//     //         >
//     //           <Link to={`/bookdetails/${item.isbn}`}>
//     //             <img src={item.thumbnailUrl} alt="##" />
//     //             <p>{item.title}</p>
//     //             <p>{item.status}</p>
//     //           </Link>
//     //         </Card>
//     //       ))}
//     //     </div>
//     //   ) : (
//     //     <div>No books found</div>
//     //   )}
//     // </div>
// {/* <></> */}
// //   );
// // };

// // export default FilterProduct;




// // import { Card } from 'antd';
// // import { Link } from 'react-router-dom';

// // const FilterProduct = ({ filteredData, selectedCategory }) => {
// //   let dataToDisplay = filteredData;

// //   if (selectedCategory) {
// //     dataToDisplay = filteredData.filter((book) => book.categories.includes(selectedCategory));
// //   }

// //   return (
// //     <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
// //       {dataToDisplay.length > 0 ? (
// //         <div style={{ display: "flex", flexWrap: "wrap" }}>
// //           {dataToDisplay.map((item) => (
// //             <Card
// //               key={item.Id}
// //               className="card-img"
// //               bordered={false}
// //               style={{ width: "300px", margin: "10px" }}
// //             >
// //               <Link to={`/bookdetails/${item.isbn}`}>
// //                 <img src={item.thumbnailUrl} alt="##" />
// //                 <p>{item.title}</p>
// //                 <p>{item.status}</p>
// //               </Link>
// //             </Card>
// //           ))}
// //         </div>
// //       ) : (
// //         <div>No books found</div>
// //       )}
// //     </div>
// //   );
// // };

// // export default FilterProduct;

