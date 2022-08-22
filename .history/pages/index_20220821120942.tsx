import type { GetStaticProps, NextPage } from 'next'
import React, { useState } from 'react'
import formSchema from '../data/formSchema.json'
import FormField from '../models/formField'
import { FormGenerator } from '../components/FormGenerator'
type Props = {
  fields: any
}

const Home: NextPage<Props> = ({ fields }: Props) => (
  <FormGenerator></FormGenerator>
)

export const getStaticProps: GetStaticProps = async () => {
  return { props: JSON.parse(formSchema) }
}

export default Home
