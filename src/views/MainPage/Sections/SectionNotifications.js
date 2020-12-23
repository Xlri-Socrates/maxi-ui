import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="notifications">
      <h2 className={classes.title}>Live Notifications</h2>
      <SnackbarContent
        message={
          <span>
            <b>INFO ALERT:</b> Event {"1"} is Live{"."} Register Now{"."} 
          </span>
        }
        close
        color="info"
        icon="info_outline"
      />
      <SnackbarContent
        message={
          <span>
            <b>INFO ALERT:</b> Event {"2"} is Live{"."} Register Now{"."} 
          </span>
        }
        close
        color="info"
        icon="info_outline"
      />
      
      <Clearfix />
    </div>
  );
}
