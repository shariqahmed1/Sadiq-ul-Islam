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
import InboxIcon from "@material-ui/icons/Inbox";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import HeadsetIcon from "@material-ui/icons/Headset";
import EventIcon from "@material-ui/icons/Event";
import ClearIcon from "@material-ui/icons/Clear";
import { FIRESTORE } from "../../constants/firebase/firebase";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  bookDetails,
  bayanDetails,
  eventDetails
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
    this.fetchData();
  }

  fetchData() {
    this.fetchBayans();
  }

  fetchBayans() {
    FIRESTORE.collection("bayans")
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          let arr = [];
          snapshot.forEach(doc => {
            var obj = doc.data();
            obj.id = doc.id;
            obj.searchType = "bayans";
            arr.push(obj);
          });
          this.setState({ data: [arr, ...this.state.data] });
        }
      })
      .then(() => {
        this.fetchBooks();
      })
      .then(() => {
        this.fetchEvents();
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  fetchBooks() {
    FIRESTORE.collection("books")
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          let arr = [];
          snapshot.forEach(doc => {
            var obj = doc.data();
            obj.id = doc.id;
            obj.searchType = "books";
            arr.push(obj);
          });
          this.setState({ data: [arr, ...this.state.data] });
        }
      });
  }

  fetchEvents() {
    FIRESTORE.collection("events")
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          let arr = [];
          snapshot.forEach(doc => {
            var obj = doc.data();
            obj.id = doc.id;
            obj.searchType = "events";
            arr.push(obj);
          });
          this.setState({ data: [arr, ...this.state.data] });
        }
      });
  }

  searchItems = e => {
    let { data } = this.state;
    const makeData = data.flat();
    const searchTxt = e.target.value;
    const result = makeData.filter(item => {
      const lowerItem = item.title.toString().toLowerCase();
      const lowerText = searchTxt.toLowerCase();
      return lowerItem.substring(0, lowerText.length).indexOf(lowerText) !== -1;
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
    } else {
      store.dispatch(eventDetails(data));
      this.props.history.push("/event-details");
    }
  };

  render() {
    console.clear();
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
                  onChange={e => this.searchItems(e)}
                />
                {searchTxt && (
                  <IconButton
                    className={classes.iconButton}
                    aria-label="clear"
                    onChange={() => this.setState({ searchTxt: "" })}
                  >
                    <ClearIcon />
                  </IconButton>
                )}
              </div>
              <List>
                {searchTxt &&
                  (result.length > 0 ? (
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
                            ) : (
                              <EventIcon />
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={v.title}
                            secondary={
                              v.searchType === "books"
                                ? v.author
                                : v.searchType === "bayans"
                                ? v.speecherName
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
                      No search found for "{searchTxt}"
                    </p>
                  ))}
                {/* <ListItem
                  button
                  selected={this.state.selectedIndex === 1}
                  onClick={event => this.handleListItemClick(event, 1)}
                >
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItem> */}
              </List>
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
