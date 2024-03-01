import React from "react";
import TodoList, { Todo } from "./components/TodoList";
import { useTranslation, Trans } from "react-i18next";
import "./i18n";

const languages = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const switchers = () => {
    return Object.keys(languages).map((language) => (
      <button
        key={language}
        style={{
          fontWeight: i18n.resolvedLanguage === language ? "bold" : "normal",
        }}
        onClick={() => i18n.changeLanguage(language)}
      >
        {language}
      </button>
    ));
  };

  const todos: Todo[] = [
    { id: 1, text: "Поставити завдання 1", completed: false },
    { id: 2, text: "Поставити завдання 2", completed: true },
    { id: 3, text: "Поставити завдання 3", completed: false },
  ];

  return (
    <div className="App">
      {process.env.REACT_APP_TEST}
      {switchers()}
      <h1>{t("description.part1")}</h1>
      <TodoList todos={todos} />
      <Trans i18nKey={"title"}></Trans>
      <footer>{t("date", { date: new Date().toISOString() })}</footer>
    </div>
  );
};

export default App;
