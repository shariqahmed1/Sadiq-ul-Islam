import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import InputBase from "@material-ui/core/InputBase";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import HeadsetIcon from "@material-ui/icons/Headset";
import EventIcon from "@material-ui/icons/Event";
import ClearIcon from "@material-ui/icons/Clear";
import { withRouter } from "react-router-dom";
import {
  bookDetails,
  bayanDetails,
  eventDetails,
  personalityDetails
} from "../../redux/actions/actions";
import { store } from "../../redux/store/store";

const styles = {
  appBar: {
    position: "relative",
    backgroundColor: "#fff",
    color: "#643094"
  },
  flex: {
    flex: 1
  },
  setPadding: {
    padding: 10
  },
  inputContainer: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    borderBottom: "2px solid #643094"
  },
  input: {
    marginLeft: 8,
    flex: 1,
    padding: 10
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SerachBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: [],
      searchTxt: "",
      result: []
    };
    this.handleClose = this.handleClose.bind(this);
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return { open: nextProps.overlayShow };
  }

  handleClose() {
    this.props.searchBar(false);
  }

  componentDidMount() {
    this.getStatesFromRedux();
    store.subscribe(() => this.getStatesFromRedux());
  }

  getStatesFromRedux = () => {
    let { AuthReducer } = store.getState();
    let bayans = AuthReducer
      ? AuthReducer.bayans
        ? AuthReducer.bayans
        : []
      : [];

    let books = AuthReducer ? (AuthReducer.books ? AuthReducer.books : []) : [];

    let events = AuthReducer
      ? AuthReducer.events
        ? AuthReducer.events
        : []
      : [];

    let personalities = AuthReducer
      ? AuthReducer.personalities
        ? AuthReducer.personalities
        : []
      : [];

    this.setState({
      data: [...bayans, ...books, ...events, ...personalities]
    });
  };

  searchItems = e => {
    let { data } = this.state;
    const searchTxt = e.target.value;
    const result = data.filter(item => {
      const lowerItem = item.title
        ? item.title.toString().toLowerCase()
        : item.name.toString().toLowerCase();
      const lowerText = searchTxt.toLowerCase().trim();
      return lowerItem.indexOf(lowerText) !== -1;
    });
    this.setState({ result, searchTxt });
  };

  handleListItemClick = (data, searchType) => {
    if (searchType === "books") {
      store.dispatch(bookDetails(data));
      this.props.history.push("/book-details");
    } else if (searchType === "bayans") {
      store.dispatch(bayanDetails(data));
      this.props.history.push("/bayan-details");
    } else if (searchType === "personalities") {
      store.dispatch(personalityDetails(data));
      this.props.history.push("/personality-details");
    } else {
      store.dispatch(eventDetails(data));
      this.props.history.push("/event-details");
    }
  };

  render() {
    const { classes } = this.props;
    const { result, searchTxt } = this.state;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Sadiq ul Islam
              </Typography>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              className={classes.setPadding}
              item
              lg={6}
              md={8}
              sm={12}
              xs={12}
            >
              <div className={classes.inputContainer} elevation={1}>
                <InputBase
                  className={classes.input}
                  placeholder="Search"
                  value={searchTxt}
                  onChange={e => this.searchItems(e)}
                />
                {searchTxt && (
                  <IconButton
                    className={classes.iconButton}
                    aria-label="clear"
                    onClick={() => this.setState({ searchTxt: "" })}
                  >
                    <ClearIcon />
                  </IconButton>
                )}
              </div>
              {searchTxt && (
                <List>
                  {result.length > 0 ? (
                    result.map((v, i) => {
                      return (
                        <ListItem
                          key={i + "-searches"}
                          button
                          onClick={() =>
                            this.handleListItemClick(v, v.searchType)
                          }
                        >
                          <ListItemIcon>
                            {v.searchType === "books" ? (
                              <LibraryBooksIcon />
                            ) : v.searchType === "bayans" ? (
                              <HeadsetIcon />
                            ) : v.searchType === "personalities" ? (
                              <PersonOutlineIcon />
                            ) : (
                              <EventIcon />
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              v.searchType === "personalities"
                                ? v.name
                                : v.title
                            }
                            secondary={
                              v.searchType === "books"
                                ? v.author
                                : v.searchType === "bayans"
                                ? v.speecherName
                                : v.searchType === "personalities"
                                ? "personality"
                                : v.type + " event"
                            }
                          />
                        </ListItem>
                      );
                    })
                  ) : (
                    <p
                      style={{
                        textAlign: "center",
                        color: "red",
                        fontSize: 16
                      }}
                    >
                      No search found for " {searchTxt} "
                    </p>
                  )}
                </List>
              )}
            </Grid>
          </Grid>
        </Dialog>
      </div>
    );
  }
}

SerachBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(SerachBox));
