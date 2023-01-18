import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
      .lessThan(
        100000001,
        "Valor precisa ser menor ou igual a R$ 100.000.000,00"
      )
      .moreThan(999, "Valor precisa ser maior ou igual a R$ 1.000,00"),
    installments: yup
      .number()
      .typeError("Campo obrigatório")
      .integer()
      .max(12, "Máximo de 12 parcelas")
      .min(1, "Mínimo de 1 parcela"),
    mdr: yup
      .number()
      .typeError("Campo obrigatório")
      .integer()
      .lessThan(101, "Percentual precisa ser menor ou igual a 100%")
      .min(1, "Percentual precisa ser maior que 0%"),
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
    shouldFocusError: false,
    resolver: yupResolver(schema),
  });

  return (
    <ContainerBox>
      <form onChange={handleSubmit(simulateAnticipation)}>
        <h2>Simule sua Antecipação</h2>

        <InputBox>
          <label>Informe o valor da venda *</label>
          <input id="amount" type="text" {...register("amount")} />
          <p>{errors.amount?.message}</p>
        </InputBox>

        <InputBox>
          <label>Em quantas parcelas *</label>
          <input
            id="installments"
            type="number"
            {...register("installments")}
          />
          <p>{errors.installments?.message}</p>
        </InputBox>

        <InputBox>
          <label>Informe o percentual de MDR *</label>
          <input id="mdr" type="number" {...register("mdr")} />
          <p>{errors.mdr?.message}</p>
        </InputBox>

        <InputBox>
          <label>Informe os dias</label>
          <input
            id="days"
            type="text"
            placeholder="ex.: [2, 5, 8]"
            {...register("days")}
          />
          <p>{errors.days?.message}</p>
        </InputBox>
      </form>

      <Result />
    </ContainerBox>
  );
};

export default SimulationForm;
