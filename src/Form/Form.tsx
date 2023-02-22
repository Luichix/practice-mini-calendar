import React, { PropsWithChildren } from 'react'
import { Input } from '../Input'
import {  Select } from '../Select'
import styles from './styles.module.css'
import { FormValues, useForm } from './useForm'

export type InputType = 'text' | 'textarea' | 'select' | 'date' | 'time'

export interface InputForm {
  id: string
  label: string
  value: string
  name: string
  placeholder: string
  type: InputType
  options?: Record<string, string>[]
}

export interface FormGroupProps {
  id: string
  title: string
  initialState: InputForm[]
  onSubmit: (values: FormValues) => void
}

export const Form = ({
  id,
  title,
  initialState,
  onSubmit,
  children,
}: PropsWithChildren<FormGroupProps>) => {
  const { inputs, handleSubmit, handleChange } = useForm(onSubmit, initialState)

  return (
    <form id={id} onSubmit={handleSubmit} className={styles.form}>
      <h4 className={styles.subtitle}>{title}</h4>
      <span className={styles.details}>{children}</span>
      <fieldset className={styles.section}>
        {inputs.map((input, index) => {
          switch (input.type) {
            case 'text':
              return (
                <label key={input.id}>
                  {input.label}
                  <Input
                    id={input.id}
                    value={input.value}
                    onChange={(event) => handleChange(event, index)}
                    placeholder={input.placeholder}
                    length="long"
                    desing="primary"
                  />
                </label>
              )
            case 'date':
              return (
                <label htmlFor={input.id} key={input.id}>
                  {input.label}
                  <Input
                    id={input.id}
                    type={input.type}
                    name={input.name}
                    value={input.value}
                    onChange={(event) => handleChange(event, index)}
                    placeholder={input.placeholder}
                    length="short"
                    desing="primary"
                  />
                </label>
              )
            case 'select':
              return (
                <label htmlFor={input.id} key={input.id}>
                  {input.label}
                  <Select
                    id={input.id}
                    name={input.name}
                    value={input.value}
                    onChange={(event) => handleChange(event, index)}
                    options={input.options}
                    placeholder={input.placeholder}
                    length="short"
                  />
                </label>
              )
            default:
              return null
          }
        })}
      </fieldset>
      <button type="submit">Send Data</button>
    </form>
  )
}
