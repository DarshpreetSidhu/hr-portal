import React, { Component } from 'react';
import { Table,Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            userProfileList : [],
            filteredProfile :[]
        }
    }
    componentDidMount(){
        const url="https://vcentry.herokuapp.com/users";
        axios.get(url)
        .then((response) => {
console.log(response.data.data)

this.setState({
    userProfileList : response.data.data,
    filteredProfile : response.data.data
})
        })
        
        .catch((error) => {           
             console.log(error)
        })

    }
    handleSearch =(event)=>{
console.log(event.target.value)
const filtered = this.state.filteredProfile.filter((value)=>{
    return value.first_name.includes(event.target.value);

})
this.setState({
    userProfileList : filtered
})
    }
    render() {
        const columns = [
            {
                title : 'ID',
                dataIndex : 'id',
                key : 'id'
            },

            {
                title : 'First Name',
                dataIndex : 'first_name',
                key : 'first_name'
            },

        {
            title : 'Last Name',
                dataIndex : 'last_name',
                key : 'last_name'
        },

        {
            title : 'Profile Picture',
                dataIndex : 'avatar',
                key : 'avatar',
                render : avatar => {
                    return(
                        <img src ={avatar} key={avatar} />
                    )
                }

        },

    {
        title : 'Email ID',
                dataIndex : 'email',
                key : 'email'
    }
        ]
        return (
            <div>
                <h1>Home Page!</h1>
                <input placeholder="Type a user name to filter....." prefix={<SearchOutlined />} onChange={this.handleSearch}/>
                <Table dataSource={this.state.userProfileList} columns={columns} />;
            </div>
        );
    }
}

export default HomePage;