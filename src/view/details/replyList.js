import React, { Component } from 'react'
import {List,Avatar,Card} from 'antd'
import TxtTag from '../txtTag'
import {Link} from 'react-router-dom';
import data from "../index/data";

class ReplyList extends Component {
    render() {
        let {replise,replyCont} = this.props
        // console.log(replise);
        return (
            <div>
                <List
                    id={"list"}
                    dataSource={replise}
                    renderItem={
                        item => (<List.Item
                            className={'listItem'}
                            // extra={ console.log( item ) }
                            extra={ item.ups.length >0?<span className='answer'>有{item.ups.length}个人赞了这条回复</span> :''}
                        >
                            <List.Item.Meta
                                className = { 'abc' }
                                avatar={
                                    <Avatar src={item.author.avatar_url}/>
                                }
                                description={
                                    <span>
                                        <Link to={'/user/'+item.author.loginname}> {item.author.loginname} </Link>
                                        发表于:{item.create_at.split("T")[0]}

                                    </span>
                                }
                            ></List.Item.Meta>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}
                            >
                            </div>
                        </List.Item>)}

                >

                </List>
            </div>
        );
    }
}

export default ReplyList;