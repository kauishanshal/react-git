import React from "react";

function ListingList(props) {
  return (
    <>
      <div>
     {props.name.id} - {props.name.name} - {props.name.email}{" "}
      </div>
    </>
  );
}

export default ListingList;
