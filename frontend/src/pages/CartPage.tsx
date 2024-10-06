import { Box, Button, Container, Typography, Divider, Paper } from "@mui/material";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartPage = () => {
  // You can replace this with your actual cart state management
  const isCartEmpty = true;

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={1} sx={{ p: 3 }}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <ShoppingCartIcon sx={{ fontSize: 30, color: '#C426DC' }} />
            <Typography variant="h4" component="h1">My Cart</Typography>
          </Box>
          <Button 
            startIcon={<DeleteOutlineIcon />}
            color="error"
            disabled={isCartEmpty}
          >
            Clear Cart
          </Button>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {isCartEmpty ? (
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 60, color: '#ccc' }} />
            <Typography variant="h6" color="text.secondary">
              Your cart is empty
            </Typography>
            <Typography color="text.secondary">
              Start shopping and add items to your cart
            </Typography>
            <Button 
              component={Link} 
              to="/products"
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#C426DC",
                '&:hover': {
                  backgroundColor: '#a01eb6'
                }
              }}
            >
              Browse Products
            </Button>
          </Box>
        ) : (
          // Add your cart items list here
          <Box>
            {/* Cart items will go here */}
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default CartPage;