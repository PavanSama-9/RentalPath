import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      redirect: false,
      products: [],
      email: '',
      url: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('userData')!=null){
    let data = JSON.parse(localStorage.getItem('userData'));
    if(data!==null){
    this.setState({ name: data.name })
    this.setState({ email: data.email })
    this.setState({ url: data.picture.data.url })
  }
  }
}
  render() {
    return (
      <div className="container">
        <div className="WelcomePage">
          <ListGroup className="listgroup">
            <ListGroupItem>Image :<img src={this.state.url} className="image" alt=""></img></ListGroupItem>
            <ListGroupItem>Welcome :-{this.state.name} </ListGroupItem>
            <ListGroupItem>Your Email Id is :- {this.state.email}</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default Home;