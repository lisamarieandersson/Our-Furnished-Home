import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

function ShoppingBagCard() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const { items } = useShoppingCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
      };
    
    const handleRemoveQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
        };

    return (
        <Container maxWidth= {isSmallScreen ? 'sm' : 'md'}>
            <Container sx={{
                display: 'flex',
                margin: '1rem',
                padding: '0px !important'
            }}>
                <Box sx={{
                    height: '2rem',
                    width: '2rem',
                    borderRadius: '5rem',
                    display: 'flex',
                    background: theme.palette.primary.main,
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}><Typography variant="h6">1</Typography></Box>
                <Typography variant="h6" marginLeft={'0.5rem'}>Shopping bag</Typography>
            </Container>
            <Divider sx={{
                backgroundColor: theme.palette.primary.main,
                marginBottom: '1rem',
            }}></Divider>
            {items.map((CartItem) => (
                <Card 
                    key = {CartItem.id}
                    sx={{
                        display: 'flex',
                        margin: '1rem',
                        boxShadow: 'none',
                        position: 'relative',
                    }}>
                    <CardMedia component='img' image={CartItem.image} sx={{
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
                            }}>{CartItem.title}</Typography>
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
                                     <Button
                                        variant="text"
                                        onClick={handleRemoveQuantity}
                                        sx={{
                                        fontSize: "1.3rem",
                                        color: (theme) => theme.palette.text.primary,
                                        }}
                                    >
                                        -
                                    </Button>
                                    <Typography variant="subtitle1">{quantity}</Typography>
                                    <Button
                                        variant="text"
                                        onClick={handleAddQuantity}
                                        sx={{
                                        fontSize: "1.3rem",
                                        color: (theme) => theme.palette.text.primary,
                                        }}
                                        data-cy="product-buy-button"
                                    >
                                        +
                                    </Button>
                                </CardActions>
                            </Container>
                            <CardContent sx={{
                                padding: '0px !important',
                                width: '8rem',
                                textAlign: 'right',
                            }}>
                                <Typography sx={{fontSize: isSmallScreen ? '0.8rem' : '1rem',}}>{CartItem.price} SEK</Typography>
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
            <Divider sx={{
                backgroundColor: theme.palette.primary.main,
                marginBottom: '1rem',
            }}></Divider>
        </Container>
    )
}

export default ShoppingBagCard;