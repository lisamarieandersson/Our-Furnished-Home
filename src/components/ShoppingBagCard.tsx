import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { products } from "../../data";

function ShoppingBagCard() {
    return (
        <Container >
            {products.map((product) => (
                <Card sx={{
                    maxWidth: 'xl',
                    display: 'flex',
                    p: '0'
                }}>
                    <CardMedia sx={{
                        width: '10rem'
                    }} component='img' image={product.image} />
                    <Box>
                        <CardContent sx={{
                            padding: 0,
                            marginLeft: '1rem',
                            marginTop: '2rem',
                        }}>
                            <Typography variant="h5" data-cy="product-title" sx={{
                                p: '0.2rem'
                            }}>{product.title}</Typography>
                        </CardContent>                            
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <CardContent sx={{
                                    padding: 0,
                                    margin: '0.5rem 1rem',
                            }}>
                                <Typography>Quantity</Typography>   
                            </CardContent>
                            <CardActions>
                                <Button variant='text' color="secondary" size="small" onClick={() => (product)}>-</Button>
                                    <Typography>{/*item.quantity*/}{'1'}</Typography>
                                <Button variant='text' color="secondary" size="small" onClick={() => (product)}>+</Button>
                            </CardActions>
                            <CardContent sx={{
                                padding: 0,
                                margin: '1rem',
                            }}>
                                <Typography>{product.price} SEK</Typography>
                            </CardContent>
                        </Box>
                    </Box>
                </Card>
            ))}
        </Container>
    )
}

export default ShoppingBagCard;