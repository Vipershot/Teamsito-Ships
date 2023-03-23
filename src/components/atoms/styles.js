import { Link } from 'react-router-dom'
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
export const LinkTo = styled(Link)`
  text-decoration: none;
  color: #5a5a5a;
`
export const Flex = styled.div`
  display: flex;
  gap: 5px;
`
export const FlexGrow = styled.div`
  flex-grow: 1;
`
export const Title = styled.h1`
  font-size: 20px;
  font-family: sans-serif;
`
export const Image = styled.img`
  width: 200px;
`
