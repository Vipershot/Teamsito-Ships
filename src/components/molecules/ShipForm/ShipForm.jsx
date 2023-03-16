import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { Input, Form, Button, Container } from '../../atoms'

export const ShipForm = ({ sendPost }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const [data, setData] = useState(null)
  const [file, setFile] = useState(null)
  const [pathName, setPathName] = useState(null)

  const handleInput = e => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }
  const sendData = e => {
    e.preventDefault()
    sendPost(data, file)
  }
  const onFileChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file.type.includes('image')) {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
          setPathName(reader.result)
        }
        setFile(file)
      }
    }
  }
  // sendPost({ ...data, image: data.image[0].file })
  //
  // sendPost(data)

  return (
    <Container>
      <Form encType="multipart/form-data" onSubmit={sendData}>
        <Input
          placeholder="Ship Name"
          name="shipName"
          onChange={handleInput}
          className={errors.shipName && 'error'}
        />

        <Input
          placeholder="Ship Model"
          name="shipModel"
          onChange={handleInput}
          className={errors.shipModel && 'error'}
        />
        <Input
          name="shipColor"
          onChange={handleInput}
          placeholder="Color"
          className={errors.shipColor && 'error'}
        />

        <Input
          name="shipYear"
          onChange={handleInput}
          placeholder="Age"
          className={errors.shipYear && 'error'}
        />
        <Input
          onChange={onFileChange}
          type="file"
          name="image"
          className={errors.shipYear && 'error'}
        />
        <img src={pathName} alt="" />
        <Button type="submit"> Submit</Button>
      </Form>
    </Container>
  )
}
