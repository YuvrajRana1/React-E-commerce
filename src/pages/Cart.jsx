import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" gutterBottom>
          Your Cart is Empty
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              mx: 2,
              borderRadius: "50px",
              paddingX: 3,
              paddingY: 1.5,
              textTransform: "none",
              fontSize: "1.1rem",
              "&:hover": {
                backgroundColor: "#1976d2",
                color: "white",
                boxShadow: 2,
              },
            }}
          >
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Button>
        </Link>
      </Box>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });

    return (
      <>
        <section className="gradient-custom">
          <Box sx={{ py: 5 }}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={8}>
                <Card sx={{ boxShadow: 3, bgcolor: "#1e1e1e", borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h5" color="primary" align="center">
                      Item List
                    </Typography>
                    {state.map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Grid container spacing={3} alignItems="center">
                          <Grid item xs={4} sm={3}>
                            <img
                              src={item.image}
                              alt={item.title}
                              width={100}
                              height={75}
                              style={{ borderRadius: "8px" }}
                            />
                          </Grid>
                          <Grid item xs={8} sm={6}>
                            <Typography variant="body1" color="text.primary">
                              {item.title}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Button
                                variant="outlined"
                                color="error"
                                onClick={() => removeItem(item)}
                                sx={{
                                  borderRadius: "50px",
                                  "&:hover": {
                                    backgroundColor: "#f44336",
                                    color: "white",
                                    boxShadow: 2,
                                  },
                                }}
                              >
                                <i className="fas fa-minus"></i>
                              </Button>
                              <Typography variant="body2">{item.qty}</Typography>
                              <Button
                                variant="outlined"
                                color="success"
                                onClick={() => addItem(item)}
                                sx={{
                                  borderRadius: "50px",
                                  "&:hover": {
                                    backgroundColor: "#4caf50",
                                    color: "white",
                                    boxShadow: 2,
                                  },
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                        <hr />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ boxShadow: 3, bgcolor: "#1e1e1e", borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h5" color="primary" align="center" gutterBottom>
                      Order Summary
                    </Typography>
                    <Box>
                      <Typography variant="body1" color="text.primary">
                        Products ({totalItems}): <strong>${Math.round(subtotal)}</strong>
                      </Typography>
                      <Typography variant="body1" color="text.primary">
                        Shipping: <strong>${shipping}</strong>
                      </Typography>
                      <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
                        Total: <strong>${Math.round(subtotal + shipping)}</strong>
                      </Typography>
                    </Box>
                    <Link to="/checkout" style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          width: "100%",
                          mt: 2,
                          borderRadius: "50px",
                          paddingX: 3,
                          paddingY: 1.5,
                          textTransform: "none",
                          fontSize: "1.2rem",
                          "&:hover": {
                            backgroundColor: "#115293",
                          },
                        }}
                      >
                        Go to Checkout
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <Typography variant="h3" align="center" gutterBottom>
          Cart
        </Typography>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
