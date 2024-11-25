import React, { useState, useEffect } from "react";
import { Grid, Container, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { BASE_URL } from "../constants/baseURL";

interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
  stock: number;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/product`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const fetchedProducts = await response.json();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Typography>Loading products...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Container>
      <Typography
      mb={8}
      mt={8}
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          background: "linear-gradient(90deg, #C426DC 0%, #9333EA 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <ProductCard
              _id={product._id}
              title={product.title}
              image={product.image}
              price={product.price.toString()}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
