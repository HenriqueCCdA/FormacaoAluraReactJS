import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Card } from "../../componentes/Card/Card"
import avatar from "./assets/avatar.png"
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto"
import { Botao } from "../../componentes/Botao/Botao"
import { useEffect } from "react"
import http from "../../http"
import { ArmazenadorToken } from "../../utils/ArmazenadorToken"

const TituloEstilizado = styled.h1`
  margin-top: 0;
  font-weight: 600;
  font-size: 40px;
  background-position: center;
  line-height: 246px;
  text-align: center;
`

const ImgEstilazada = styled.img`
  max-width: 100%;
  margin: 0 auto;
`

const Perfil = () => {

  useEffect(() => {

    http.get('profile')
      .then(resposta => console.log(resposta.data))
      .catch(error => console.error(error))
  }, [])

  const aoSubemeterForm = (evento) => {
    evento.preventDefault()
  }

  return (<>
    <TituloEstilizado>
      Perfil
    </TituloEstilizado>
    <Container>
      <form onSubmit={aoSubemeterForm}>
        <Row>
          <Col sm={12} md={5}>
            <Card>
              <div style={{ textAlign: 'center' }}>
                <Tipografia componente='h3' variante='h3'>
                  Nome Completo
                </Tipografia>
                <ImgEstilazada src={avatar} />
              </div>
            </Card>
          </Col>
          <Col sm={12} md={7}>
            <Tipografia componente='h3' variante='h3'>
              Revise seus dados
            </Tipografia>
            <CampoTexto titulo='Nome' />
            <CampoTexto titulo='Sobrenome' />
            <Row>
              <Col sm={12} md={6}>
                <CampoTexto titulo='Celular' />
              </Col>
              <Col sm={12} md={6}>
                <CampoTexto titulo='E-mail' tipo="email"/>
              </Col>
              <Col sm={12} md={6}>
                <CampoTexto titulo='Código postal'/>
              </Col>
              <Col sm={12} md={6}>
                <CampoTexto titulo='País'/>
              </Col>
              <Col sm={12} md={6}>
                <Botao fluido>
                  Salvar
                </Botao>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </Container>
  </>)
}

export default Perfil;
