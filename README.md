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

- **Gestão Financeira**:
  - Registro e controle de transações financeiras relacionadas a projetos e folhas de pagamento.

<!-- - **Gestão de Departamentos**:
  - Cadastro e monitoramento de departamentos e seus funcionários.



- **Autenticação e Autorização**:
  - Login seguro com JWT.
  - Controle de acesso baseado em papéis.

- **Relatórios**:
  - Visualização de relatórios financeiros e operacionais em tempo real. -->

## Tecnologias Utilizadas
- **Backend**: Node.js, Express, TypeScript
- **Banco de Dados**: PostgreSQL
- **ORM**: Prisma
- **Autenticação**: JSON Web Tokens (JWT)
- **Outras Bibliotecas**:
  - bcryptjs
  - cors
  - dotenv
  - express-async-errors
  - express-session


## Estrutura do Projeto
```
└── 📁erp_gestorb
    └── 📁src
        └── 📁@types
            └── express.d.ts
        └── 📁controllers
            └── 📁Financial
                └── financialController.ts
            └── 📁Projects
                └── createProjectController.ts
                └── deleteProjectController.ts
                └── listProjectController.ts
                └── updateProjectController.ts
            └── 📁Roles
                └── createRoleController.ts
                └── listRoleController.ts
                └── removeRoleController.ts
                └── updateRoleController.ts
            └── 📁User
                └── createUserController.ts
                └── listUserController.ts
                └── removeUserController.ts
                └── updateUserController.ts
        └── 📁exceptions
            └── AppError.ts
        └── 📁middlewares
            └── 📁errorsMiddleware
                └── errorsMiddleware.ts
            └── 📁isAuthenticated
                └── isAuthenticated.ts
            └── 📁isAuthorized
                └── isAuthorized.ts
        └── 📁prisma
            └── 📁migrations
                └── 📁20250115024658_init
                    └── migration.sql
                └── 📁20250115123907_add_user_project_relation
                    └── migration.sql
                └── migration_lock.toml
            └── 📁prisma
                └── index.ts
            └── schema.prisma
            └── seed.ts
        └── 📁routes
            └── routes.ts
            └── 📁routesPath
                └── financialRoute.ts
                └── projectRoute.ts
                └── userRoute.ts
        └── server.ts
        └── 📁services
            └── 📁Financial
                └── financialService.ts
            └── 📁Projects
                └── createProjectService.ts
                └── deleteProjectService.ts
                └── listProjectService.ts
                └── updateProjectService.ts
            └── 📁Roles
                └── createRoleService.ts
                └── listRoleService.ts
                └── removeRoleService.ts
                └── updateRoleService.ts
            └── 📁User
                └── createUserService.ts
                └── listUserService.ts
                └── removeUserService.ts
                └── updateUserService.ts
    └── .env
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── README.md
    └── tsconfig.json
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

