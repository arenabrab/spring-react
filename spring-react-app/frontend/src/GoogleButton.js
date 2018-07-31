import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';


class GoogleButton extends Component {

    state = {};

    constructor(props){
        super(props);
        this.state = { message: "hello" };
    }

    componentDidMount(){
        // this.setState({message: "hi"});
    };

    dbConnection = () => {
        fetch('/DBConnection')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };

    testMe = () => {
        this.setState({message: "test:"});
        return this.state.message;
    };

    render(){
        return (
            <div>
                <Button variant={"contained"} color={"primary"}>{this.state.message}</Button>
            </div>
        );
    }

} export default GoogleButton;

// componentDidMount() {}
//
// connection = () => {
//     fetch('/DBConnection')
//         .then(response => response.text())
//         .then(message => {
//             this.setState({message: message});
//         });
// };
//
//
// const styles = theme => ({
//     button: {
//         margin: theme.spacing.unit,
//     },
//     input: {
//         display: 'none',
//     },
// });
//
//
//
//
// function GoogleButton(props) {
//     const {classes} = props;
//     let state = {};
//     this.setState({message: "Click it"});
//     return (
//         <div>
//             <Button variant={"contained"} color={"primary"} className={classes.button} href={"/DBConnection"}>{this.state.message}</Button>
//         </div>
//     );
// }
//
// GoogleButton.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(GoogleButton);