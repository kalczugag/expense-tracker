import classNames from "classnames";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { removeTransaction } from "../store";
import { useThunk } from "../hooks/use-transaction";

const HistoryListItem = ({ transaction }) => {
    const [doRemoveTransaction, isLoading, error] = useThunk(removeTransaction);

    const handleRemoveTransaction = () => {
        doRemoveTransaction(transaction);
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
            {transaction.title || error}
            <div>${transaction.amount}</div>
            <div className="absolute flex items-center justify-center inset-0 opacity-0 hover:bg-gray-200 hover:opacity-80">
                <Button loading={isLoading}>
                    <GoTrashcan className="text-3xl" />
                </Button>
            </div>
        </div>
    );
};

export default HistoryListItem;
