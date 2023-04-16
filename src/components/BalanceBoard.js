import { useSelector } from "react-redux";

const BalanceBoard = () => {
    const data = useSelector((state) => state.transaction.data);

    const totalIncomes = data
        .filter(({ amount }) => amount > 0)
        .reduce((a, v) => a + v.amount, 0);

    const totalExpenses = data
        .filter(({ amount }) => amount < 0)
        .reduce((a, v) => a + v.amount, 0);

    const totalBalance = totalIncomes + totalExpenses;

    return (
        <div className="w-full font-bold">
            <div>
                <div className="text-sm">YOUR BALANCE</div>
                <div className="text-xl">${totalBalance}</div>
            </div>
            <div className="grid grid-cols-2 justify-between shadow-md p-2 ">
                <div className="flex flex-col items-center">
                    <div className="text-xs">INCOME</div>
                    <div className="text-green-500 text-lg">
                        ${totalIncomes}
                    </div>
                </div>
                <div className="flex flex-col border-l border-gray-200 items-center">
                    <div className="text-xs">EXPENSE</div>
                    <div className="text-red-500 text-lg">${totalExpenses}</div>
                </div>
            </div>
        </div>
    );
};

export default BalanceBoard;
