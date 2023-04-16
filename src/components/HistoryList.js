import { useSelector } from "react-redux";
import HistoryListItem from "./HistoryListItem";
import Skeleton from "./Skeleteon";

const HistoryList = ({ isLoading, error }) => {
    const data = useSelector((state) => state.transaction.data);

    let content;
    if (isLoading) {
        content = <Skeleton times={3} className="w-full h-8" />;
    } else if (error) {
        content = <div>Error fetching data.</div>;
    } else {
        const history = [...data];

        content = history.map((transaction) => {
            return (
                <HistoryListItem
                    key={transaction.id}
                    transaction={transaction}
                />
            );
        });
    }

    return (
        <div className="w-full">
            <div className="border-b-2 border-gray-200 font-bold mb-2">
                History
            </div>
            {content}
        </div>
    );
};

export default HistoryList;
