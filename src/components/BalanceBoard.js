import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setBalance } from "../store";

const BalanceBoard = () => {
    const dispatch = useDispatch();
    const { balance } = useSelector((state) => {
        return state.transaction;
    });

    useEffect(() => {
        dispatch(setBalance());
    }, [dispatch]);

    return (
        <div>
            <div>YOUR BALANCE</div>
            <div className="text-lg font-bold">${balance}</div>
        </div>
    );
};

export default BalanceBoard;
