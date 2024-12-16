import { model, Schema } from "mongoose";

// Definindo o esquema do documento
const documentoSchema = new Schema(
  {
    nome: { type: String, required: true },
    emails: { type: [String], required: false },
    documento: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Criando o modelo para o Documento
export const DocumentoSchema = model("documento", documentoSchema);
