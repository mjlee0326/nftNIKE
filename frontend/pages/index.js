import { SimpleGrid, Text } from "@mantine/core";
import { Grid } from "@mantine/core";
import BrandCard from "../components/brandCard";
import { nike } from "../public/brands/nike";
import { adidas } from "../public/brands/adidas";
import { converse } from "../public/brands/converse";
import { jordan } from "../public/brands/jordan";
import { useState, useEffect } from "react";
import Header from '../components/header';
import axios from "axios";
// import { useStore } from "../utils/store";

const Brands = () => {
  // const [brand, setBrands] = useStore((state) => [state.brands, state.setBrands]);
  const [brands, setBrands] = useState(null);
  const getBrands = async () => {
    const {
      data: { data: brands },
    } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/brands`);
    if (brands) {
      setBrands(brands);
    }

    console.log(brands);
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div>
      <Header>
      </Header>
      <Grid justify="space-between" style={{ padding: "0px 40px" }}>
        {brands && brands.map((brand, index) => {
          return <BrandCard brand={brand} key={index} />
        })}
      </Grid>
    </div>
  );
};

export default Brands;
