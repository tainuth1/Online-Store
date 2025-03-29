import React from "react";

const CartItem = () => {
  return (
    <div className="w-full d-flex gap-1 justify-content-between align-items-center mt-3">
      <img
        width={"60px"}
        height={"60px"}
        className="object-fit-cover rounded-3"
        src="https://th.bing.com/th/id/R.471af23dc4adaef66e0a8593d143b84d?rik=S2T%2f7ttaNjnwhQ&pid=ImgRaw&r=0"
        alt=""
      />
      <div className="">
        <h5 style={{width: "200px"}} className="mb-0 fs-5 text-truncate">Product name</h5>
        <p className="fs-6 text-success m-0">Electronic</p>
      </div>
      <p style={{width: "100px"}}  className="fs-5 m-0">$69.99</p>
      <p style={{width: "50px"}}  className="fs-5 m-0">10</p>
      <button className="btn btn-danger">Remove</button>
    </div>
  );
};

export default CartItem;
