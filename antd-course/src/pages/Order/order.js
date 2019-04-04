import { Table ,Divider} from 'antd';
import  React,{Component,Fragment} from 'react';
import { connect } from 'dva';


@connect(({ order, loading }) => ({
  order,
  loading: loading.models.order,
}))
export default class order extends Component{

  state={
    visible:false,
    data:[],
    pagination: {
      pageSize:10,
      current:1,
      total:0,
    },
  }
  columns = [
    {title: 'ID',dataIndex: 'id',key:'1',width: 50,fixed:'left'},
    {title:'订单号',dataIndex:'orderId',key:'2',width: 150,fixed:'left'},
    {title:'订单状态',dataIndex:'orderStatus',key:'3',width: 150},
    {title:'用户名称',dataIndex:'userId',key:'userId',width: 150},
    {title:'运费支付方',dataIndex:'transportPayType',key:'4',width: 150},
    {title:'运费(元)',dataIndex:'transportFee',key:'5',width: 150},
    {title:'是否代收',dataIndex:'isCollectAmount',key:'6',width: 150},
    {title:'代收金额',dataIndex:'collectionAmount',key:'7',width: 150},
    {title:'接单人',dataIndex:'operatorId',key:'8',width: 150},
    {title:'运输方式',dataIndex:'transportMethod',key:'9',width: 150},
    {title:'是否需打包',dataIndex:'isPackaging',key:'10',width: 150},
    {title:'包装费',dataIndex:'packagingFee',key:'11',width: 150},
    {title:'创单时间',dataIndex:'dataChangeCreateTime',key:'12',width: 150},
    {
      title:'操作',
      dataIndex:'',
      key:'operation',
      fixed:'right',
      width:150, 
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.handleUpdateModalVisible(true, record)}>修改</a>
          <Divider type="horize" />
          <a href="">删除</a>
        </Fragment>
      ),
    },
  ];
   

  handleUpdateModalVisible=(flag,record)=>{
    this.setState({
      visible:true
    })
  }

  componentDidMount(){
    this.queryList();
  }

  queryList=()=>{
    const {dispatch} = this.props;
    dispatch({
      type:'order/queryList',
      payload:{
        ...this.state.pagination
      }
    })
  }

  render(){
    const {data,pagination} =this.state;
    return(
      <Table 
      columns={this.columns}
      dataSource={data}
      pagination={pagination}
      scroll={{ x: 2000}}
      />
    )
  };
}


