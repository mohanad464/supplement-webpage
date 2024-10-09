import {
  Box,
  Button,
  Container,
  Typography,
  Divider,
  Paper,
  ButtonGroup,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "../context/Auth/Cart/CartContext";

const CartPage = () => {
  const {
    cartItems,
    totalAmount,
    updateItemInCart,
    removeItemInCart,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const handleQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      return;
    }
    updateItemInCart(productId, quantity);
  };

  const handleremoveItem = (productId: string) => {
    removeItemInCart(productId);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const renderCartItems = () => (
    <Box display="flex" flexDirection="column" gap={4}>
      {cartItems.map((item) => (
        <Box
          key={item.productId}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            border: 1,
            borderColor: "#f2f2f2",
            borderRadius: 5,
            padding: 1,
          }}
        >
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <img src={item.image} alt={item.title} width={50} />
            <Box>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>
                {item.quantity} x {item.unitPrice} EGP
              </Typography>
              <Button
                style={{ color: "#C426DC" }}
                onClick={() => handleremoveItem(item.productId)}
              >
                Remove Item
              </Button>
            </Box>
          </Box>
          <ButtonGroup
            variant="contained"
            aria-label="Quantity adjust"
            sx={{
              "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                borderRight: "none", // Remove border between buttons
              },
            }}
          >
            <Button
              sx={{
                backgroundColor: "#C426DC",
                "&:hover": {
                  backgroundColor: "#a01eb6",
                },
              }}
              onClick={() => handleQuantity(item.productId, item.quantity - 1)}
            >
              -
            </Button>
            <Button
              sx={{
                backgroundColor: "#C426DC",
                "&:hover": {
                  backgroundColor: "#a01eb6",
                },
              }}
              onClick={() => handleQuantity(item.productId, item.quantity + 1)}
            >
              +
            </Button>
          </ButtonGroup>
        </Box>
      ))}
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography variant="h4">
          Total Amount: {totalAmount.toFixed(2)} EGP
        </Typography>
        <Button
          sx={{
            backgroundColor: "#C426DC",
            "&:hover": {
              backgroundColor: "#a01eb6",
            },
          }}
          variant="contained"
          onClick={handleCheckout}
        >
          Go To Checkout
        </Button>
      </Box>
    </Box>
  );

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
            <ShoppingCartIcon sx={{ fontSize: 30, color: "#C426DC" }} />
            <Typography variant="h4" component="h1">
              My Cart
            </Typography>
          </Box>
          <Button
            startIcon={<DeleteOutlineIcon />}
            color="error"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {cartItems.length ? (
          renderCartItems()
        ) : (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 60, color: "#ccc" }} />
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
                "&:hover": {
                  backgroundColor: "#a01eb6",
                },
              }}
            >
              Browse Products
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default CartPage;
