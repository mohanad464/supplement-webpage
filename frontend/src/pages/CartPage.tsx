import { Box, Button, Container, Typography } from "@mui/material"

const CartPage = () => {
  return (
    <Container fixed sx={{ mt: 2 }}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Typography variant="h4">My Cart</Typography>
        <Button>Clear Cart</Button>
      </Box>

        <Typography>
          Cart is empty. Please start shopping and add items first.
        </Typography>
    </Container>
  )
}

export default CartPage