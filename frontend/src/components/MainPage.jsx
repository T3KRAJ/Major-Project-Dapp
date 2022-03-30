import Card from "./common/Card";
import { Fragment } from "react";
import MainPageHeader from "./MainPageHeader";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    <Fragment>
      <MainPageHeader />
      <br />
      <Card className="mainpageCard">
        <p className="Card_p">Hospital Reg.</p>
      </Card>
      <br />
      <Card className="mainpageCard">
        <p className="Card_p">Doctor Reg.</p>
      </Card>
      <br />
      {/* <Link to="woaop"> */}
      <Card className="mainpageCard">
        <p className="Card_p">Patient Reg.</p>
      </Card>
      {/* </Link> */}
      <br />
      <Card className="mainpageCard">
        <p className="Card_p">Medical Record</p>
      </Card>
      <br />
      <Card className="mainpageCard">
        <p className="Card_p">Patient examine Detail</p>
      </Card>
    </Fragment>
  );
};

export default MainPage;
