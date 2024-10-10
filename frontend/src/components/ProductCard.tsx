import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useCart } from "../context/Auth/Cart/CartContext";

interface Props {
  _id: string;
  title: string;
  image: string;
  price: string;
}

export default function ProductCard({ _id, title, image, price }: Props) {
  const { addItemToCart } = useCart();

  return (
    <Card sx={{ 
      width: 300,
      height: '100%', // Make card fill full height of grid item
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ 
          position: 'relative', 
          height: 200, 
          width: '100%', 
          overflow: 'hidden',
          borderRadius: 1
        }}>
          <img
            src={image}
            alt={title}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
              OObjectFit:'contain',
              display:'flex'
            }}
          />
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1 }}> {/* This will take up remaining space */}
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            height: '3em', // Fixes height for title
            lineHeight: '1.5em'
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price} EGP
        </Typography>
      </CardContent>

      <CardActions sx={{ padding: 2, paddingTop: 0 }}>
        <Button
          fullWidth
          sx={{
            backgroundColor: "#C426DC",
            "&:hover": {
              backgroundColor: "#a01eb6",
            },
          }}
          variant="contained"
          size="small"
          onClick={() => addItemToCart(_id)}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}