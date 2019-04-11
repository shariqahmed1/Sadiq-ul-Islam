import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = {
    appBar: {
        position: 'relative',
        backgroundColor: '#fff',
        color: '#643094'
    },
    flex: {
        flex: 1,
    },
    setPadding: {
        padding: 10,
    },
    inputContainer: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
        borderBottom: '2px solid #643094',
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class SerachBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.handleClose = this.handleClose.bind(this);
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        return { open: nextProps.overlayShow };
    }

    handleClose() {
        this.props.searchBar(false)
    }

    render() {
        const { classes } = this.props;
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
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid className={classes.setPadding} item lg={6} md={8} sm={12} xs={12}>
                            <div className={classes.inputContainer} elevation={1}>
                                <InputBase className={classes.input} placeholder="Search" />
                                <IconButton className={classes.iconButton} aria-label="Search">
                                    <SearchIcon />
                                </IconButton>
                            </div>
                            <List>
                                <ListItem
                                    button
                                    selected={this.state.selectedIndex === 0}
                                    onClick={event => this.handleListItemClick(event, 0)}
                                >
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" secondary={'Secondary text'} />
                                </ListItem>
                                <ListItem
                                    button
                                    selected={this.state.selectedIndex === 1}
                                    onClick={event => this.handleListItemClick(event, 1)}
                                >
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Drafts" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Dialog>
            </div>
        );
    }
}

SerachBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SerachBox);
