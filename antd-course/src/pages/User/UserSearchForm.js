import {Form, Row, Col, Input, Button, Icon,Pagination} from 'antd';
import  React,{Component} from 'react';
 
@Form.create()
export default class UserSearchForm extends Component {
    state = {
      expand: false,
      data:{
        username:'',
        contactPhone:'',
      }
    };
  
  
    handleSearch = (e) => {
      e.preventDefault();
      this.props.dispatch({
        type:'users/queryList',
        paylod:this.props.form.getFieldDecorator
      });
      // this.props.form.validateFields((err, values) => {
      //   if(err){

      //   }
        
      //   console.log('Received values of form: ', values);
      // });
    }
  
    handleReset = () => {
      this.props.form.resetFields();
    }
  
    toggle = () => {
      const { expand } = this.state;
      this.setState({ expand: !expand });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form layout="inline" onSubmit={this.handleSearch}>
          <Row >
            <Col span={6} key={1}>
              <Form.Item label={'Username'} style={{marginTop:10,marginLeft:10}}>
                {getFieldDecorator('username', {})(
                  <Input placeholder="placeholder" />
                )}
              </Form.Item>
            </Col>
            <Col span={6} key={2}>
            <Form.Item label={'Contact Phone'} style={{marginTop:10,marginLeft:10}}>
            {getFieldDecorator('contactPhone', {})(
                  <Input placeholder="placeholder" />
                )}
            </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right'}}>
              <Button type="primary" htmlType="submit">Search</Button>
              <Button style={{ marginLeft: 8 ,marginRight:20}} onClick={this.handleReset}>
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
      );
    }
  }
  
  

