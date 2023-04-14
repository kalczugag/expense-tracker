import BalanceBoard from "./components/BalanceBoard";
import HistoryList from "./components/HistoryList";
import TransactionForm from "./components/TransactionForm";
import { useEffect } from "react";
import { fetchTransactions } from "./store";
import { useThunk } from "./hooks/use-transaction";

const App = () => {
    const [doFetchTransactions, isLoading, error] = useThunk(fetchTransactions);

    useEffect(() => {
        doFetchTransactions();
    }, [doFetchTransactions]);

    return (
        <div className="w-full flex flex-col items-center space-y-6">
            <h2 className="text-2xl font-bold">Expense Tracker</h2>
            <div className="flex flex-col w-64 items-start space-y-6">
                <BalanceBoard isLoading={isLoading} error={error} />
                <HistoryList isLoading={isLoading} error={error} />
                <TransactionForm />
            </div>
        </div>
    );
};

export default App;
