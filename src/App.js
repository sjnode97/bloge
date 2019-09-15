import React from 'react';

import RouterIndex from "../src/router/index"
import MainHeader from "./view/main-header";
import MainFooter from "./view/main-footer";
import "./view/index.css"

/*
      工具：
      1.react-router-dom
      2.antd
      3.redux
      4.react-redux
      5.react-thunk
      6.axios

      分版块：
            头
            内容
            底部

      路由模块：
            1.详情内容的模块  details
            2.首页模块        index
            3.教程            book
            4.关于            about
            5.用户模块        user
*/
function App() {
  return (
    <div className="pageWrap">
        <MainHeader></MainHeader>

        <main className='main'>
            <RouterIndex />
        </main>
        <MainFooter></MainFooter>

    </div>
  );
}

export default App;
