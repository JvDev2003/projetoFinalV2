import { model, Schema } from "mongoose";

const usuarioSchema = new Schema(
  {
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    permissoes: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const UsuarioSchema = model("usuario", usuarioSchema);
