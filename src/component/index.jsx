// // import { Card, Col, Row } from 'antd';
// // import data from '../data';
// // import "../style/index.css"
// // import { Link } from 'react-router-dom';
// // import { useState } from 'react';
// // import BookDetails from '../page/bookdetails';

// // const Cards = ({ data }) => {

// //   const [selectedBook, setSelectedBook] = useState("")

// //   const handleClick = (item) => {
// //     console.log(selectedBook, "hagop");
// //     setSelectedBook(item)
// //   }

// //   return (
// //     <div>
// //       <div style={{ background: "grey", maxWidth: "95vw", borderRadius: "10px", margin: "auto", display: "flex", justifyContent: "center" }}>
// //         <Row gutter={16}>
// //           <Col className='card'>
// //             {data.map((item) => (
// //               <Card key={item.Id} className='card-img' bordered={false} onClick={() => handleClick(item)}>
// //                 <img src={item.thumbnailUrl} alt="##" />
// //                 <Link to={`/bookdetails/${item.isbn}`}>{item.title}</Link>
// //               </Card>
// //             ))}
// //             {/* {selectedBook && <BookDetails selectedBook={selectedBook} />} */}

// //           </Col>
// //         </Row>
// //       </div>

// //     </div>

// //   )
// // };
// // export default Cards;


// // import { Card, Col, Row } from 'antd';
// // import { useState } from 'react';
// // import FilterProduct from './filterProduct';
// // // import BookDetails from '../page/bookdetails';

// // const Cards = ({ data }) => {
// //   const [selectedBook, setSelectedBook] = useState("");
// //   const [filteredData, setFilteredData] = useState(null);
// //   const [filterValueText, updateFilterText] = useState("all")
// //   const handleClick = (item) => {
// //     setSelectedBook(item);
// //   };

// //   const handleFilter = (filtered) => {
// //     setSelectedBook(null);
// //     setFilteredData(filtered);
// //   };
// //   const onFilterValueSelected = (filterValue) => {
// //     updateFilterText(filterValue)
// //   }
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
// //         <Row gutter={16}>
// //           <Col className="card">
// //             {filteredData ? <FilterProduct filterValueSelected={onFilterValueSelected} /> :
// //               data.map((item) => (
// //                 <Card
// //                   key={item.Id}
// //                   className="card-img"
// //                   bordered={false}
// //                   onClick={() => handleClick(item)}
// //                 >
// //                   <img src={item.thumbnailUrl} alt="##" />
// //                   <a href={`/bookdetails/${item.isbn}`}>{item.title}</a>
// //                 </Card>
// //               ))}
// //             {/* {selectedBook && <BookDetails selectedBook={selectedBook} />} */}
// //           </Col>
// //         </Row>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cards;


// // import { Card, Col, Row } from 'antd';
// // import { useState } from 'react';
// // import FilterProduct from './filterProduct';

// // const Cards = ({ data }) => {
// //   const [selectedBook, setSelectedBook] = useState("");
// //   const [filteredData, setFilteredData] = useState(null);
// //   const [filterValueText, updateFilterText] = useState("all");

// //   const handleClick = (item) => {
// //     setSelectedBook(item);
// //   };

// //   const handleFilter = (filtered) => {
// //     setSelectedBook(null);
// //     setFilteredData(filtered);
// //   };

// //   const onFilterValueSelected = (filterValue) => {
// //     updateFilterText(filterValue);
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
// //         <Row gutter={16}>
// //           <Col className="card">
// //             {filteredData ? (
// //               <FilterProduct
// //                 filterValueSelected={onFilterValueSelected}
// //                 filteredData={filteredData}
// //               />
// //             ) : (
// //               data.map((item) => (
// //                 <Card
// //                   key={item.Id}
// //                   className="card-img"
// //                   bordered={false}
// //                   onClick={() => handleClick(item)}
// //                 >
// //                   <img src={item.thumbnailUrl} alt="##" />
// //                   <a href={`/bookdetails/${item.isbn}`}>{item.title}</a>
// //                 </Card>
// //               ))
// //             )}
// //           </Col>
// //         </Row>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cards;


// // import { Card, Col, Row } from 'antd';
// // import { useState } from 'react';
// // import FilterProduct from './filterProduct';
// // import BookDetails from '../page/bookdetails';

// // const Cards = ({ data }) => {
// //   const [selectedBook, setSelectedBook] = useState("");
// //   const [filteredData, setFilteredData] = useState(null);
// //   const [filterValueText, updateFilterText] = useState("all")

// //   const handleFilter = (filtered) => {
// //     setSelectedBook(null);
// //     setFilteredData(filtered);
// //   };

// //   const onFilterValueSelected = (filterValue) => {
// //     updateFilterText(filterValue)
// //   }

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
// //         <Row gutter={16}>
// //           <Col className="card">
// //             {filteredData ? (
// //               <FilterProduct
// //                 filterValueSelected={onFilterValueSelected}
// //                 data={filteredData}
// //                 handleFilter={handleFilter}
// //               />
// //             ) : (
// //               data.map((item) => (
// //                 <Card
// //                   key={item.Id}
// //                   className="card-img"
// //                   bordered={false}
// //                   onClick={() => setSelectedBook(item)}
// //                 >
// //                   <img src={item.thumbnailUrl} alt="##" />
// //                   <a href={`/bookdetails/${item.isbn}`}>{item.title}</a>
// //                 </Card>
// //               ))
// //             )}
// //           </Col>
// //         </Row>
// //       </div>
// //       {selectedBook && <BookDetails selectedBook={selectedBook} />}
// //     </div>
// //   );
// // };

// // export default Cards;

// import { Card, Col, Row } from 'antd';
// import { useState } from 'react';
// // import FilterProduct from './filterProduct';
// import BookDetails from '../page/bookdetails';
// import "../style/index.css"
// import FilterProduct from './filterProduct';
// const Cards = ({ data, filteredData , selectCategory }) => {
//   const [selectedBook, setSelectedBook] = useState("");

//   const handleClick = (item) => {
//     setSelectedBook(item);
//   };

//   return (
//     <div style={{backgroundColor:"green"}}>
     
//         <Row>
//           <Col className="card">
//             {filteredData ? (
//             <FilterProduct selectedBook={selectedBook}/>
//             ) : (
//               data.map((item) => (
//                 <Card
//                   key={item.Id}
//                   className="card-img"
//                   bordered={false}
//                   onClick={() => handleClick(item)}
//                 >
//                   <img src={item.thumbnailUrl} alt="##" />
//                   <a href={`/bookdetails/${item.isbn}`}>{item.title}</a>
//                   <p>{item.status}</p>
//                 </Card>
//               ))
//             )}
//           </Col>
//         </Row>

//       {selectedBook && <BookDetails selectedBook={selectedBook} />}
//     </div>
//   );
// };

// export default Cards;


