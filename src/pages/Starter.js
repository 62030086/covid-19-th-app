import React,{ Component } from 'react';
import '../assets/css/starter.css';
import { Layout } from 'antd';

import logoapp from '../assets/images/logoapp.png'

const { Content, Footer,  } = Layout;

class Starter extends Component {
  render(){
    return (
      <Layout className="starter-layout" >
        <Content>
          <div className ="starter-logo">
            <img src={logoapp} alt='logoapp' className="logoapp" />
          </div>
        </Content>
          <Footer>

          </Footer>
      </Layout>
    );
  }
}

export default Starter;