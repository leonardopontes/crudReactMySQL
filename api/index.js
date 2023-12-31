// Importa o framework Express para lidar com rotas HTTP.
// importar express de "express";
import express from "express";

// Importa as rotas de usuário definidas em "./routes/users.js".
// importar Rotas de usuário de "./routes/users.js";
import userRoutes from "./routes/users.js";

// Importa o módulo "cors" para lidar com políticas de controle de acesso HTTP.
// importar cors de "cors";
import cors from "cors";

// Cria uma aplicação Express.
// aplicação ligando a = express();
const app = express();

// Permite que a aplicação use JSON como formato de requisição. (alterações POST, PUT)
// usar.na aplicação(express.json());
app.use(express.json());

// Habilita o uso de CORS (Cross-Origin Resource Sharing) para permitir requisições de origens diferentes. (evitar conflitos)
// usar.na aplicação(cors());
app.use(cors());

// Associa as rotas de usuário à raiz da aplicação.
// usar.na aplicação("/", Rotas de usuário);
app.use("/", userRoutes);

// Inicia o servidor da aplicação, ouvindo na porta 8800.
// listar. aplicação na porta (8800);
app.listen(8800);