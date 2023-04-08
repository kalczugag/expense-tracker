import { useSelector, useDispatch } from "react-redux";
import { changeTitle, changeAmount, addTransaction } from "../store";
import Button from "./Button";

const TransactionForm = () => {
    const dispatch = useDispatch();
    const { title, amount } = useSelector((state) => {
        return {
            title: state.form.title,
            amount: state.form.amount,
        };
    });

    const handleTitleChange = (event) => {
        dispatch(changeTitle(event.target.value));
    };

    const handleAmountChange = (event) => {
        dispatch(changeAmount(event.target.value || 0));
    };

    const handleSumbit = (event) => {
        event.preventDefault();

        dispatch(addTransaction({ title, amount }));
    };

    return (
        <form onSubmit={handleSumbit}>
            <h3 className="text-lg border-b-2 border-gray-300">
                Add new Transaction
            </h3>

            <div
                className="flex flex-col
            "
            >
                <div className="flex flex-col">
                    <label>Text</label>
                    <input
                        onChange={handleTitleChange}
                        type="text"
                        value={title}
                        className="border rounded border-gray-300"
                    />
                </div>
                <div className="flex flex-col">
                    <label>Amount</label>
                    <input
                        onChange={handleAmountChange}
                        type="number"
                        value={amount || ""}
                        className="border rounded border-gray-300"
                    />
                </div>
                <div>
                    <Button primary>Add transaction</Button>
                </div>
            </div>
        </form>
    );
};

export default TransactionForm;
