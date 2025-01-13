import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Box, TextField, Button, Typography } from "@mui/material"
import useDocumento from "../hooks/useDocumento"

const CreateDocumento = () => {
    const { createDocumento, loading, error } = useDocumento()
    const [nome, setNome] = useState('')
    const [ra, setRa] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await createDocumento(nome, ra)
            navigate("/")

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Container maxWidth="md">
            <Box component="form" maxWidth="sm" onSubmit={(e) => handleSubmit(e)}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Aluno"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="R.A."
                    name="name"
                    autoComplete="name"
                    autoFocus
                    onChange={(e) => setRa(e.target.value)}
                    value={ra}
                />
                {error && <Typography component="p">{error}</Typography>}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color='primary'
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : 'Editar'}
                </Button>
            </Box>

        </Container>
    )
}

export default CreateDocumento