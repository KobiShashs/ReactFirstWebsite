import { Button, Slider, Typography } from "@material-ui/core";
import { SyntheticEvent } from "react";

import Box from "@material-ui/core/Box";
import "./MUI.css";
import { Alert } from "@material-ui/lab";

function MUI(): JSX.Element {
  return (
    <div className="MUI">
      <h2>MUI</h2>
      <Box color="text.primary">
        <Button>Click</Button>
      </Box>
      <Box bgcolor="error.main" color="primary.main">
        A
      </Box>
      <Box color="secondary.main">B</Box>
      <Box color="error.main">C</Box>
      <Box color="success.main">D</Box>

      <h3>Responsive h3</h3>
      <h4>Responsive h3</h4>
      <h5>Responsive h3</h5>
      <Typography variant="h3">Responsive h3</Typography>
      <Typography variant="h4">Responsive h4</Typography>
      <Typography variant="h5">Responsive h5</Typography>

      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </div>
  );
}

export default MUI;
