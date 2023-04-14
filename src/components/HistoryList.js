import { useSelector } from "react-redux";
import HistoryListItem from "./HistoryListItem";

const HistoryList = () => {
    const data = useSelector((state) => state.transaction.data);

    const history = [...data];

    const renderedHistory = history.map((transaction) => {
        return (
            <HistoryListItem key={transaction.id} transaction={transaction} />
        );
    });

    return (
        <div className="w-full">
            <div className="border-b-2 border-gray-200 font-bold mb-2">
                History
            </div>
            {renderedHistory}
        </div>
    );
};

export default HistoryList;
