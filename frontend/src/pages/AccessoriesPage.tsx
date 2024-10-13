import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/baseURL";

interface Accessories {
  _id: string;
  title: string;
  image: string;
  price: number;
  stock: number;
}

const AccessoriesPage: React.FC = () => {
  const [accessories, setAccessories] = useState<Accessories[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/Accessories`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch accessories");
        }

        const fetchedAccessories = await response.json();
        setAccessories(fetchedAccessories);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching accessories:", err);
        setError("Failed to fetch accessories. Please try again later.");
        setLoading(false);
      }
    };

    fetchAccessories();
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
        {accessories.map((accessories) => (
          <Grid item xs={12} sm={6} md={4} key={accessories._id}>
            <ProductCard
              _id={accessories._id}
              title={accessories.title}
              image={accessories.image}
              price={accessories.price.toString()}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AccessoriesPage;
