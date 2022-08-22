import type { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import formSchema from "../data/formSchema.json";
import FormField from "../models/formField";
import { FormGenerator } from "../components/FormGenerator";
type Props = {
  fields: FormField[];
};

const Home: NextPage<Props> = ({ fields }: Props) => (
  console.log(fields);
  <FormGenerator></FormGenerator>
);

export const getStaticProps: GetStaticProps = async () => {
  return { props: { fields: JSON.stringify(formSchema) } };
};

export default Home;
