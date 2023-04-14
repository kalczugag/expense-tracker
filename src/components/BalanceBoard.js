import { useSelector } from "react-redux";
import { GoSync } from "react-icons/go";

const BalanceBoard = () => {
    const data = useSelector((state) => state.transaction.data);

    return (
        <div className="w-full font-bold">
            <div>
                <div className="text-sm">YOUR BALANCE</div>
                <div className="text-xl">$</div>
            </div>
            <div className="grid grid-cols-2 justify-between shadow-md p-2 ">
                <div className="flex flex-col items-center">
                    <div className="text-xs">INCOME</div>
                    <div className="text-green-500 text-lg">$</div>
                </div>
                <div className="flex flex-col border-l border-gray-200 items-center">
                    <div className="text-xs">EXPENSE</div>
                    <div className="text-red-500 text-lg">$</div>
                </div>
            </div>
        </div>
    );
};

export default BalanceBoard;
