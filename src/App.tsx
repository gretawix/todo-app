import Todos from './components/Todos';
import { TodosProvider } from './context/todosContext';

function App() {
    return (
        <div className="App">
            <TodosProvider>
                <Todos />
            </TodosProvider>
        </div>
    );
}

export default App;
