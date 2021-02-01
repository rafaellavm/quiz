import React from 'react';
import { Container, Header, Segment, Card, Button } from 'semantic-ui-react';

const Inicio = props => {
    return (
        <div>
            <Card>
                <Container>
                    <Segment piled>Quiz
                    </Segment>
                    <Header as="h2">Jogo de perguntas e respostas
                   </Header>
                    <p>
                        Desafie seus amigos nesse incrível jogo de perguntas e respostas
                      
                   </p>
                    <Card fluid>
                        <Card.Content>
                            Acesse agora mesmo
                       </Card.Content>
                        <Card.Content>
                            <Button basic color='blue'>Login com Facebook</Button>
                            <Button basic color='green'>Usuário Administrativo</Button>
                        </Card.Content>
                    </Card>
                </Container>
            </Card>
        </div>
    )
}

export default Inicio;