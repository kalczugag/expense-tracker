import { useSelector } from "react-redux";

const BalanceBoard = () => {
    const totalBalance = useSelector(({ transaction: { data } }) => {
        // data.income.reduce((acc, init) => (acc += init.amount));
    });

    return (
        <div className="w-full">
            <div>
                <div className="text-sm">YOUR BALANCE</div>
                <div className="text-xl font-bold m-0">${totalBalance}</div>
            </div>
            <div className="flex flex-row justify-between shadow-md">
                <div className="flex flex-col items-center">
                    <div className="text-xs font-bold">INCOME</div>
                    <div></div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-xs font-bold">EXPENSE</div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default BalanceBoard;
