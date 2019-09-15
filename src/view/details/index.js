import React, {Component} from 'react';
import data from './data'
import "antd/dist/antd.css"

import ReplyList from "./replyList";
import TxtDeta from "./txtDeta";
export default class Detalis extends Component  {
    render() {
        return (
            <div className="wrap">
                <TxtDeta></TxtDeta>
                <ReplyList
                    replise={data.data.replies}
                    replyCont={data.data.reply_count}
                ></ReplyList>
            </div>
        );
    }
}


