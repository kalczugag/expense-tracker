import { useSelector, useDispatch } from "react-redux";
import { changeTitle, changeAmount, addIncome, addExpense } from "../store";
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
        dispatch(changeAmount(parseInt(event.target.value)) || 0);
    };

    const handleSumbit = (event) => {
        event.preventDefault();

        if (amount > 0) {
            return dispatch(addIncome({ title, amount }));
        } else {
            return dispatch(addExpense({ title, amount }));
        }
    };

    return (
        <form onSubmit={handleSumbit}>
            <h3 className="text-md font-bold shadow-md">Add new Transaction</h3>

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
                    <Button primary className="flex justify-center w-full h-7">
                        Add transaction
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default TransactionForm;
