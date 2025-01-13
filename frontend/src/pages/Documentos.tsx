import { Container, Box, Typography, List, ListItem, ListItemText } from "@mui/material"
import { useEffect, useState } from "react"
import useDocumento from "../hooks/useDocumento"
import { IDocumento } from "../interfaces/IDocumento"


const Documentos = () => {
    const { getDocumentos, loading, error } = useDocumento()
    const [documentos, setDocumentos] = useState<IDocumento[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await getDocumentos()
                setDocumentos(fetchedData)
            } catch (e) {
                console.error(e)
            }
        }

        fetchData()
    }, [])


    return (
        <Container maxWidth="md">
            <Box>
                <Typography component="h1" variant="h4">Documentos</Typography>
                {loading && <Typography component="p">Carregando...</Typography>}
                {error && <Typography component="p">{error}</Typography>}
                <List>
                    {!documentos && <Typography component="p">Não existem registros</Typography>}
                    {
                        documentos && documentos.map((documento, key) => (
                            <ListItem key={key} >
                                <ListItemText primary={documento.nome} secondary={documento.documento} />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Container>
    )
}

export default Documentos