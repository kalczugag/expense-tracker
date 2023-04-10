import BalanceBoard from "./components/BalanceBoard";
import HistoryList from "./components/HistoryList";
import TransactionForm from "./components/TransactionForm";

const App = () => {
    return (
        <div className="w-full flex flex-col items-center space-y-6">
            <h2 className="text-2xl font-bold">Expense Tracker</h2>
            <div className="flex flex-col w-64 items-start space-y-6">
                <BalanceBoard />
                <HistoryList />
                <TransactionForm />
            </div>
        </div>
    );
};

export default App;
