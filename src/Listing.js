import React from "react";
import ListingList from "./listingList";

function Listing() {
  const employe = ["kaushal", "Ishan", "shiva", "Arrav"];
  const user=[
    {id:1,name:'Kaushal',email:'kaushal@test.com'},
    {id:2,name:'Ishan',email:'ishan@test.com'},
    {id:3,name:'Shiva',email:'shiva@test.com'},
    {id:4,name:'Aarav',email:'aarav@test.com'},
  ];
  const eItem=employe.map((item,index)=><h1 key={index}>{index} - {item}</h1>)
//   const userItem=user.map((item,index)=><h1>{item.id} - {item.name} - {item.email} </h1>)
  return (
    <>
      <h2>Listing Component</h2>
      {eItem}
     {
        user.map((item,index)=><h1 key={index}><ListingList name={item} customId='  55'/></h1>)
     }
    </>
  );
}

export default Listing;
