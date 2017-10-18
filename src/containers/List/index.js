import React, {Component} from 'react';

import './index.less'
import Search from '../../components/Search/index'
import Computers from './Computers/index'
import Other from './Other/index'
import Phones from './Phones/index'
import Product from './Product/index'
import BackTop from '../../components/BackTop/index'

import {connect} from 'react-redux'
import actions from '../../store/actions/list'
@connect(//@装饰器  和原来写法一样
    state => state.list,
    actions,
)

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            totalFlag:false,
            computersFlag:false,
            phonesFlag:false,
            otherFlag:false,
            product:[],
            scrollTop:0
        }
    }

    componentWillMount() {
        this.handleTotal()


    }

    componentDidMount() {


    }
    handleTotal=()=>{
        this.getData();
        this.setState({
            totalFlag:true,
            computersFlag:true,
            phonesFlag:true,
            otherFlag:true,
        })
    };
    handleComputers=()=>{
        this.props.getComputersList('/computers');
        this.setState({
            totalFlag:false,
            computersFlag:true,
            phonesFlag:false,
            otherFlag:false,
        })
    };
    handlePhones=()=>{
        this.props.getPhonesList('/phones');
        this.setState({
            totalFlag:false,
            computersFlag:false,
            phonesFlag:true,
            otherFlag:false,
        })
    };

    handleOther=()=>{
        this.props.getOtherList('/other');
        this.setState({
            totalFlag:false,
            computersFlag:false,
            phonesFlag:false,
            otherFlag:true,
        })
    };
    getData=()=>{
        this.props.getComputersList('/computers');
        this.props.getPhonesList('/phones');
        this.props.getOtherList('/other');

        return this.props.list;


    };

    searchProduct=(val)=>{
        let arr=this.getData();
        let {computers,phones,other}=arr;
        console.log(computers,phones,other);
        let bigArr=[...computers,...phones,...other];
        if(val==='undefined'){
            this.props.history.go(-1);
        }else{
            let newArr=bigArr.filter((item,index)=>{
                if(item.description.includes(val)){
                    return item;
                }
            });
            this.setState({
                totalFlag:false,
                computersFlag:false,
                phonesFlag:false,
                otherFlag:false,
                product:newArr
            });
        }};

    render() {
        return (
            <div className="list-page" >
                <Search searchProduct={this.searchProduct}/>
                <div className="panel">
                    <ul className="nav-wrap" >
                        <li onClick={this.handleTotal}>
                            <i className="iconfont icon-quanbu"></i>
                            <span>全部</span>
                        </li>
                        <li onClick={this.handleComputers}>
                            <i className="iconfont icon-diannao"></i>
                            <span>电脑</span>
                        </li>
                        <li onClick={this.handlePhones}>
                            <i className="iconfont icon-sjh-copy"></i>
                            <span>手机</span>
                        </li>
                        <li onClick={this.handleOther}>
                            <i className="iconfont icon-qita"></i>
                            <span>其他</span>
                        </li>
                    </ul>
                    <div className="list-wrap" >

                            {
                                this.state.product?<Product product={this.state.product}/>: null
                            }
                            {
                                this.props.list.computers&&this.state.computersFlag ?<Computers/>: null
                            }

                            {
                                this.props.list.phones&&this.state.phonesFlag ?<Phones/>: null
                            }
                            {
                                this.props.list.other&&this.state.otherFlag ?<Other/>: null
                            }



                    </div>
                </div>

                <BackTop/>
            </div>
        )
    }
}