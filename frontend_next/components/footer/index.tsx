// import Container from "../_systemUI/container";
// import GridContainer from "../_systemUI/gridContainer";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Footer = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      style={{ background: "#ad3c3c", height: "10vh" }}
    >
      <Grid item xs />
      <Grid item xs></Grid>
      <Grid item xs></Grid>
      <Grid item xs />
    </Grid>
  );
};

export default Footer;
