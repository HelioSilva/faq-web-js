import { iAnswers } from "./answer";

export interface iQuestion {
  id: string;
  titulo: string;
  acessos: string;
  autor: string;
  autor_id: string;
  answers: iAnswers[];
  createdAt: string;
  updatedAt: string;
}
