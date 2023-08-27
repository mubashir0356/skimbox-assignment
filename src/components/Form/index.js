import {useState} from 'react'

import {
  OptionsContainer,
  Discount,
  SecondOptionContainer,
} from './styledComponents'

import './index.css'

const sizeOptions = [
  {id: 1, size: 'S'},
  {id: 2, size: 'M'},
  {id: 3, size: 'L'},
]

const colorOptions = [
  {id: 1, color: 'Red'},
  {id: 2, color: 'Orange'},
  {id: 3, color: 'Black'},
  {id: 4, color: 'Blue'},
]

const Form = () => {
  const [selectedOption, setSelectedOption] = useState('initial')
  const [firstPairSize, setFirstPairSize] = useState(sizeOptions[0].size)
  const [firstPairColor, setFirstPairColor] = useState(colorOptions[0].color)
  const [secondPairSize, setSecondPairSize] = useState(sizeOptions[0].size)
  const [secondPairColor, setSecondPairColor] = useState(colorOptions[0].color)

  const singlePairHandler = () => {
    setSelectedOption('single pair')
  }

  const doublePairHandler = () => {
    setSelectedOption('double pair')
  }

  const triplePairHandler = () => {
    setSelectedOption('triple pair')
  }

  const onSubmitForm = async event => {
    event.preventDefault()

    let pairDetails = {}

    switch (selectedOption) {
      case 'single pair':
        pairDetails = {
          selectedPair: '1 Pair',
          price: 'DKK 195.00',
          discount: '50% OFF',
        }
        break
      case 'triple pair':
        pairDetails = {
          selectedPair: '3 Pair',
          price: 'DKK 528.00',
          discount: '60% OFF',
        }
        break
      case 'double pair':
        pairDetails = {
          selectedPair: '2 Pair',
          price: 'DKK 345.00',
          discount: '40% OFF',
          firstPairDetails: {
            size: firstPairSize,
            color: firstPairColor,
          },
          secondPairDetails: {
            size: secondPairSize,
            color: secondPairColor,
          },
        }
        break
      default:
        return null
    }

    console.log(pairDetails)

    const url =
      'https://skimbox-assignment-default-rtdb.firebaseio.com/submit-pair.json'
    const configuration = {
      method: 'POST',
      body: JSON.stringify(pairDetails),
    }
    await fetch(url, configuration)
    return setSelectedOption('initial')
  }

  const onUpdateFirstPairSize = event => setFirstPairSize(event.target.value)

  const onUpdateFirstPairColor = event => setFirstPairColor(event.target.value)

  const onUpdateSecondPairSize = event => setSecondPairSize(event.target.value)

  const onUpdateSecondPairColor = event =>
    setSecondPairColor(event.target.value)

  return (
    <div className="app">
      <div className="form-container">
        <div className="heading-container">
          <hr className="line" />
          <h1 className="heading">Bundle & Save</h1>
          <hr className="line" />
        </div>
        <form className="form" onSubmit={onSubmitForm}>
          <OptionsContainer isSelected={selectedOption === 'single pair'}>
            <input
              type="radio"
              className="input-class"
              name="pair"
              onClick={singlePairHandler}
              id="singlePair"
            />
            <label htmlFor="singlePair" className="label">
              <div className="label-content">
                <p className="pair"> 1 Pair</p>
                <p className="price"> DKK 195.00</p>
              </div>
              <Discount isSelected={selectedOption === 'single pair'}>
                <p className="discount-label">50% OFF</p>
              </Discount>
            </label>
          </OptionsContainer>
          <SecondOptionContainer isSelected={selectedOption === 'double pair'}>
            <div className="second-pair-container">
              <input
                type="radio"
                className="input-class"
                name="pair"
                onClick={doublePairHandler}
                id="doublePair"
              />
              <label htmlFor="doublePair" className="label">
                <div className="label-content">
                  <p className="pair"> 2 Pair</p>
                  <p className="price"> DKK 345.00</p>
                </div>
                <p className="mrp-label">DKK 195.00</p>
                <Discount isSelected={selectedOption === 'double pair'}>
                  <p className="popular">Most Popular</p>
                  <p className="discount-label">40% OFF</p>
                </Discount>
              </label>
            </div>
            <div className="choose-options-container">
              <div className="options-title-container">
                <div className="title-container">
                  <p className="options-text">Size</p>
                </div>
                <div className="title-container">
                  <p className="options-text">Color</p>
                </div>
              </div>
              <div className="options-container">
                <p className="options-serial-text">#1 </p>
                <select className="option" onChange={onUpdateFirstPairSize}>
                  {sizeOptions.map(eachSize => (
                    <option key={eachSize.id}>{eachSize.size}</option>
                  ))}
                </select>
                <select className="option" onChange={onUpdateFirstPairColor}>
                  {colorOptions.map(eachColor => (
                    <option key={eachColor.id}>{eachColor.color}</option>
                  ))}
                </select>
              </div>
              <div className="options-container">
                <p className="options-serial-text">#2 </p>
                <select className="option" onChange={onUpdateSecondPairSize}>
                  {sizeOptions.map(eachSize => (
                    <option key={eachSize.id}>{eachSize.size}</option>
                  ))}
                </select>
                <select className="option" onChange={onUpdateSecondPairColor}>
                  {colorOptions.map(eachColor => (
                    <option key={eachColor.id}>{eachColor.color}</option>
                  ))}
                </select>
              </div>
            </div>
          </SecondOptionContainer>
          <OptionsContainer isSelected={selectedOption === 'triple pair'}>
            <input
              type="radio"
              className="input-class"
              name="pair"
              onClick={triplePairHandler}
              id="triplePair"
            />
            <label htmlFor="triplePair" className="label">
              <div className="label-content">
                <p className="pair"> 3 Pair</p>
                <p className="price"> DKK 528.00</p>
              </div>
              <Discount isSelected={selectedOption === 'triple pair'}>
                <p className="discount-label">60% OFF</p>
              </Discount>
            </label>
          </OptionsContainer>
          <div className="total-price-container">
            <p className="shipping-title">Free 2 Day Shipping</p>
            <p className="total-price">
              Total : <span className="total-amount">DKK 360.00</span>
            </p>
          </div>
          <button type="submit" className="submit-button">
            + Add to Cart
          </button>
          <p className="sponsored-container">Powered by Pumper</p>
        </form>
      </div>
    </div>
  )
}

export default Form
