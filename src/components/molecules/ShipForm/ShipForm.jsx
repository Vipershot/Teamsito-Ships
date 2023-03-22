import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Form, Button, Container } from '../../atoms'

export const ShipForm = ({ sendPost }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [file, setFile] = useState(null)
  const [pathName, setPathName] = useState(null)

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
  const sendData = data => {
    sendPost(data, file)
  }

  return (
    <Container>
      <Form encType="multipart/form-data" onSubmit={handleSubmit(sendData)}>
        <Input
          placeholder="Ship Name"
          name="shipName"
          className={errors.shipName && 'error'}
          {...register('shipName', { required: true })}
        />
        <Input
          placeholder="Ship Model"
          name="shipModel"
          className={errors.shipModel && 'error'}
          {...register('shipModel', { required: true })}
        />
        <Input
          name="shipColor"
          placeholder="Color"
          className={errors.shipColor && 'error'}
          {...register('shipColor', { required: true })}
        />
        <Input
          name="shipYear"
          placeholder="Age"
          className={errors.shipYear && 'error'}
          {...register('shipYear', { required: true })}
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
