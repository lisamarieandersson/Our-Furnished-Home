import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { products } from "../../data";

function ShoppingBagCard() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container maxWidth= {isSmallScreen ? 'sm' : 'md'}>
            {products.map((product) => (
                <Card 
                    key = {product.id}
                    sx={{
                        display: 'flex',
                        margin: '1rem',
                        boxShadow: 'none',
                        position: 'relative',
                    }}>
                    <CardMedia component='img' image={product.image} sx={{
                        width: isSmallScreen ? '6rem' : '10rem',
                    }}/>
                    <Container sx={{
                        padding: '0px !important',
                    }}>
                        <CardContent sx={{
                            padding: 0,
                            marginLeft: '1rem',
                            marginTop: isSmallScreen ? '1rem' : '2rem',
                        }}>
                            <Typography variant="h6" data-cy="product-title" sx={{
                                p: '0px !important',
                                fontSize: isSmallScreen ? '1rem' : '1.25rem',
                            }}>{product.title}</Typography>
                        </CardContent>                            
                        
                        <Container sx={{
                            display: 'flex',
                            alignItems: 'end',
                            flexDirection: isSmallScreen ? 'column' : 'row',
                            padding: '0px !important',
                        }}>
                            <Container sx={{
                                padding: '0px !important',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <CardContent sx={{
                                    padding: 0,
                                    margin: '0.2rem 1rem',
                                }}>
                                <Typography variant='subtitle2'>Quantity</Typography>   
                                </CardContent>
                                <CardActions sx={{
                                    padding: '0',
                                    marginLeft: '1rem',
                                    textAlign: 'center'
                                }}>
                                    <Button variant='text' color="secondary" size="small" onClick={() => (product)} sx={{
                                        minWidth: '0.5rem',
                                    }}>
                                        <span className="material-symbols-outlined">remove</span> 
                                    </Button>
                                        <Typography textAlign={'center'} >{/*item.quantity*/}{'1'}</Typography>
                                    <Button variant='text' color="secondary" size="small" onClick={() => (product)} sx={{
                                        minWidth: '0.5rem',
                                    }}>
                                        <span className="material-symbols-outlined">add</span>
                                    </Button>
                                </CardActions>
                            </Container>
                            <CardContent sx={{
                                padding: '0px !important',
                                width: '8rem',
                                textAlign: 'right',
                            }}>
                                <Typography sx={{fontSize: isSmallScreen ? '0.8rem' : '1rem',}}>{product.price} SEK</Typography>
                            </CardContent>
                        </Container>
                        <CardActions sx={{
                            display: 'flex',
                            alignItems: 'start',
                            padding: 0,
                            height: '2rem',
                            position: 'absolute',
                            top: '0',
                            right: '0'
                        }}>
                            <Button color="secondary" sx={{
                                minWidth: 'auto',
                            }}>
                                <span className="material-symbols-outlined" >close</span>
                            </Button>
                        </CardActions>
                    </Container>
                    
                </Card>
            ))}
        </Container>
    )
}

export default ShoppingBagCard;