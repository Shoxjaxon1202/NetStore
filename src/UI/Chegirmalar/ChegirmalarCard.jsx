import React from "react";
import "./chegirmalar.scss";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const ChegirmalarCard = ({
  id,
  title,
  price,
  description,
  image,
  addGood,
  name,
  icon,
  quantity,
  category,
}) => {
  return (
    <Card className="chegirmalar_card" sx={{ maxWidth: 345 }}>
      <NavLink to={`/elementItem/${id}`}>
      <CardMedia sx={{ height: 180 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title.slice(0, 30)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 50)}
          </Typography>
        </CardContent>
      </NavLink>
      <CardActions>
        <Button size="small">{price}$</Button>

        <Button
          onClick={() => {
            addGood(id, name, price, title, quantity, image, category);
          }}
          size="small">
          Add
          <Add />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ChegirmalarCard;
