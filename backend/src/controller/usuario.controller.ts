import { Request, Response } from "express";
import Logger from "../../config/logger";
import { UsuarioSchema } from "../models/Usuario.model";
import { comparePassword, hashPassword } from "../../config/hashFunctions";
import jwt, { Secret } from "jsonwebtoken";
import config from "config";

export const createUsuario = async (req: Request, res: Response) => {
  try {
    const { nome, senha } = req.body;

    const hash = await hashPassword(senha);

    await UsuarioSchema.create({ nome, senha: hash, permissoes: "admin" });

    return res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (e: any) {
    Logger.error(e.message);
    return res
      .status(500)
      .json({ msg: "Ocorreu um erro, tente novamente mais tarde" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { nome, senha } = req.body;
    const jwtSecret = config.get<String>("jwtSecret");

    const usuario = await UsuarioSchema.findOne({ nome: nome });

    if (!usuario) {
      return res.status(404).json({ msg: "Usuário e/ou senha incorretos" });
    }

    if (!comparePassword(senha, usuario.senha)) {
      return res.status(404).json({ msg: "Usuário e/ou senha incorretos" });
    }
    const token = jwt.sign(
      {
        nome: usuario.nome,
      },
      jwtSecret as Secret,
      { expiresIn: "4h" }
    );

    return res.status(201).json(token);
  } catch (e: any) {
    Logger.error(e.message);
    return res
      .status(500)
      .json({ msg: "Ocorreu um erro, tente novamente mais tarde" });
  }
};
