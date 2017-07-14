import React, { Component } from 'react';
import {Grid, Row, Col, Button , FormControl , FormGroup, ControlLabel, Table} from 'react-bootstrap';
import '../assets/css/GradeCal.css';
import SubjList from './SubjList';

class GradeCal extends Component {

  render() {
    return (
      <Grid>
        <Row>
            <Col md={3} mdOffset={3} xs={4} xsOffset={2}>
                <FormGroup>
                    <ControlLabel>CA</ControlLabel>
                    <FormControl type='number' placeholder='CA'/>
                </FormGroup>
            </Col>
            <Col md={3} xs={4}>
                <FormGroup>
                    <ControlLabel>GPA</ControlLabel>
                    <FormControl type='number' placeholder='GPA'/>
                </FormGroup>
            </Col>
        </Row>
        <hr/>
        <SubjList/>
      </Grid>
    );
  }
}

class Subject extends Component {

  render(){
    return(
      <tr>
          <td><FormControl type='text' placeholder='Subject Name'/></td>
          <td>
            <FormControl componentClass='select' placeholder='Credit'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </FormControl>
          </td>
          <td>
              <FormControl componentClass='select' placeholder='Credit'>
                <option value='4'>A</option>
                <option value='3.5'>B+</option>
                <option value='3'>B</option>
                <option value='2.5'>C+</option>
                <option value='2'>C</option>
                <option value='1.5'>C+</option>
                <option value='1'>D</option>
            </FormControl>
          </td>
          <td>
              <Button bsStyle='danger' className='delete-button' type='submit' value={this.props.index} onClick={this.props.removeSubject}>{this.props.index}</Button>
          </td>
      </tr>
    );
  }
}


export default GradeCal;