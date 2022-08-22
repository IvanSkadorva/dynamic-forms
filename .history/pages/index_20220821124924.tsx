import type { GetStaticProps, NextPage } from 'next'
import React, { useState } from 'react'
import formSchema from '../data/formSchema.json'
import FormField from '../models/formField'
import { FormGenerator } from '../components/FormGenerator'
type HomeProps = {
  fields: FormField[]
}

const Home: NextPage<HomeProps> = ({ fields }) => {
  console.log(fields)
  return <FormGenerator fields={fields}></FormGenerator>
}

export const getStaticProps: GetStaticProps = async () => {
  // HERE SHOULD BE AN API CALL
  return { props: { fields: JSON.parse(JSON.stringify(formSchema)) } }
}

export default Home
