import { Typography, Grid, Container } from "@mui/material";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { BASE_URL } from "../constants/baseURL";

interface Vitamins {
    _id: string;
    title: string;
    image: string;
    price: number;
    stock: number;
  }
  
  const VitaminsPage: React.FC = () => {
    const [vitamins, setVitamins] = useState<Vitamins[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchVitamins = async () => {
        try {
          const response = await fetch(`${BASE_URL}/vitamins`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          if (!response.ok) {
            throw new Error("Failed to fetch accessories");
          }
  
          const fetchedVitamins = await response.json();
          setVitamins(fetchedVitamins);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching accessories:", err);
          setError("Failed to fetch accessories. Please try again later.");
          setLoading(false);
        }
      };
  
      fetchVitamins();
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
          {vitamins.map((vitamins) => (
            <Grid item xs={12} sm={6} md={4} key={vitamins._id}>
              <ProductCard
                _id={vitamins._id}
                title={vitamins.title}
                image={vitamins.image}
                price={vitamins.price.toString()}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  
  export default VitaminsPage;