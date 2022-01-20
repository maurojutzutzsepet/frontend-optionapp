import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";
import { useStylesList } from "./sytles";

//componete para resultados de busqueda en youtube
export default function ListResults({ searchResults }) {
  const classes = useStylesList();

  return (
    <div>
      <div className={classes.divPanel}>
        {searchResults.map((item) => (
          <React.Fragment key={item.id.videoId}>
            <Grid
              container
              xs={12}
              justifyContent="center"
              alignContent="center"
              item
              className={classes.gridStyle}
            >
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image={item.snippet.thumbnails.medium.url}
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="subtitle1">
                      {item.snippet.title}
                    </Typography>

                    <Typography variant="caption">
                      {item.snippet.channelTitle}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {item.snippet.description.substring(0, 55) + "..."}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
