import { useEffect ,useState} from  "react"
import React from "react"
 

function Allproduct() {
  const [students , setstudent ] = useState([])
  // const [text , setstudenttext ] = useState("")
  useEffect(() =>{
      getdata()
  })

  const getdata = async () =>{
      const data = await fetch ("http://localhost:8080/ethnicwear ").then((d)=>d.json()
      )
      setstudent(data)
  }

  return (
     <><div className="App_pro">
     <div className="all_products">
     <h2>Women Ethnic Wear</h2>
     <p>Showing 1-20 out of 1566598 Products</p>
     </div>
  
     <div className="pro_con">
     {
            students.map((e)=>{
             return   (
               (
      
        <div className="pro_div">
       <div className="single_pro">
         <img src= {e.img} className="pro_img" alt="" />
         <div className="price">
         <p>{e.title}</p>
          <div className="pro_pri">
          <h2 className="org_pri"> <i class="fa-solid fa-indian-rupee-sign"></i> {e.price} </h2>
           <h4 className="discount"><i class="fa-solid fa-indian-rupee-sign"></i> {e.d_price}</h4>
            <p className="dis10">10% discount</p>
          </div>
          <p><i className="fa-solid fa-percent"></i> $50 discount on  1st order</p>
          <div className="freee">
         <p className="free" >Free delivery</p>
         </div>
          <div className="rating_pro">
            <h2 className="rate">{e.rating}</h2>
            <h6 className="reviews">39 Reviews</h6>
          </div>
         </div>
       </div>
        
     </div>
  
 
 )
 ) 
 
 
 
 
 })
 }
          
 
     </div>
 
 
        
      </div></>
  );
}

export default Allproduct;
