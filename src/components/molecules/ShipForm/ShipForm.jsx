import React from 'react'
import { useForm } from 'react-hook-form'
import { Input, Form, Button, Container } from '../../atoms'

export const ShipForm = ({ sendPost }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = data => sendPost(data)
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Ship Name"
          {...register('shipName', { required: true })}
          className={errors.shipName && 'error'}
        />

        <Input
          placeholder="Ship Model"
          {...register('shipModel', { required: true })}
          className={errors.shipModel && 'error'}
        />
        <Input
          placeholder="Color"
          {...register('shipColor', { required: true })}
          className={errors.shipColor && 'error'}
        />

        <Input
          placeholder="Age"
          {...register('shipYear', { required: true })}
          className={errors.shipYear && 'error'}
        />
        <Button type="submit"> Submit</Button>
      </Form>
    </Container>
  )
}
