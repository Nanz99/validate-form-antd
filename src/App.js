import { Col, Row } from "antd";
import Formvalidate from "./components/Formvalidate";
import Header from "./components/Header";

const App = () => {

  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <div>
      <Header/>
      <Row style={{ padding: '0 70px', display: 'flex', alignItems: 'center' }}>
        <Col span={12}>
          <h1 style={{ fontSize: '4.5rem', lineHeight:1.2}}>
            This is a tile of my amazing web app
          </h1>
          <p style={{fontSize: '20px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col span={12}>
          <Formvalidate/>
        </Col>
      </Row>
    </div>
  );
};

export default App;