import styled from 'styled-components'

export const Input = styled.input`
  border: ${props => (props.className ? '2px solid red' : '1px solid green')};
  border-radius: 3px;
  padding: 10px 15px;
`
export const Button = styled.button`
  border: 1px solid blue;
  background: white;
  padding: 10px 15px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const Container = styled.div`
  padding: 5% 10%;
`
