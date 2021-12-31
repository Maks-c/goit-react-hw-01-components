import PropTypes, {shape} from 'prop-types';
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
        {items.map(({id, type, amount, currency}) => (
            <Tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </Tr>
        ))}
        </tbody>
    </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })).isRequired
}

export default TransactionHistory;
