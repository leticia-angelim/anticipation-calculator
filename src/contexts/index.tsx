import { createContext, ReactNode, useContext, useState } from "react";
import api from "../services/api";

export interface ITransaction {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
}

interface IResult {
  value: number;
}

interface IProviderProps {
  children: ReactNode;
}

interface ITransactionContext {
  result: IResult | undefined;
  simulateAnticipation: (data: ITransaction) => void;
}

const TransactionContext = createContext<ITransactionContext>(
  {} as ITransactionContext
);

const TransactionProvider = ({ children }: IProviderProps) => {
  const [result, setResult] = useState<IResult>();

  const simulateAnticipation = (data: ITransaction) => {
    api
      .post("", data)
      .then((response) => setResult(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <TransactionContext.Provider value={{ result, simulateAnticipation }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = () => useContext(TransactionContext);

export default TransactionProvider;
