import "./stock.scss";
import { Link, useNavigate } from "react-router-dom";

const Stock = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="stockContainer">
        <div className="stockMenuCont">
          <span className="stockMenuTitle">STOCK MENU</span>
          <div className="menuItemsCont">
          <Link to="" className="items" onClick={() => navigate("/stock/add-modify-stock")}>
              <img src="/images/stock.png" alt="" className="itemIcon" />
              <span>ADD / MODIFY STOCK</span>
            </Link>
            <Link to="" className="items">
              <img src="/images/stock.png" alt="" className="itemIcon" />
              <span>STOCK GROUPS MAINTENANCE</span>
            </Link>
            <Link to="" className="items">
              <img src="/images/stock.png" alt="" className="itemIcon" />
              <span>GLOBAL STOCK MAINTENANCE</span>
            </Link>
            <Link to="" className="items">
              <img src="/images/stock.png" alt="" className="itemIcon" />
              <span>STOCK QUANTITY ADJUSTMENT</span>
            </Link>
          </div>
        </div>
        <div className="stockReportsCont">
          <span className="stockReportsTitle">STOCK REPORTS</span>
          <div className="reportCont">
            <div className="reportCol_1">
                <Link to="" className="reportItem">
                <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Items Inquiry</span>
                </Link>
                <Link to="" className="reportItem">
                <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Transactions Inquiry</span>
                </Link>
                <Link to="" className="reportItem">
                <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Quantity Report</span>
                </Link>
                <Link to="" className="reportItem">
                <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Selling Prices Report</span>
                </Link>
                <Link to="" className="reportItem">
                <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Cost Prices Report</span>
                </Link>
                <Link to="" className="reportItem">
                <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Stock Performance Report</span>
                </Link>
            </div>
            <div className="reportCol_2">
            <Link to="" className="reportItem">
            <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Out Of Stock Report</span>
                </Link>
                <Link to="" className="reportItem">
                <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Stock Reorder Report</span>
                </Link>
                <Link to="" className="reportItem">
                <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Stock Take Report</span>
                </Link>
                <Link to="" className="reportItem">
                <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Stock Value Report</span>
                </Link>
                <Link to="" className="reportItem">
                <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Items History</span>
                </Link>
                <Link to="" className="reportItem">
                <img src="/images/report.png" alt="" className="reportIcon" />
                <span>Print Stock Barcodes</span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
