import { GoTrashcan } from "react-icons/go";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../store";
import classNames from "classnames";

const HistoryListItem = ({ transaction }) => {
    const dispatch = useDispatch();

    const handleRemoveTransaction = () => {
        dispatch(removeTransaction(transaction));
    };

    const transactionType =
        transaction.amount > 0
            ? "border-l-4 border-green-500"
            : "border-l-4 border-red-500";

    const classes = classNames(
        "relative flex flex-row items-center justify-between shadow-md p-2 my-1 cursor-pointer",
        transactionType
    );

    return (
        <div className={classes} onClick={handleRemoveTransaction}>
            {transaction.title}
            <div>${transaction.amount}</div>
            <div className="absolute flex items-center justify-center inset-0 opacity-0 hover:bg-gray-200 hover:opacity-80">
                <GoTrashcan className="text-3xl" />
            </div>
        </div>
    );
};

export default HistoryListItem;
