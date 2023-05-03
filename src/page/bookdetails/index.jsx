import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data';
import { Button, Card } from 'antd';
import {ArrowLeftOutlined} from "@ant-design/icons"

const BookDetails = () => {
  const { id } = useParams();
  console.log(id, "IDDDDDD");
  const selectedBook = data?.find(book => book.isbn === id);
  console.log(selectedBook, "selecetedBook");
  const navigate = useNavigate()
  const handleNvaigate = () => {
    navigate("/")
  }

  return (
    <div>
      <Button onClick={handleNvaigate} icon={ <ArrowLeftOutlined />}>Back to Home</Button>
      <Card
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
      </Card>
    </div>
  );
};

export default BookDetails;
