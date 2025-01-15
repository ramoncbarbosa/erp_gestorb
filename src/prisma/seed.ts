import prisma from "./prisma/index";
import bcrypt from "bcrypt";

async function main() {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      throw new Error("Dados de usuário foram passadas erradas!");
    }

    const isAdminExist = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (isAdminExist) {
      console.log("Administrador já existe!");
      return;
    }

    const adminRole = await prisma.role.upsert({
      where: { name: "Admin" },
      update: {},
      create: {
        name: "Admin",
        description: "Administrador Raiz do Sistema!",
      },
    });

    const hashPassword = await bcrypt.hash(adminPassword, 10);

    await prisma.user.create({
      data: {
        name: "Administrador",
        email: adminEmail,
        password: hashPassword,
        roleId: adminRole.id,
      },
    });

    console.log("Administrador criado com sucesso!");
  } catch (error) {

    console.error("Erro durante a execução do seeder:", error);

  } finally {

    await prisma.$disconnect();
  }
}

main();
