import "./Bid.css"
function Bid(props){
    console.log(props.pro)
    return(
        <div className="bid-container">
        {props.pro.map((s) => {
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
    )
}
export default Bid;