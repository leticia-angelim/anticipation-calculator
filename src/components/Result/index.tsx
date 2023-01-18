import { useTransactionContext } from "../../contexts";
import { Container } from "./styles";

const Result = () => {
  const { result } = useTransactionContext();

  return result ? (
    <Container>
      <h3>VOCÊ RECEBERÁ:</h3>
      {Object.entries(result).map(([key, value], index) =>
        +key === 1 ? (
          <p key={index}>
            Amanhã: <strong>R$ {value},00</strong>
          </p>
        ) : (
          <p key={index}>
            Em {key} dias: <strong>R$ {value},00</strong>
          </p>
        )
      )}
    </Container>
  ) : (
    <Container>
      <h3>VOCÊ RECEBERÁ:</h3>
      <p>
        Amanhã: <strong>R$ 0,00</strong>
      </p>
      <p>
        Em 15 dias: <strong>R$ 0,00</strong>
      </p>
      <p>
        Em 30 dias: <strong>R$ 0,00</strong>
      </p>
      <p>
        Em 90 dias: <strong>R$ 0,00</strong>
      </p>
    </Container>
  );
};

export default Result;
