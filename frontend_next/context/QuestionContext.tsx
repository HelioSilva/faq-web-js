import { createContext, useContext, useEffect, useState } from "react";
import { iQuestion } from "../pages/question";
import api from "../Services/api";

interface dataContext {
  questions: iQuestion[];
  functionSearch(data: string): Promise<void>;
}

const QuestionContext = createContext<dataContext>({} as dataContext);

const ContextQuestion = ({ children }) => {
  const [data, setData] = useState<dataContext>({
    questions: [],
  } as dataContext);

  const functionSearch = async (value: string) => {
    const res =
      value !== ""
        ? await api.get(`/questions/search/${value}`)
        : await api.get(`/questions`);

    setData({
      questions: res.data.questions,
      functionSearch: functionSearch,
    });
  };

  useEffect(() => {
    (async () => {
      const res = await api.get("/questions");
      const dados = res.data;
      setData({ questions: dados.questions, functionSearch });
    })();
  }, []);

  return (
    <QuestionContext.Provider value={data as dataContext}>
      {children}
    </QuestionContext.Provider>
  );
};

function useQuestion(): dataContext {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error(
      "useAuth só pode ser usado com o ContextQuestion por volta dos componentes"
    );
  }

  return context;
}

export { ContextQuestion, QuestionContext, useQuestion };
