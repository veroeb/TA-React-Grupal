import { useEffect, useReducer } from 'react';
import { initialState, reducer } from './components/state/State';
import { fetchTasks } from './components/state/StateManager';
import TaskManager from './components/TaskManager';
import TaskModal from './components/modals/TaskModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchTasks(dispatch);
  }, []);

  return (
    <div className="App">
      <TaskManager state={state} dispatch={dispatch} />
      <TaskModal state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
