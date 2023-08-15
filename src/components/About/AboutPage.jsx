import Card from '../Shared/Card';

function AboutPage() {
    return (
        <>
            <Card>
                <h1>About</h1>
                <p>A react feedback app to learn and understand how a react application works</p>
                <ul>
                    <li>Creating components</li>
                    <li>Passing props to components</li>
                    <li>React hooks such as useState, useContext</li>
                    <li>React Router</li>
                </ul>
            </Card>
        </>
    )
}

export default AboutPage;