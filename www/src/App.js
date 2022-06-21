import {useContext, useEffect, useState} from "react";
import { AppContext } from "./providers/AppProvider";

import './App.css';
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import NewTodo from "./components/NewTodo/NewTodo"
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";

function App() {
    const {
        isLoading,
        getTasks,
    } = useContext(AppContext);

    useEffect(() => {
        getTasks()
        }, [])

    return (
        <>
            <div className="App">
                <div>
                    <Header />
                    <NewTodo/>
                    {isLoading && <ProgressBar />}
                    <TaskList />
                </div>

            </div>
            <div className="footer">
                <Footer />
            </div>
        </>

);
}

export default App;
