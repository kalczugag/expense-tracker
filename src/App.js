import "./appStyle.css";
import BalanceBoard from "./components/BalanceBoard";
import HistoryList from "./components/HistoryList";
import TransactionForm from "./components/TransactionForm";

const App = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold">Expense Tracker</h2>
            <div className="flex flex-col items-start">
                <BalanceBoard />
                <HistoryList />
                <TransactionForm />
            </div>
        </div>
    );
};

export default App;
