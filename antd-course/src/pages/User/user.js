import { Table ,Pagination ,Button,Divider, Modal, Form,Input,DatePicker,Select, Row } from 'antd';
import  React,{Component,Fragment} from 'react';
import { connect } from 'dva';
import { Card } from 'antd-mobile';
import UserSearchForm from '../User/UserSearchForm';
import FormItem from 'antd/lib/form/FormItem';

const { Search, TextArea } = Input;



// rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
const SelectOption=Select.Option
 
@Form.create()
//@connect(mapStateToProps)
@connect(({ users, loading }) => ({
  users,
  loading: loading.models.users,
}))
export default class user extends Component{
  
columns = [
    {
      title: '收货人', width: 100, dataIndex: 'name', key: 'name', fixed: 'left',
    },
    {
      title: '年龄', width: 100, dataIndex: 'age', key: 'age', fixed: 'left',
    },
    {
      title: '收货地址', dataIndex: 'address', key: '1', width: 150,
    },
    {
      title: '联系电话', dataIndex: 'phone', key: '2', width: 150,
    },
    {
      title: '订单号', dataIndex: 'orderId', key: '3', width: 150,
    },
    {
      title: '发货人', dataIndex: 'username', key: '4', width: 150,
    },
    {
      title: '收货日期', dataIndex: 'date', key: '5', width: 150,
    },
    {
      title: '物流状态', dataIndex: 'status', key: '6', width: 150,
    },
    {
      title: '订单总额', dataIndex: 'totalFee', key: '7', width: 150,
    },
    { title: '交易额', dataIndex: 'totalFee', key: '8',width:150 },
    { title: '支付方式', dataIndex: 'payType', key: '9' ,width:150 },
    { title: '数量', dataIndex: 'number', key: '10',width:150 },
    { title: '评论', dataIndex: 'content', key: '11' },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.handleUpdateModalVisible(true, record)}>修改</a>
          <Divider type="horize" />
          <a href="">删除</a>
        </Fragment>
      ),
    },
  ];
  data = [{
    key: '1',
    name: '金山商城',
    age: 32,
    address: '广东惠州市惠阳',
    phone:'156784****',
    orderId:'6471457814',
    username:'王**',
    date:'2019-04-01',
    status:'已收货',
    totalFee:'5640.50',
    payType:'现付',
    number:'4',
    content:'价格合理，物流速度快，两天货'
  },
  {
    key: '2',
    name: '渔家',
    age: 32,
    address: '四川成都',
    phone:'1387462****',
    orderId:'6471457814',
    username:'赵某',
    date:'2019-04-03',
    status:'已完成',
    totalFee:'7000.00',
    payType:'现付',
    number:'2',
    content:'已收货，质量不错'
  }
  
  ];



  state={
    userList:[],
    pagination: {
      pageSize:10,
      current:1,
      total:20
    },
    loading: true,
    updateModalVisible: false,
    stepFormValues: {},
  };

  formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
  };
  
    

  // componentDidMount(){
  //   this.listSearch();
  // }

  // listSearch = () =>{
  //   this.props.dispatch({
  //     type:'userspace/queryList',
  //   });
  // }

  handleUpdateModalVisible = (flag, record) => {
    this.setState({
      updateModalVisible: !!flag,
      current: record,
    });
  };

  


  handleModalVisible = flag => {
    this.handleCancel();
  };

  handleCancel = () => {
    this.setState({
      updateModalVisible: false,
      stepFormValues: {},
      current:{}
    });
  }

  handleSubmit = fieldsValue => {
    const { dispatch } = this.props;
    //this.handleModalVisible(false);
    dispatch({
      type: 'users/updateOrder',
      payload: {
        name:fieldsValue.name
      },
    });


    // setTimeout(() => this.addBtn.blur(), 0);
    // form.validateFields((err, fieldsValue) => {
    //   if (err) return;
    //   this.setState({
    //     done: true,
    //   });
    //   dispatch({
    //     type: 'list/submit',
    //     payload: { id, ...fieldsValue },
    //   });
    // });
  };


  handOk=()=>{
    const {form} = this.props;
    console.log(this.props.dispatch);
    form.validateFields((err ,fieldsValue)=>{
      if(err){
        return;
      }
      form.resetFields();
      this.handleSubmit(fieldsValue);
    })
  }

  render(){
    // const {userList=[]} = this.props;
    // this.setState({userList:userList});
    const pagination = this.state.pagination;
    const { getFieldDecorator } = this.props.form;
    const { modalVisible, form, handleAdd, handleModalVisible,handleSubmit } = this.props;
    const {current={}} = this.state;

    
    return(
      <div>
        <Card >
          <UserSearchForm />
        </Card>
        <br />
        <Card>
          <Table 
            rowSelection={rowSelection} 
            columns={this.columns} 
            dataSource={this.data} 
            pagination={pagination}
            scroll={{ x: 2000}}
            />
        </Card>
        <Modal visible={this.state.updateModalVisible}
          title='编辑修改'
          destroyOnClose
          onCancel={this.handleCancel}
          onOk={this.handOk}
          width={640}
          
        >
          <Form onSubmit={this.handleSubmit} layout="inline">
            <Row>
              <FormItem label="发货方名称" {...this.formLayout}>
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入任务名称' }],
                  initialValue:current?current.name:null,
                })(<Input placeholder="请输入" />)}
              </FormItem>
            </Row>
            <Row>
              <FormItem label="联系电话" {...this.formLayout}>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: '请输入用户名' }],
                  initialValue:current?current.phone:null,
                })(
                  <Input placeholder="请输入" />
                )}
              </FormItem>
            </Row>
            <Row>
              <FormItem label="订单状态" {...this.formLayout}>
                {getFieldDecorator('status', {
                  rules: [{ required: true, message: '请设置订单状态' }],
                  initialValue: current?current.status:null,
                })(
                  <Select placeholder="请选择">
                    <SelectOption value="0">未发货</SelectOption>
                    <SelectOption value="1">运输中</SelectOption>
                    <SelectOption value="2">已完成</SelectOption>
                  </Select>
                )}
              </FormItem>
            </Row>
            <Row>
              <FormItem  label="评论" {...this.formLayout}>
                {getFieldDecorator('content', {
                  rules: [{ message: '请输入评论', required:true}],
                  initialValue: current?current.content:null,
                })(
                  <Input placeholder="请输入" />)}
              </FormItem>
            </Row>  
          </Form>
        </Modal>
      </div>
    )
  };
}

// function mapStateToProps(state) {
//   console.log('state');
//   console.log(state.userList);
//   return {
//     userList: state.userList,
//   };
// }
