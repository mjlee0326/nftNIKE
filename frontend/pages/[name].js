import { useEffect, useState } from "react";
import { Button, Divider, SimpleGrid, Text } from "@mantine/core";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import NFTCard from "../components/nftCard";
// import { useStore } from "../../utils/store";
import Link from "next/link";
import axios from "axios";
import { nike } from '../public/brands/nike';

const StatBox = styled.div`
  flex: 1;
  border: 1px solid rgb(229, 232, 235);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ransition: all 0.2s ease 0s;
  &:hover {
    cursor: pointer;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  }
`;

const StatCount = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const StatTitle = styled.div`
  font-size: 14px;
  color: grey;
`;

const Description = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const NameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NFTS = () => {
  const router = useRouter();
  const [info, setInfo] = useState();
  const [brand, setBrand] = useState();
  // const account = useStore((state) => state.account);
  const [account, setAccount] = useState('');

  const getBrand = async () => {
    setBrand(router?.query.name);
    console.log(brand);

    if (brand) {
      console.log(brand)
      const {
        data: { data: info },
      } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/brands/${brand}`);
      // console.log(info);
      // console.log(info);
      setInfo(info);

      console.log(info)
    }
  };
  useEffect(() => {
    getBrand();
  }, [brand]);

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundImage: `url(${info?.title?.imageURI})`,
        }}
      ></div>
      <div
        style={{
          marginTop: "-63px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "126px",
          height: "126px",
          backgroundImage: `url("/images/frog.png")`,
          backgroundSize: "cover",
          borderRadius: "50%",
          border: "1px solid white",
        }}
      ></div>

      <Description>
        <NameBox>
          <Text style={{ fontSize: "38px", fontWeight: "bold", marginRight: "10px" }} align="center">
            {info?.title?.name}
          </Text>
        </NameBox>

        {/* <div style={{ position: "absolute", right: "30px", top: "330px" }}>
          <Link href={`/assets/${info?.symbol}/create`} passHref>
            <Button size="lg">Add Item</Button>
          </Link>
        </div> */}

        {/* <div>
          <div style={{ display: "flex", margin: "15px auto", width: "580px", height: "90px" }}>
            <StatBox style={{ borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px", borderRightWidth: "0px" }}>
              <StatCount>{info?.number_of_assets}</StatCount>
              <StatTitle>items</StatTitle>
            </StatBox>
            <StatBox style={{ borderRightWidth: "0px" }}>
              <StatCount>{info?.number_of_owners}</StatCount>
              <StatTitle>owners</StatTitle>
            </StatBox>
            <StatBox style={{ borderRightWidth: "0px" }}>
              <StatCount>
                <Image width={23} height={23} src="/images/eth.svg" alt="" />
                <span style={{ marginLeft: "3px" }}>200</span>
              </StatCount>
              <StatTitle>floor price</StatTitle>
            </StatBox>
            <StatBox style={{ borderTopRightRadius: "8px", borderBottomRightRadius: "8px" }}>
              <StatCount>
                <Image width={23} height={23} src="/images/eth.svg" alt="" />
                <span style={{ marginLeft: "3px" }}>13</span>
              </StatCount>
              <StatTitle>volume traded</StatTitle>
            </StatBox>
          </div>
        </div> */}

        <div style={{ textAlign: "center", margin: "20px 0" }}>{info?.title?.description}</div>
      </Description>

      <Divider style={{ margin: "60px 0 40px 0" }} />

      <SimpleGrid
        style={{ padding: "0 80px" }}
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: 1160, cols: 2, spacing: "md" },
          { maxWidth: 840, cols: 1, spacing: "sm" },
        ]}
      >
        {info?.products?.map((nft, i) => {
          console.log(nft);
          return nft.imageURI === null ? null : (
            <NFTCard key={i} brand={info?.title.name} nft={nft} idx={i} />
          );
        })}
      </SimpleGrid>
      {info?.products.length === 0 ?
        <Text style={{ fontSize: "24px", color: "rgb(112, 122, 131)" }} align="center">
          Empty
        </Text> : null}
    </div>
  );
};

export default NFTS;
