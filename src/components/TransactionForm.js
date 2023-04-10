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
        dispatch(changeAmount(parseInt(event.target.value)) || 0);
    };

    const handleSumbit = (event) => {
        event.preventDefault();

        if (title && amount) {
            dispatch(addTransaction({ title, amount }));
        }
    };

    return (
        <form onSubmit={handleSumbit} className="w-full font-bold">
            <h3 className="text-md font-bold border-b-2 border-gray-200 mb-2">
                Add new Transaction
            </h3>

            <div
                className="flex flex-col text-sm space-y-3
            "
            >
                <div className="flex flex-col">
                    <label>Text</label>
                    <input
                        onChange={handleTitleChange}
                        type="text"
                        value={title}
                        className="border rounded border-gray-300 p-1"
                    />
                </div>
                <div className="flex flex-col">
                    <label>
                        Amount<p>(negative - expense, positive - income)</p>
                    </label>
                    <input
                        onChange={handleAmountChange}
                        type="number"
                        value={amount || ""}
                        className="border rounded border-gray-300 p-1"
                    />
                </div>
                <div>
                    <Button
                        primary
                        className="flex justify-center w-full h-8 mt-2"
                    >
                        Add transaction
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default TransactionForm;
