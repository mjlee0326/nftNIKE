import { Grid } from "@mantine/core";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

const BrandWrapper = styled.div`
  &:hover {
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    transition: all 0.1s ease 0s;
  }
  cursor: pointer;
`;

const BImage = styled(Image)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const EllipsisDiv = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const BrandCard = ({ brand }) => {
  const router = useRouter();

  return (
    <Grid.Col
      span={4}
      md={6}
      lg={4}
      onClick={() => {
        router.push(`/${brand.name}`);
        // router.push({
        //   pathname: `[name]`,
        //   query: { name: brand.name }
        // });
      }}
    >
      <BrandWrapper
        style={{
          width: 380,
          margin: "20px auto",
          border: "1px solid rgb(229, 232, 235)",
          borderRadius: "10px",
        }}
      >
        <div>
          {brand.imageURI && (
            <BImage
              unoptimized={true}
              // src={brand.assets[0].tokenURI}
              src={brand.imageURI}
              width="380px"
              height="200px"
              layout="responsive"
              objectFit="cover"
              alt=""
            />
          )}
        </div>
        <div
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            margin: "0 auto",
            marginTop: "-30px",
            position: "relative",
            border: "1px solid grey",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              margin: "0 auto",
              marginTop: "3px",
              textAlign: "center",
              backgroundImage: 'url("/images/frog.png")',
              backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div style={{ height: "180px", overflow: "hidden", padding: "0 10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30%",
              overflow: "hidden",
              fontWeight: "bold",
            }}
          >
            {brand.name}
          </div>
          <EllipsisDiv style={{ height: "50%", overflow: "hidden" }}>
            <p
              style={{
                wordWrap: "break-word",
                width: "100%",
                textAlign: "center",
                textOverflow: "ellipsis",
                whiteSpace: "initial",
                fontWeight: "bold",
              }}
            >
              {brand.description}
            </p>
          </EllipsisDiv>
        </div>
      </BrandWrapper>
    </Grid.Col>
  );
};

export default BrandCard;
