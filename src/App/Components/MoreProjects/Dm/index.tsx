import Box from "Components/Box";
import Link from "next/link";
import styles from "./styles.module.scss";
import Text from "Components/Text";
import { Button } from "@mui/material";

export default function DmRoldanas() {
  return (
    <Box className={styles.projects}>
      <Box className={styles.projectCard}>
        <img
          className={styles.projectsImages}
          src="/images/dm.png"
          alt="DM Roldanas"
        />

        <Box className={styles.projectsCard}>
          <Text weight="bold" color="white">
            DM Roldanas - Projeto pessoal para estudos.
          </Text>

          <Text size={14} weight="bold" color="white">
            Utilizando como base o trabalho de meu pai, utilizei esse projeto
            para evoluir minhas habilidades em JavaScript, onde utilizando
            quatro peças de valores e pesos diferenentes, calculava o valor,
            total de peças, o peso total do pedido e se o peso ultrapassava ou
            não o limite estabelecido pela transportadora. Aqui também coloquei
            em pratica conhecimentos de importação de bibliotecas.
          </Text>

          <Box display="flex" justifyContent="center">
            <Button classes={{ root: styles.button }}>
              <Link href="https://brnmilano.github.io/new-project-roldanas/">
                <a target="_blank">Veja o resultado final</a>
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
