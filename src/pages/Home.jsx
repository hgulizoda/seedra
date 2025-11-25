import { useEffect, useState } from "react";
import image from "../assets/cilantro.png";
import leaves from "../assets/leaves.png";
import axios from "axios";
import { Box, Group, Button, Text, Title, ScrollArea } from "@mantine/core";

import {
  IconLeaf,
  IconPackage,
  IconRosette,
  IconCarrot,
  IconApple,
  IconToolsKitchen2,
  IconFlower,
} from "@tabler/icons-react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/loader";
const categories = [
  { label: "ALL", icon: IconLeaf },
  { label: "BUNDLES", icon: IconPackage },
  { label: "HERBS", icon: IconRosette },
  { label: "VEGETABLES", icon: IconCarrot },
  { label: "FRUITS", icon: IconApple },
  { label: "SUPPLIES", icon: IconToolsKitchen2 },
  { label: "FLOWERS", icon: IconFlower },
];

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);

  return (
    <>
      {loading ? (
        <ProductSkeleton />
      ) : (
        <main>
          <section
            style={{
              width: "100%",
              background: "#f0f7f4",
              borderRadius: "20px",
              padding: "50px 80px",
              margin: "20px auto",
              maxWidth: "1200px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <div className="container">
              <h1
                style={{
                  fontSize: "42px",
                  fontWeight: "700",
                  margin: 0,
                  lineHeight: "1.2",
                  color: "#1a1a1a",
                }}
              >
                SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting
              </h1>

              <p style={{ marginTop: "15px", fontSize: "16px", color: "#555" }}>
                Be sure of our quality - the freshest batches of this season.
                Non-GMO, Heirloom - our seeds were tested and have the best
                germination ratings. Your easy growing experience is our
                guarantee
              </p>

              <div
                style={{
                  marginTop: "25px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "28px" }}>🔥</span>
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                  }}
                >
                  $12.56
                </span>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#888",
                    fontSize: "18px",
                  }}
                >
                  $15.56
                </span>
              </div>

              <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
                <button
                  style={{
                    padding: "12px 26px",
                    background: "#2f8f2f",
                    border: "none",
                    color: "#fff",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Add to cart
                </button>

                <button
                  style={{
                    padding: "12px 26px",
                    background: "#ffffff",
                    border: "none",
                    color: "#2f8f2f",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Discover
                </button>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <img
                src={image}
                alt="Product"
                style={{
                  width: "350px",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "contain",
                }}
              />
              <img
                src={leaves}
                alt="Product"
                style={{
                  width: "350px",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "contain",
                  position: "absolute",
                  right: "100px",
                  top: "210px",
                }}
              />
            </div>
          </section>
          <section className="container">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Our products.</h2>

              <Button variant="outline" color="green">
                view all ({data?.length})
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "50px",
              }}
            >
              {categories.map((category) => (
                <button
                  key={category.label}
                  style={{
                    color: "black",
                    fontWeight: "500",
                    backgroundColor: "transparent",
                    padding: "22px 40px",
                    borderRadius: "8px",
                    border: "2px solid #EFEFEF",
                    fontSize: "14px",
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
                rowGap: "30px",
                marginTop: "50px",
              }}
            >
              {data?.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Home;
