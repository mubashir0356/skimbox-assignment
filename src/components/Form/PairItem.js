import {Discount} from './styledComponents'

import './index.css'

const PairItem = props => {
  const {
    title,
    price,
    discount,
    onClickHandler,
    isSelected,
    selectedPair,
  } = props

  //   const onChangePair = () => {
  //     console.log(event.target.id)
  //     onClickHandler(event.target.value)
  //   }

  return (
    <>
      <input
        type="radio"
        className="input-class"
        name="pair"
        onClick={onClickHandler}
        id={selectedPair}
      />
      <label htmlFor={selectedPair} className="label">
        <div className="label-content">
          <p className="pair"> {title}</p>
          <p className="price"> {price}</p>
        </div>
        <Discount isSelected={isSelected}>
          <p className="discount-label">{discount}</p>
        </Discount>
      </label>
    </>
  )
}

export default PairItem
