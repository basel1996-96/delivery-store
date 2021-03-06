//styling
import { ProductImage, ItemDetail, StyledButton, ButtonLink,StyledButton1 } from "../styles";
import { MdDeleteForever } from "react-icons/md";


//
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteProduct } from "../store/actions";
import { useDispatch } from "react-redux";

const DetailItem = (props) => {
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  let itemSlug = useParams().itemSlug;

  if (loading) return <h1>loading</h1>;
  const product = products.find((product) => product.slug === itemSlug);

  console.log(itemSlug);
  console.log(product);

  if (typeof product === "undefined") return <Redirect to="/products" />;

  return (
    <ItemDetail>
      <div>
        <ProductImage src={product.url} alt={product.name} />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description} </p>
        <br />
        <p>{product.price} JOD</p>
<div>
        <ButtonLink to="/products">
          <StyledButton>&#8592;</StyledButton>
        </ButtonLink>
        </div>
        <div>
        <StyledButton onClick={() => dispatch(deleteProduct(product.id))}>
          <MdDeleteForever />
        </StyledButton>
        </div>
        <div>
        <ButtonLink to={`/products/${product.slug}/edit`}>
          <StyledButton1 >Edit</StyledButton1>
        </ButtonLink>
        </div>
      </div>
    </ItemDetail>
  );
};

export default DetailItem;
