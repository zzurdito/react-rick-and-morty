/* eslint-disable react/prop-types */



function Character({name, image}) {
  return (
    <div className="text-center m-5">
        <h2>{name}</h2>
        <img className="img-fluid rounded-pill" src={image} alt={name} />
    </div>
  )
}

export default Character