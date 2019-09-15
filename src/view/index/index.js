import React, {Component} from 'react';

import {Row,Col} from 'antd'
import IndexMenu from "./indexMenu"
import IndexList from "./indexList";
export default class Index extends Component  {
    render() {
        //console.log(this.props.match.params.id);
        let tab = this.props.match.params.id
        return (
            <Row className='wrap'>
                <Col md={6}>
                    <IndexMenu id={"MenuIndex"}>

                    </IndexMenu>
                </Col>
                <Col md={18} className={'IndexList'}>
                    <IndexList tab={tab}></IndexList>
                </Col>
            </Row>
        );
    }
}


