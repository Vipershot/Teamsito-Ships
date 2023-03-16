import styled from 'styled-components'

export const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => (props.className ? '2px solid red' : '2px solid green')};
  border-radius: 5px;
  padding: 10px 15px;
  height: 150px;
`
