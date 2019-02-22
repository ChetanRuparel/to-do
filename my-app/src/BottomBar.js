import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconMenuExampleControlled from './PopOver'
import RaisedButton from 'material-ui/RaisedButton';
import TodoItems from './todoItems'
import SimpleModalWrapped from './model.js'


const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  addTask() {
 console.log('adding task');

  };

  render() {
    const style = {
    };


    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <IconMenuExampleControlled />
          <SimpleModalWrapped />
          <IconMenuExampleControlled />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;
