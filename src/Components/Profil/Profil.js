import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import avatar from "../../images/avatar.jpg";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Profil = (props) => {
  //   console.log(props.location.state.contact.name);
  const contact = props.location.state.contact;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          <img src={avatar} style={{ width: 200 }} />
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {contact.name}
        </Typography>
        <Typography variant="h5" component="div">
          {contact.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {contact.phone}
        </Typography>
        <Typography variant="body2">
          {contact.address.street}
          <br />
          {contact.address.city}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default Profil;
