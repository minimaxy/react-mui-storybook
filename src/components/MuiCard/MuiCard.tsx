import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

// type Props = {
//   title: string;
// };
// { title }: Props

export const MuiCard = (props: any) => {
  const { title = "タイトル", ...rest } = props;
  console.log(props);
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="unsplash image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
