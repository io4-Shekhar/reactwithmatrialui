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
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((item, index) => {
        console.log("1", item);
        return (
          <Box sx={{ height: "", margin: "4%", borderRadius: "10%" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 140 }} image={item.image} />
              <CardContent style={{ display: "flex", flexWrap: "wrap" }}>
                <Typography gutterBottom variant="h5" component="div">
                  <h3> City: {item.address.city}</h3>
                </Typography>
                <h style={{ color: "blue" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    CompanyName:{item.company.name}
                  </Typography>
                </h>
                <Typography gutterBottom variant="h5" component="div">
                  Name:{item.firstName} {item.lastName}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Age: {item.age}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Gender: {item.gender}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Bloodgroup: {item.bloodGroup}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Currency:{item.bank.currency}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Address: {item.address.address}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Email: {item.email}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Phone: {item.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
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
