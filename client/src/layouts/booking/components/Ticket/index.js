import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useMaterialUIController } from "context";
import Grid from "@mui/material/Grid";
import { IconButton, Divider } from "@mui/material";
import { useState } from "react";
import { AccessTime } from "@mui/icons-material";

function Ticket({
  srcId,
  srcCity,
  destId,
  destCity,
  departure,
  arrival,
  duration,
  fare,
  departureDate,
  flightDateId,
  numRows,
  numCols,
  noGutter,
  flightId,
  delay,
  srcOffset,
  destOffset,
}) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const ticketDetails = (
    <Grid
      container
      display="flex"
      // direction="column"
      justifyContent="space-around"
      // alignItems="center"
      spacing={0}
      pt={2}
    >
      <Grid item xs={12}>
        <Divider
          orientation="horizontal"
          sx={{ mx: 10, height: "1px", background: "gray" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        // md={4}
        display="flex"
        alignItems="center"
        justifyContent={"center"}
      >
        <MDTypography fontWeight="bold" fontSize="medium">
          SRC&nbsp;-&nbsp;
        </MDTypography>
        <MDTypography fontWeight="normal" color="secondary" fontSize="medium">
          {`${srcCity}`}
        </MDTypography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        // md={4}
        display="flex"
        alignItems="center"
        justifyContent={"center"}
      >
        <MDTypography fontWeight="bold" fontSize="medium">
          DEST&nbsp;-&nbsp;
        </MDTypography>
        <MDTypography fontWeight="normal" color="secondary" fontSize="medium">
          {`${destCity}`}
        </MDTypography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        // md={4}
        display="flex"
        // alignItems="center"
        justifyContent={"center"}
      >
        <MDTypography fontWeight="bold" fontSize="medium">
          FLIGHT ID&nbsp;-&nbsp;
        </MDTypography>
        <MDTypography fontWeight="normal" color="secondary" fontSize="medium">
          {`${flightId}`}
        </MDTypography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        // md={4}
        display="flex"
        // alignItems="center"
        justifyContent={"center"}
      >
        <MDTypography fontWeight="bold" fontSize="medium">
          FARE&nbsp;-&nbsp;
        </MDTypography>
        <MDTypography fontWeight="normal" color="secondary" fontSize="medium">
          &#8377; {`${fare}`}
        </MDTypography>
      </Grid>
    </Grid>
  );

  return (
    <MDBox
      bgColor={darkMode ? "transparent" : "grey-200"}
      borderRadius="lg"
      p={2}
      mb={noGutter ? 0 : 1}
      mt={1}
    >
      <Grid
        container
        // component="li"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        spacing={5}
      >
        <Grid item display="flex">
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <EventAvailableIcon />
              </ListItemIcon>
              <ListItemText sx={{ ml: -3 }}>
                <Grid display="flex">
                  <MDTypography variant="h6" fontWeight="medium">
                    Date of Departure: &nbsp;
                  </MDTypography>
                  <MDTypography variant="h6" fontWeight="light">
                    {departureDate}
                  </MDTypography>
                </Grid>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item display="flex">
          <List>
            <ListItem disablePadding>
              <ListItemText sx={{ ml: -3 }}>
                <Grid display="flex">
                  <MDTypography variant="h6" fontWeight="medium">
                    Flight ID: &nbsp;
                  </MDTypography>
                  <MDTypography variant="h6" fontWeight="light">
                    {flightId}
                  </MDTypography>
                </Grid>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Divider
        orientation="horizontal"
        sx={{ mx: 10, height: "1px", background: "gray" }}
      />
      <Grid
        container
        // component="li"
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        // mx="auto"
      >
        <Grid
          item
          lg={2}
          sm={3}
          xs={7}
          display="flex"
          alignItems="center"
          flexDirection={"column"}
        >
          <MDTypography fontWeight="medium">{srcId}</MDTypography>
          <MDTypography variant="h4" fontWeight="bold" sx={{ mr: -4, ml: 2 }}>
            {departure}
            <MDTypography
              variant="overline"
              verticalAlign="super"
              sx={{ fontSize: "0.6rem" }}
            >
              {srcOffset[0] !== "-"
                ? `(+${srcOffset.substring(0, 5)})`
                : `(${srcOffset.substring(0, 6)})`}
            </MDTypography>
          </MDTypography>
          <MDTypography
            variant="caption"
            color={delay !== "00:00:00" ? "error" : "success"}
          >
            {delay !== "00:00:00" ? `Delayed by ${delay}` : `No delay`}
          </MDTypography>
          <MDTypography variant="h6" fontWeight="light">
            {srcCity}
          </MDTypography>
        </Grid>

        <Grid
          item
          lg={2}
          sm={3}
          xs={7}
          display="flex"
          alignItems="center"
          flexDirection={"column"}
          justifyContent={"center"}
        >
          {/* <Divider flexItem> */}
          <AccessTime />
          <MDTypography variant="h6" fontWeight="medium" color="secondary">
            {`${duration.substring(0, 2)} hr ${duration.substring(3, 5)} min`}
          </MDTypography>
          {/* </Divider> */}
        </Grid>

        <Grid
          item
          lg={2}
          sm={3}
          xs={7}
          display="flex"
          alignItems="center"
          flexDirection={"column"}
        >
          <MDTypography fontWeight="medium">{destId}</MDTypography>
          <MDTypography variant="h4" fontWeight="bold" sx={{ mr: -4, ml: 2 }}>
            {arrival}
            <MDTypography
              variant="overline"
              verticalAlign="super"
              sx={{ fontSize: "0.6rem" }}
            >
              {destOffset[0] !== "-"
                ? `(+${destOffset.substring(0, 5)})`
                : `(${destOffset.substring(0, 6)})`}
            </MDTypography>
          </MDTypography>
          <MDTypography variant="h6" fontWeight="light">
            {destCity}
          </MDTypography>
        </Grid>
        <Grid
          item
          sm={3}
          xs={7}
          display="flex"
          alignItems="center"
          flexDirection={"column"}
        >
          <MDTypography variant="h6" fontWeight="regular">
            FARE
          </MDTypography>
          <MDTypography fontWeight="medium">&#8377; {fare}</MDTypography>
        </Grid>
      </Grid>
    </MDBox>
  );
}

// Setting default values for the props of Bill
Ticket.defaultProps = {
  noGutter: false,
};

export default Ticket;
