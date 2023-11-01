
import { Col } from 'react-bootstrap';

function ProductListItem(props) {
  // const { itemlist : { title, price, imagePath } } = props;
  const { itemlist } = props;
  const { title, price, imagePath } = itemlist;


  return (
    <Col md={4}>
    <img src={imagePath} width="80%" />
    <h4>{title}</h4>
    <p>{price}</p>
  </Col>
  );
}

export default ProductListItem;