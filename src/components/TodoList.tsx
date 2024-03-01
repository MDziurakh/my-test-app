import TodoItem from "./TodoItem";
import { useGetTodosQuery } from "../api/api";
import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  const { t } = useTranslation();
  const [count, setCounter] = useState(0);

  const { data: apiTodos, error, isLoading } = useGetTodosQuery("posts");

  const handleAdd = () => {
    setCounter(count + 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p>
      <p>
        <i>{t("inter", { val: count })}</i>
      </p>
      <button onClick={handleAdd}>{t("button")}</button>
      <ul>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
