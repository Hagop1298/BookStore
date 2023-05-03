import { useState, useEffect } from 'react';
import { Button, Card, Input, Select, Space } from 'antd';
import data from '../data';
import "../style/index.css"
import { Link } from 'react-router-dom';


const Nav = ({ book }) => {
  const { Option } = Select;
  const uniqueCategories = [...new Set(data.map((book) => book.categories[0]))];
  const [filteredData, setFilteredData] = useState(data);

  ///////// FilterByCategories ///////////
  const handleCategoryChange = (value) => {
    if (value) {
      const filtered = data.filter((book) => book.categories.includes(value));
      console.log(filtered, "filteredData");
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };


  ///////// FilterByDate //////////
  const handleDateChange = (event) => {
    if (event.target.value === '') {
      setFilteredData(data);
      return;
    }
    const filtered = data?.filter(e => e.published.$date.slice(0, 10) === event.target.value ? e.published.$date : null);
    setFilteredData(filtered);
    // if (filtered && filtered?.length === 0) {
    //   setFilteredData(null);
    //   //  setFilteredData([]);
    // } else {
    //   setFilteredData(filtered);
    // }
  };

  ////////// FilterByPrice ///////////
  const handlePriceFilter = (event) => {
    const priceFilter = parseFloat(event.target.value);
    if (isNaN(priceFilter)) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((book) => book.published.price === priceFilter);
      setFilteredData(filtered);
    }
  };


  ////////// ClearFilter ///////////
  const resetFilters = () => {
    setFilteredData(data);
    console.log("removed")
  }


  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", width: "83%", marginLeft: "10%", background: "lightGray", padding: "10px", borderRadius: "10px" }}>
        <Space>
          <input className='datepicker' type="date" onChange={handleDateChange} />
          {/* {filteredData? (<input className='datepicker' type="date" onChange={handleDateChange} />):(<p>no book available</p>)} */}
        </Space>
        <Input onChange={handlePriceFilter} style={{ width: 200 }} placeholder='Search-price' />
        <Select
          onChange={handleCategoryChange}
          style={{ width: 220 }}
          defaultValue="-- Select a category --"
        >
          <Option value="">-- Select a category --</Option>
          {uniqueCategories.map((category) => (
            <Option key={category}>{category}</Option>
          ))}
        </Select>
        <Button data-testid='button' onClick={resetFilters}>Reset Filters</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "10%", width: "90%" }}>
        {filteredData.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap" }}>

            {filteredData.map((item) => (
              <Card
                key={item.Id}
                className="card-img"
                data-testid="card-img"
                bordered={false}
                style={{ width: "300px", margin: "10px" }}
              >
                <Link to={{
                  pathname: `/bookdetails/${item.isbn}`,
                  state: { selectedBook: item }
                }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={item.thumbnailUrl} alt="No Images" style={{ display: "flex", justifyContent: "center", marginLeft: "30px", width: "200px", height: "250px" }} />
                  <p className='author' style={{ display: "flex", justifyContent: "center", color: "white" }}>{item.title}</p>
                  <p className='author' style={{ color: "white" }}><span style={{ fontWeight: "bold", color: "white", width: " max-content" }}>Author:</span> {item.authors}</p>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ color: "white" }}> <span style={{ fontWeight: "bold", color: "white" }}>Categories:</span> {item.categories}</p>
                    <p style={{ fontWeight: "bold", color: "white" }}>${item.published.price}</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>


  );
};

export default Nav;



