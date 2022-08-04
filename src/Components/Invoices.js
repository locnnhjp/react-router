import { Link } from "react-router-dom";
function Invoices() {
    let invoiceId = 1000;

    return (
        <div>
            <h1>Invoices</h1>
            <Link to={`/invoices/${invoiceId}`} key={invoiceId}>ID {invoiceId}</Link>
        </div>
    )
}

export default Invoices;