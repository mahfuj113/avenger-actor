import PropTypes from 'prop-types'

const Cart = ({ selectedActor, remaining, totalCost, handleControl }) => {
    console.log(selectedActor);
  return (
    <div>
      <h1> Total Budget: 20,000 $</h1>
      <h5>remaining:{remaining}</h5>
      <h5>total cost:{totalCost}</h5>
      {selectedActor.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
      <button onClick={() => handleControl(false)} className="done-btn">
        Complete
      </button>
    </div>
  )
}

Cart.propTypes = {
    selectedActor: PropTypes.array.isRequired,
    remaining: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    handleControl: PropTypes.func.isRequired,
}

export default Cart