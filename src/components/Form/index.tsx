import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";

import Result from "../Result";
import { ContainerBox, InputBox } from "./styles";
import { ITransaction, useTransactionContext } from "../../contexts";

const SimulationForm = () => {
  const { simulateAnticipation } = useTransactionContext();

  const schema = yup.object({
    amount: yup
      .number()
      .typeError("Campo obrigatório")
      .integer()
      .moreThan(999, "Valor precisa ser maior ou igual a 1000"),
    installments: yup
      .number()
      .typeError("Campo obrigatório")
      .integer()
      .lessThan(13, "Máximo de 12 parcelas"),
    mdr: yup.number().typeError("Campo obrigatório").integer(),
    days: yup
      .array()
      .of(yup.number())
      .transform((value) => (value === null ? [1, 15, 30, 90] : value)),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITransaction>({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerBox>
      <form onSubmit={handleSubmit(simulateAnticipation)}>
        <h2>Simule sua Antecipação</h2>

        <InputBox>
          <label htmlFor="amount">Informe o valor da venda *</label>
          <input id="amount" type="text" {...register("amount")} />
          <p>{errors.amount?.message}</p>
        </InputBox>

        <InputBox>
          <label htmlFor="installments">Em quantas parcelas *</label>
          <input id="installments" type="text" {...register("installments")} />
          <p>{errors.installments?.message}</p>
        </InputBox>

        <InputBox>
          <label htmlFor="mdr">Informe o percentual de MDR *</label>
          <input id="mdr" type="text" {...register("mdr")} />
          <p>{errors.mdr?.message}</p>
        </InputBox>

        <InputBox>
          <label htmlFor="days">Informe os dias</label>
          <input
            id="days"
            type="text"
            placeholder="ex.: [2, 5, 8]"
            {...register("days")}
          />
          <p>{errors.days?.message}</p>
        </InputBox>

        <Button type="submit" variant="contained">
          Calcular
        </Button>
      </form>

      <Result />
    </ContainerBox>
  );
};

export default SimulationForm;
