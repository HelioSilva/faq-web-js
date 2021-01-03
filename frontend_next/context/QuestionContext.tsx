import { createContext, useContext, useEffect, useState } from "react";
import { iAnswers, iQuestion } from "../domain/entities/index";
import api from "../Services/api";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import NProgress from "nprogress";

export enum stateNotification {
  sucess,
  error,
}

interface dataContext {
  questions: iQuestion[];
  answerSelect: iAnswers;
  roadmap: string;
}

interface functionContext {
  functionSearch(data: string): Promise<void>;
  functionMyQuestions(data: string): Promise<void>;
  functionMyAnswers(data: string): Promise<void>;
  handleNotification(type: stateNotification, value: string): void;
  setAnswer(value: iAnswers): void;
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
    answerSelect: {},
    roadmap: "Página principal",
  } as dataContext);

  const [func, setFunc] = useState<functionContext>({} as functionContext);

  const functionHome = async () => {
    NProgress.start();
    NProgress.set(0.4);
    const res = await api.get("/questions");
    NProgress.done();
    const dados = res.data;

    if (res.data.questions) {
      setData({
        questions: dados.questions,
        answerSelect: {} as iAnswers,
        roadmap: "TOP 10 - Questões mais acessadas",
      });
    }
  };

  const functionMyQuestions = async (value: string) => {
    const res = await api.get(`/questions/myquestions/${value}`);

    if (res.data.questions) {
      setData({
        questions: res.data.questions,
        answerSelect: {} as iAnswers,
        roadmap: "Minhas questões",
      });
    }
  };

  const functionMyAnswers = async (value: string) => {
    const res = await api.get(`/questions/myanswers/${value}`);

    if (res.data.questions) {
      setData({
        questions: res.data.questions,
        answerSelect: {} as iAnswers,
        roadmap: "Questões respondidas por mim",
      });
    }
  };

  const functionSearch = async (value: string) => {
    if (value !== "") {
      NProgress.start();
      NProgress.set(0.4);
      const res = await api.get(`/questions/search/${value}`);
      NProgress.done();
      if (res.data.questions) {
        setData({
          questions: res.data.questions,
          answerSelect: {} as iAnswers,
          roadmap: `Resultado da pesquisa por: ${value}`,
        });
      }
    } else {
      functionHome();
    }
  };

  const setAnswer = (value: iAnswers) => {
    const { answerSelect, ...rest } = data;
    setData({
      answerSelect: value,
      ...rest,
    });
  };

  useEffect(() => {
    (async () => {
      await functionHome();

      setFunc({
        functionSearch,
        handleNotification,
        functionMyQuestions,
        functionMyAnswers,
        setAnswer,
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
  if (!context) {
    throw new Error(
      "QuestionContext só pode ser usado com o ContextQuestion por volta dos componentes"
    );
  }
  return context;
}

function useFunctionsQuestion(): functionContext {
  const funContext = useContext(FunctionContext);
  if (!funContext) {
    throw new Error(
      "FunctionContext só pode ser usado com o ContextQuestion por volta dos componentes"
    );
  }
  return funContext;
}

export { ContextQuestion, useQuestion, useFunctionsQuestion };
