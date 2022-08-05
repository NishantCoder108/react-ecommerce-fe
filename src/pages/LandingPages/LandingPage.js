import React, { Fragment, useEffect, useState } from "react";
import { AxiosInstance } from "../../utils/AxiosInstance";
import "./lp.css";

const LandingPage = () => {
  let datas = ["All Products", "Electromics", "Books", "Cloth", "Gadgets"];

  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    try {
      const result = await AxiosInstance.get("/products");
      console.log(result);

      setCategories(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h5>Welcome to My Online Shopping...</h5>
      <div className="allitems">
        {/* <p className="item">All Products</p> */}
        {categories.map((item) => (

          <Fragment key={item.id}>
            <div style={{width:"225px" ,display:'flex',flexDirection:'column'}}> 
               
            <p className="item" ><img src={item.image}/>{item.title.substring(0,27)}</p>
            </div>
           
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;

// function Card({datas}){
//   console.log(datas)
//   return(<>
//     {datas.map((item)=>{

//       <p>{item}</p>

//     })}

//   </>)
// }
