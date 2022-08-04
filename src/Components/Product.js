import { Link, useParams } from "react-router-dom";

function Product() {
    let { categoryId } = useParams();
    return (
        <div>
            <h3>Id selected {categoryId}</h3>
            <Link to="/">Category Select</Link>
        </div>
    )
}

export default Product;