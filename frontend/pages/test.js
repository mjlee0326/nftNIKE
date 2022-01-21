import { SimpleGrid, Text } from "@mantine/core";
import { Grid } from "@mantine/core";
import BrandCard from "../components/brandCard";
import { nike } from "../public/brands/nike";
import { adidas } from "../public/brands/adidas";
import { converse } from "../public/brands/converse";
import { jordan } from "../public/brands/jordan";
import { useState, useEffect } from "react";
import Header from '../components/header';
import Heading from '../components/heading';
import axios from "axios";
// import { useStore } from "../utils/store";

const Brands = () => {
  // const [brand, setBrands] = useStore((state) => [state.brands, state.setBrands]);
  const [brand, setBrands] = useState("");
  // const getBrands = async () => {
  //   const {
  //     data: { data: brands },
  //   } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/brands`);
  //   if (brands) {
  //     setBrands(brands);
  //   }
  // };

  // useEffect(() => {
  //   getBrands();
  // }, []);

  return (
    <div>
      <Header />
      <Heading />
      {/* {brands?.map((collection) => (
          <BrandCard brand={collection} key={collection.id} />
        ))} */}
      <Grid justify="space-between" style={{ padding: "0px 40px" }}>
        {/* <BrandCard brand={aether} /> */}
        <BrandCard brand={nike} />
        <BrandCard brand={adidas} />
        <BrandCard brand={converse} />
        <BrandCard brand={nike} />
        <BrandCard brand={nike} />
        <BrandCard brand={nike} />
        <BrandCard brand={nike} />
        <BrandCard brand={nike} />
      </Grid>
    </div>
  );
};

export default Brands;
