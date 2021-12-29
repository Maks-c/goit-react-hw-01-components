import PropTypes from 'prop-types';
import {Th} from "./transactionHistoryStyle"
import {Tr} from "./transactionHistoryStyle";

const TransactionHistory = ({items}) => {
    return <table>
        <thead>
        <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
        </tr>
        </thead>
        <tbody>
        {items.map(item => (
            <Tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </Tr>
        ))}
        </tbody>
    </table>
}

TransactionHistory.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.string,

}

export default TransactionHistory;
