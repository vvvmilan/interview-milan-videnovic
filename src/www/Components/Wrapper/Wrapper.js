import "./Wrapper.css"
import Header from "./Header/Header";
import NewTodo from "./NewTodo/NewTodo";
import TaskList from "./TaskList/TaskList";

function Wrapper(props) {
    return (
        <div className="wrapper">
            <Header />
            <NewTodo />
            <TaskList />
        </div>
    );
}

export default Wrapper;