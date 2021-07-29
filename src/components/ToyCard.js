import React from "react";

function ToyCard({ toy, deleteToy, updateToy }) {
  const {id, name, image, likes} = toy

  function handleDeleteClick(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    deleteToy(id)
  }

  function handleLikes(){
    const updatedToy = {
      likes: likes + 1
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(updatedToy)
    }).then(res => res.json())
    .then(updateToy)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
