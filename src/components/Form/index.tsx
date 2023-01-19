import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Result from "../Result";
import { schema } from "../../validators";
import { ContainerBox, InputBox } from "./styles";
import { ITransaction, useTransactionContext } from "../../contexts";

const SimulationForm = () => {
  const { simulateAnticipation } = useTransactionContext();

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
