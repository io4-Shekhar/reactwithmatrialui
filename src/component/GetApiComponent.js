import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
export default function GetApiComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setData(response?.data?.users);
        console.log("api response", response);
      })
      .catch((error) => console.log("error", error));
  }, []);

  console.log("data", data);
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", background: "skyblue" }}>
      {data.map((item, index) => {
        console.log("1", item);
        return (
          <Box sx={{ height: "98vh", margin: "34px" }}>
            <Card
              sx={{
                maxWidth: 400,
                borderRadius: "20px",
                background: "orange",
              }}
            >
              <CardMedia sx={{ height: 130 }} image={item.image} />
              <Box sx={{ height: "495px" }}>
                <CardContent style={{ display: "flex", flexWrap: "wrap" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <h style={{ color: "Blue", fontSize: "2rem" }}>
                      City: {item.address.city}
                    </h>
                  </Typography>
                  <h style={{ margin: "0px", color: "blue" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <h style={{ color: "Black" }}>CompanyName: </h>
                      {item.company.name}
                    </Typography>
                  </h>
                  <h style={{ color: "blue" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <h style={{ color: "Black" }}>Name: </h>
                      {item.firstName} {item.lastName}
                    </Typography>
                  </h>
                  <h style={{ color: "blue" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      , Age:
                      {item.age}
                    </Typography>
                  </h>
                  <h style={{ color: "blue" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <h style={{ color: "Black" }}>BirthDate: </h>
                      {item.birthDate}
                    </Typography>
                  </h>
                  <h style={{ color: "blue" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <h style={{ color: "Black" }}>Gender:</h> {item.gender}
                    </Typography>
                  </h>
                  <h style={{ color: "blue" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <typography variant="subtitle">, BloodGroup:</typography>
                      {item.bloodGroup}
                    </Typography>
                  </h>
                  <h style={{ color: "blue" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <h style={{ color: "Black" }}>Currency: </h>
                      {item.bank.currency}
                    </Typography>
                  </h>
                  <h style={{ color: "blue" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <h style={{ color: "Black" }}>Address:</h>{" "}
                      {item.address.address}
                    </Typography>
                  </h>
                  <h style={{ color: "blue" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <h style={{ color: "Black" }}>Email:</h> {item.email}
                    </Typography>
                  </h>
                  <h style={{ color: "blue" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <h style={{ color: "Black" }}>Phone:</h> {item.phone}
                    </Typography>
                  </h>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Box>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}
