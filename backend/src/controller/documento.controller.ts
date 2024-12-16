import { Request, Response } from "express";
import Logger from "../../config/logger";
import { DocumentoSchema } from "../models/Documento.model";

export const getDocumentos = async (req: Request, res: Response) => {
  try {
    const documentos = await DocumentoSchema.find({});

    if (!documentos) {
      return res.status(404).json({ msg: "Não existe nenhum documento" });
    }

    return res.status(201).json(documentos);
  } catch (e: any) {
    Logger.error(e.message);
    return res
      .status(500)
      .json({ msg: "Ocorreu um erro, tente novamente mais tarde" });
  }
};

export const createDocumento = async (req: Request, res: Response) => {
  try {
    const { nome, documento } = req.body;

    await DocumentoSchema.create({ nome, documento });

    return res.status(201).json({ msg: "Documento criado com sucesso!" });
  } catch (e: any) {
    Logger.error(e.message);
    return res
      .status(500)
      .json({ msg: "Ocorreu um erro, tente novamente mais tarde" });
  }
};

export const editDocumento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, documento } = req.body;

    const doc = await DocumentoSchema.findById(id);

    if (!doc) {
      return res.status(404).json({ msg: "Esse documento não existe" });
    }

    await doc.updateOne({ nome, documento });

    return res.status(201).json({ msg: "Documento atualizado com sucesso!" });
  } catch (e: any) {
    Logger.error(e.message);
    return res
      .status(500)
      .json({ msg: "Ocorreu um erro, tente novamente mais tarde" });
  }
};

export const deleteDocumento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const documento = await DocumentoSchema.findById(id);

    if (!documento) {
      return res.status(404).json("Esse documento não existe!");
    }

    await documento.deleteOne();

    return res.status(201).json({ msg: "Documento deletado com sucesso!" });
  } catch (e: any) {
    Logger.error(e.message);
    return res
      .status(500)
      .json({ msg: "Ocorreu um erro, tente novamente mais tarde" });
  }
};
