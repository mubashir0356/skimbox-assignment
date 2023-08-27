import styled from 'styled-components'

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 3.615px;
  border: 0.904px solid ${props => (props.isSelected ? '#F88CA7' : '#c8c8c8')};
  background: ${props => (props.isSelected ? '#FFF4F7' : '#ffffff')};
  margin-bottom: 20px;
  padding: 20px;
  padding-right: 25px;
  width: 90%;
`

export const SecondOptionContainer = styled(OptionsContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Discount = styled.div`
  margin: 0px;
  align-self: ${props => (props.isSelected ? 'flex-start' : 'center')};
  text-align: right;
`
