const React = require('react')

class Show extends React.Component {
    render() {
        const fruit = this.props.fruit;
    return (
        <div>
            <h1>Show Page</h1>
            <p>  The {fruit.name}is {fruit.color}</p>
            {fruit.readyToEat ? 'it is ready to eat':"Not Ready to Eat"}
        </div>
    );
    }
 }
 module.exports  = Show;