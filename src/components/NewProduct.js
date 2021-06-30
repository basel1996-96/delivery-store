import { FlexStyleVer,Center2,Center } from "../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct, updateProduct } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
const slideImages = [
'https://wallpaperaccess.com/full/826922.jpg', 
'https://pixelz.cc/wp-content/uploads/2018/12/hamburgers-with-fire-uhd-4k-wallpaper-548x308.jpg',
  'https://cdn.wallpapersafari.com/99/52/AByCF5.jpg',
];

const NewProduct = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let productSlug = useParams().productSlug;
  const products = useSelector((state) => state.products);

  const newProduct = {
    name: "",
    url: "",
    price: "",
    description: "",
  };

  const editedProduct = products.find(
    (product) => product.slug === productSlug
  );

  const [product, setProduct] = useState(
    editedProduct ? editedProduct : newProduct
  );

  const resetForm = () => {
    setProduct({
      name: "",
      slug: "",
      id: "",
      url: "",
      price: "",
      description: "",
    });
  };

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handelUrl = (event) => {
    setProduct({ ...product, url: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    editedProduct
      ? dispatch(updateProduct(product))
      : dispatch(createProduct(product));

    resetForm();
    history.push("/products");
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <FlexStyleVer><Center2>
        <label >
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="bb"
          />
        </label>

        <label>
          Duration:
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="bb"
          />
        </label>

        <label>
        Ingredients :
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="bb"
          />
        </label>

        <label>
          Image URL:
          <input
            type="file"
            name="url"
            // value={product.url} we remove it becouse type file is read only
            onChange={handelUrl}
            
          />
        </label>

        <input  className="bb" type="submit" value={editedProduct ? "Update" : "Add"} />
        </Center2>
        <Center>
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[0]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[1]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[2]})`}}>
             
            </div>
           
          </div>
        </Slide>
      </div>
      </Center>
    
      </FlexStyleVer>
    </form>
    
  );
};

export default NewProduct;
