import { useState } from "react";
import "./Category.css"
function Category(props) {
    console.log(props.cproduct);
    const [selectedCategory, setSelectedCategory] = useState('');
    function handleSearch(){
        const category = document.getElementById('category').value;
        setSelectedCategory(category);
        props.setCat(category);
    }
    return (
        <div className="catproduct">
            <h1>Select Category For Bidding</h1>
            <label htmlFor="category">Choose a category :</label>
            <select id="category" >
                <option value="">Select Category</option>
                <option value="dress">Dress</option>
                <option value="electronics">Electronics</option>
                <option value="vehicles">Vehicles</option>
                <option value="stationery">Stationery</option>
                <option value="miscellaneous">Miscellaneous</option>
            </select>
            <button type="button" className="btn btn-primary me-md-2" onClick={handleSearch}>Search</button>
            
            <div className="bid-container">
                {props.cproduct.map((s) => {
                return (
                    <div className="bid-item" key={s._id}>
                    <div className="image-container">
                        <img src={`http://127.0.0.1:4000/${s.pimage}`} alt={s.product_name} />
                    </div>
                    <div className="details-container">
                        <p><b>Product Name:</b> {s.product_name}</p>
                        <p><b>Category:</b> {s.category_name}</p>
                        <p><b>Base Bidding:</b> {s.base_bid}</p>
                        <p class="be"><b>Bidding End Date:</b> {s.bid_end}</p>
                        <button className="btn btn-warning">Place Bid</button>
                        <input type="text" placeholder="Enter Bid Amount" className="bid-input"/>
                    </div>
                    </div>
                );
                })}
            </div>
        </div>
    );
}

export default Category;