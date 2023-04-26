import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data';
import { Button, Card } from 'antd';
import { useState } from 'react';
import moment from 'moment';
const BookDetails = () => {

  const { id } = useParams();
  console.log(id, "IDDDDDD");
  const selectedBook = data?.find(book => book.isbn === id);
  console.log(selectedBook, "selecetedBook");
  const navigate = useNavigate()
  const handleNvaigate = () => {
    navigate("/")
  }
  // const [dates,setDates] = useState(null)
  // const handleDateChange = (values) => {
  //   // const value1 = moment(values[0]).format('DD-MM-YYYY')
  //   setDates(moment(values[0]).format('DD-MM-YYYY'))
  // };
  return (
    <div>
      <Button onClick={handleNvaigate}>Bacj to Home</Button>
      <Card
        // key={item.Id}
        className="card-img-details"
        data-testid="card-img"
        bordered={false}
        style={{ maxWidth: "75%", margin: "auto" }}
      >
        <img src={selectedBook?.thumbnailUrl} alt={selectedBook?.title} style={{ width: "200px", height: "250px" }} />
        <h1>{selectedBook?.title}</h1>
        <p>{selectedBook?.authors}</p>
        <p>{selectedBook?.published.$date}</p>
        <p>{selectedBook?.longDescription}</p>
        <p>{selectedBook?.status}</p>


        <div className="description-container">
          {/* <h4>Show More/Show Less</h4>
        {showFullDescription ? <p>{item.description}</p> : <p>{item.shortDescription}</p>}
        {item.description && (
          <button className="learn-more-button" onClick={toggleDescription}>
            {showFullDescription ? 'Show Less' : 'Show More'}
          </button>
        )} */}
        </div>

      </Card>
    </div>
  );
};

export default BookDetails;
