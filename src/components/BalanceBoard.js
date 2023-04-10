import { useSelector } from "react-redux";

const BalanceBoard = () => {
    const data = useSelector((state) => state.transaction.data);

    const totalIncome = data.income.reduce((total, item) => {
        return total + item.amount;
    }, 0);

    const totalExpense = data.expense.reduce((total, item) => {
        return total + item.amount;
    }, 0);

    const balance = totalIncome + totalExpense;

    return (
        <div className="w-full font-bold">
            <div>
                <div className="text-sm">YOUR BALANCE</div>
                <div className="text-xl">${balance.toFixed(2)}</div>
            </div>
            <div className="grid grid-cols-2 justify-between shadow-md p-2 ">
                <div className="flex flex-col items-center">
                    <div className="text-xs">INCOME</div>
                    <div className="text-green-500 text-lg">${totalIncome}</div>
                </div>
                <div className="flex flex-col border-l border-gray-200 items-center">
                    <div className="text-xs">EXPENSE</div>
                    <div className="text-red-500 text-lg">${totalExpense}</div>
                </div>
            </div>
        </div>
    );
};

export default BalanceBoard;
