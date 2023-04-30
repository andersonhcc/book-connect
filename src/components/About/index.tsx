import React from 'react';
import { ButtonBack } from '@components/ButtonBack';
import * as S from './styles';

export interface Props {
    closeAbout(): void;
  }
  
export const About = ({ closeAbout }: Props) => {
  return (
    <S.Container>
      <S.Header>
        <ButtonBack  color="gray" onPress={closeAbout} />

        <S.WrapperTitle>
          <S.Title>Sobre</S.Title>
        </S.WrapperTitle>
      </S.Header>

      <S.Main>
        <S.BoxOption>
          <S.WrapperElements>
            <S.BoxMain>
              <S.TextOption>Versão do aplicativo</S.TextOption>
              <S.TextAtt>Atualize seu aplicativo na loja</S.TextAtt>
            </S.BoxMain>

            <S.BoxVersion>
              <S.TextVersion> 1.0.0 </S.TextVersion>
              <S.IconAnt />
            </S.BoxVersion>
          </S.WrapperElements>
        </S.BoxOption>
      </S.Main>
    </S.Container>
  );
};
