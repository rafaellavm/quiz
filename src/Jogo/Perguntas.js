import React from 'react'
import { Grid, Radio, Button, Divider } from 'semantic-ui-react'

const Perguntas = props => {

    return (
        <div>
            <h2>Perguntas sobre Profissões</h2>
            <p>Mostre que você conhece tudo sobre esse assunto</p>
            <h3>Qual a profissão?</h3>
            <span>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>Alternativa 1
                
                        <Radio toggle />
                        </Grid.Column>
                        <Grid.Column>Alternativa 2
                    <Radio toggle />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>Alternativa 3
                    <Radio toggle />
                        </Grid.Column>
                        <Grid.Column>Alternativa 4
                    <Radio toggle />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Button>Finalizar</Button>
            </span>
        </div>
    )
}

export default Perguntas