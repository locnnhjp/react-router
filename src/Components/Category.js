const { useNavigate } = require("react-router-dom");

function Category() {
    let navigate = useNavigate();
    const sendDataToProduct = e => {
        navigate("/product", {
            state: {
                categoryId: e.target.value
            }
        });
    };
    return (
        <div>
            <h3>Select a category</h3>
            <select defaultValue="default" onChange={e => sendDataToProduct(e)}>
                <option value="default" disabled hidden>Choose your car</option>
                <option value="1">Honda</option>
                <option value="2">Suzuki</option>
                <option value="3">Yamaha</option>
            </select>

        </div>
    )

}

export default Category;