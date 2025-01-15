# ERP GestorB

## Descrição do Projeto
O **ERP GestorB** é um sistema de gestão empresarial focado em gerenciar funcionários, projetos e recursos internos. Ele oferece funcionalidades que atendem a diferentes níveis hierárquicos, incluindo diretores, gerentes de pessoas, gerentes de projetos e responsáveis pela contabilidade, garantindo maior eficiência nas operações empresariais.

## Funcionalidades
- **Gestão de Usuários**:
  - Cadastro, atualização e remoção de usuários.
  - Atribuição de papéis: Diretor, Gerente de Pessoas, Gerente de Projetos e Responsável pela Contabilidade.

- **Gestão de Projetos**:
  - Criação e gerenciamento de projetos.
  - Alocação de gerentes e monitoramento de progresso.

- **Gestão de Departamentos**:
  - Cadastro e monitoramento de departamentos e seus funcionários.

- **Gestão Financeira**:
  - Registro e controle de transações financeiras relacionadas a projetos e folhas de pagamento.

- **Autenticação e Autorização**:
  - Login seguro com JWT.
  - Controle de acesso baseado em papéis.

- **Relatórios**:
  - Visualização de relatórios financeiros e operacionais em tempo real.

## Tecnologias Utilizadas
- **Backend**: Node.js, Express, TypeScript
- **Banco de Dados**: PostgreSQL
- **ORM**: Prisma
- **Autenticação**: JSON Web Tokens (JWT)
- **Outras Bibliotecas**:
  - bcrypt
  - cors
  - dotenv
  - express-async-errors


## Estrutura do Projeto
```plaintext
📁erp_gestorb
├── 📁src
│   ├── 📁@types
│   │   └── express.d.ts
│   ├── 📁controllers
│   │   ├── 📁Projects
│   │   │   └── projectController.ts
│   │   ├── 📁Roles
│   │   │   └── roleController.ts
│   │   └── 📁User
│   │       └── userController.ts
│   ├── 📁middlewares
│   │   ├── 📁errorsMiddleware
│   │   │   └── errorsMiddleware.ts
│   │   ├── 📁isAuthenticated
│   │   │   └── isAuthenticated.ts
│   │   └── 📁isAuthorized
│   │       └── isAuthorized.ts
│   ├── 📁prisma
│   │   ├── 📁prisma
│   │   │   └── index.ts
│   │   └── schema.prisma
│   ├── 📁routes
│   │   ├── routes.ts
│   │   └── 📁routesPath
│   │       ├── projectRoute.ts
│   │       ├── roleRoute.ts
│   │       └── userRoute.ts
│   ├── 📁services
│   │   ├── 📁Projects
│   │   │   └── projectService.ts
│   │   ├── 📁Roles
│   │   │   └── roleService.ts
│   │   └── 📁User
│   │       └── userService.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Endpoints Principais

### **Usuários**
- `POST /users`: Cria um novo usuário.
- `GET /users`: Lista todos os usuários.
- `PUT /users/:id`: Atualiza um usuário.
- `DELETE /users/:id`: Remove um usuário.

### **Projetos**
- `POST /projects`: Cria um novo projeto.
- `GET /projects`: Lista todos os projetos.
- `PUT /projects/:id`: Atualiza um projeto.
- `DELETE /projects/:id`: Remove um projeto.

### **Papéis**
- `POST /roles`: Cria um novo papel.
- `GET /roles`: Lista todos os papéis.
- `PUT /roles/:id`: Atualiza um papel.
- `DELETE /roles/:id`: Remove um papel.


## Licença
Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

