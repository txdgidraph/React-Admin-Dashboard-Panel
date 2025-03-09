import { Link } from "react-router-dom";
import "./office.scss";

const Office = () => {
  return (
    <div>
      <div className="officeCont">
        <Link to="/office/employee" className="employeeCont">
          <img src="/images/employee.png" alt="" className="employeeIcon" />
          <span>EMPLOYEES</span>
        </Link>
        <Link to="" className="payrollCont">
          <img src="/images/report.png" alt="" className="payrollIcon" />
          <span>PAYROLL</span>
        </Link>
      </div>
    </div>
  );
};

export default Office;
