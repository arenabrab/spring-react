import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class GoogleButton extends Component {

    state = {};

    constructor(props){
        super(props);
        this.state = { message: "hello" };
    }

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