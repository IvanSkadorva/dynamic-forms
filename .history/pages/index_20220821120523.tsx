import type { GetStaticProps, NextPage } from 'next'
import React, { useState } from 'react'
import formSchema from '../data/formSchema.json'
import FormField from '../models/formField'
import { FormGenerator } from '../components/FormGenerator'
type Props = {
  fields: FormField[]
}

const Home: NextPage<Props> = ({ fields }: Props) => (
  <FormGenerator></FormGenerator>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  return { props: { formSchema } }
}

export default Home
