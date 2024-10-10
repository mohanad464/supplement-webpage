import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { BASE_URL } from "../constants/baseURL";
import Herosection from "../components/Herosection";
import { Bolt } from "@mui/icons-material";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/product`);
        const data = await response.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <Box>Something went wrong please try again!</Box>;
  }

  return (
    <>
      <Herosection />
      <Container sx={{ mt: 1 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            mb: 2,
            position: 'relative',
            "&::after": {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #C426DC 0%, #9333EA 100%)',
              borderRadius: '2px'
            }
          }}
        >
          <Bolt sx={{ 
            color: '#C426DC',
            fontSize: '2rem'
          }} />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(90deg, #C426DC 0%, #9333EA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}
          >
            Best Seller
          </Typography>
        </Box>

        <Grid container spacing={2} alignItems="stretch">
          {products.map((p) => (
            <Grid 
              item 
              xs={12}
              sm={6}
              md={4} 
              key={p._id}
              sx={{ 
                display: 'flex',
                alignItems: 'stretch'
              }}
            >
              <ProductCard {...p} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;