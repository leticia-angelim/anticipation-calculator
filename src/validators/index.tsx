import * as yup from "yup";

export const schema = yup.object({
  amount: yup
    .number()
    .typeError("Campo obrigatório")
    .integer()
    .lessThan(100000001, "Valor precisa ser menor ou igual a R$ 100.000.000,00")
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
