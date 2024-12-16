import { Router } from "express";
import {
  createDocumento,
  deleteDocumento,
  editDocumento,
  getDocumentos,
} from "./controller/documento.controller";
import { createUsuario, login } from "./controller/usuario.controller";

const router = Router();

router
  .get("/documento", getDocumentos)
  .post("/documento", createDocumento)
  .put("/documento/:id", editDocumento)
  .delete("/documento/:id", deleteDocumento)

  //usuarios
  //.post("/usuario", createUsuario);
  .post("/login", login);

export default router;
