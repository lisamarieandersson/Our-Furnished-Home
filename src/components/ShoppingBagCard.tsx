import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { products } from "../../data";

function ShoppingBagCard() {
    return (
        <Container maxWidth= 'md'>
            {products.map((product) => (
                <Card sx={{
                    display: 'flex',
                    margin: '1rem',
                    boxShadow: 'none',
                }}>
                    <CardMedia component='img' image={product.image} sx={{
                        width: '10rem'
                    }}/>
                    <Container sx={{
                        padding: 0,
                    }}>
                        <CardContent sx={{
                            padding: 0,
                            marginLeft: '1rem',
                            marginTop: '2rem',
                        }}>
                            <Typography variant="h6" data-cy="product-title" sx={{
                                p: '0.2rem'
                            }}>{product.title}</Typography>
                        </CardContent>                            
                        <CardContent sx={{
                                padding: 0,
                                margin: '0.5rem 1rem',
                        }}>
                            <Typography variant="subtitle2">Quantity</Typography>   
                        </CardContent>
                        <Container sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 0,
                        }}>
                            <CardActions sx={{ padding: 0}}>
                                <Button variant='text' color="secondary" size="small" onClick={() => (product)}>
                                    <span className="material-symbols-outlined">remove</span> 
                                </Button>
                                    <Typography>{/*item.quantity*/}{'1'}</Typography>
                                <Button variant='text' color="secondary" size="small" onClick={() => (product)}>
                                    <span className="material-symbols-outlined">add</span>
                                </Button>
                            </CardActions>
                            <CardContent sx={{
                                padding: 0,
                                margin: '1rem',
                            }}>
                                <Typography>{product.price} SEK</Typography>
                            </CardContent>
                        </Container>
                    </Container>
                    <CardActions sx={{
                        display: 'flex',
                        alignItems: 'start',
                        padding: 0,
                    }}>
                        <Button color="secondary" size="small">
                            <span className="material-symbols-outlined" >close</span>
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Container>
    )
}

export default ShoppingBagCard;