import React from 'react'
import Users from '../Users'
import axios from 'axios';

console.time('class');
class UsersContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then((itr) => {
                this.setState({
                    users: itr.data.data,
                })
            })
    }
    render() {
        console.timeEnd('class');
        return <Users users={this.state.users} />;
    }
}

export default UsersContainer;
























// class ReactComponent {
//         constructor(this) {
//     }
//     component.on('componentDidMount', () => {
//         componentDidMount?(): void;
//     })
//     component.on('shouldComponentUpdate', () => {
//         shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
//     })

//     component.on('componentDidUpdate', () => {
//         componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
//     })

//     component.on('getSnapshotBeforeUpdate', () => {
//         getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
//     })

//     component.on('componentWillUnmount', () => {
//         componentWillUnmount?(): void;
//     })
// }
