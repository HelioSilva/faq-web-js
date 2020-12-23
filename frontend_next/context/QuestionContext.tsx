import { createContext, useContext, useEffect, useState } from "react";
import { iQuestion } from "../pages/question";
import api from "../Services/api";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export enum stateNotification {
  sucess,
  error,
}

interface dataContext {
  questions: iQuestion[];
}

interface functionContext {
  functionSearch(data: string): Promise<void>;
  functionMyQuestions(data: string): Promise<void>;
  functionMyAnswers(data: string): Promise<void>;
  handleNotification(type: stateNotification, value: string): void;
}

const handleNotification = (type: stateNotification, value: string) => {
  switch (type) {
    case stateNotification.sucess:
      toast.success(value, { style: { background: "#477721" } });
      break;
    case stateNotification.error:
      toast.error(value);
      break;

    default:
      toast.info(value);
      break;
  }
};

const QuestionContext = createContext<dataContext>({} as dataContext);
const FunctionContext = createContext<functionContext>({} as functionContext);

const ContextQuestion = ({ children }) => {
  const [data, setData] = useState<dataContext>({
    questions: [],
  } as dataContext);

  const [func, setFunc] = useState<functionContext>({} as functionContext);

  const functionMyQuestions = async (value: string) => {
    const res = await api.get(`/questions/myquestions/${value}`);

    if (res.data.questions) {
      setData({
        questions: res.data.questions,
      });
    }
  };

  const functionMyAnswers = async (value: string) => {
    const res = await api.get(`/questions/myanswers/${value}`);

    setData({
      questions: res.data.questions,
    });
  };

  const functionSearch = async (value: string) => {
    const res =
      value !== ""
        ? await api.get(`/questions/search/${value}`)
        : await api.get(`/questions`);

    setData({
      questions: res.data.questions,
    });
  };

  useEffect(() => {
    (async () => {
      const res = await api.get("/questions");
      const dados = res.data;
      setData({
        questions: dados.questions,
      });

      setFunc({
        functionSearch,
        handleNotification,
        functionMyQuestions,
        functionMyAnswers,
      });
    })();
  }, []);

  return (
    <QuestionContext.Provider value={data as dataContext}>
      <FunctionContext.Provider value={func as functionContext}>
        {children}
        <ToastContainer autoClose={2500} />
      </FunctionContext.Provider>
    </QuestionContext.Provider>
  );
};

function useQuestion(): dataContext {
  const context = useContext(QuestionContext);
  const funContext = useContext(FunctionContext);
  if (!context) {
    throw new Error(
      "useAuth só pode ser usado com o ContextQuestion por volta dos componentes"
    );
  }
  return context;
}

function useFunctionsQuestion(): functionContext {
  const funContext = useContext(FunctionContext);
  if (!funContext) {
    throw new Error(
      "useAuth só pode ser usado com o ContextQuestion por volta dos componentes"
    );
  }
  return funContext;
}

export { ContextQuestion, useQuestion, useFunctionsQuestion };
