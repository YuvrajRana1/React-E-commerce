import React from "react";
import { Footer, Navbar } from "../components";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const productData = [
  {
    title: "Men's Clothing",
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Women's Clothing",
    image:
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Jewelry",
    image:
      "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Electronics",
    image:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ py: 5 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            About Us
          </Typography>
          <Box sx={{ maxWidth: "800px", mx: "auto", mb: 4 }}>
            <Typography variant="body1" align="center" color="text.secondary">
              Welcome to our E-commerce platform where style meets technology.
              We’re passionate about delivering top-tier products ranging from
              trendy fashion to cutting-edge gadgets. Our mission is to bring
              high-quality items to your doorstep while providing a seamless and
              secure shopping experience. Join our growing community of shoppers
              who value authenticity, affordability, and excellence.
            </Typography>
          </Box>
        </motion.div>

        <Typography variant="h4" align="center" sx={{ my: 4 }}>
          Our Products
        </Typography>

        <Grid container spacing={3}>
          {productData.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#1e1e1e",
                    color: "#fff",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {product.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;
