import path from 'path';
import readlineSync from 'readline-sync';
import fs from 'fs';
import { execSync } from 'child_process';
import { TsConfig } from './interfaces/TsConfig';
import { PackageJson } from './interfaces/PackageJson';

// Função principal que irá criar o projeto
function createTsProject(): void {
    // Código será adicionado aqui nos próximos passos

    // Passo 1: Pergunta o nome do projeto
    const projectName: string = readlineSync.question("Digite o nome do projeto: ");

    // Validação simples: não pode ser vazio
    if (!projectName) {
        console.log("❌ Nome do projeto não pode ser vazio!");
        return; // encerra a função se o usuário não digitou nada
    };
    // Caminho da pasta que será criada "uma acima" da pasta atual
    const projectPath: string = path.join("..", projectName);

    // Cria a pasta do projeto, recursive:true garante criação de pastas intermediárias
    fs.mkdirSync(projectPath, { recursive: true });

    process.chdir(projectPath);

    console.log("Inicializando o projeto...");

    // Inicializa npm (cria package.json padrão)
    execSync("npm init -y", { stdio: "inherit" });

    // Instala TypeScript 
    execSync("npm install typescript", { stdio: "inherit" });


    // Cria o tsconfig.json com as configurações desejadas
    const tsConfig: TsConfig = {
        compilerOptions: {
            target: "ES6",            // gera JavaScript compatível com ES6
            module: "commonjs",       // usa módulos do Node.js
            outDir: "./dist",         // pasta onde o JS compilado será salvo
            rootDir: "./src",         // pasta onde estão os arquivos TS
            strict: true,             // ativa verificação rigorosa de tipos
            moduleResolution: "Node", // resolve módulos como o Node faz
            esModuleInterop: true     // permite import fs from 'fs'
        },
        include: ["src"],           // inclui a pasta src na compilação
        exclude: ["node_modules"]   // ignora a pasta node_modules
    };

    fs.writeFileSync("tsconfig.json", JSON.stringify(tsConfig, null, 2));

    // Lê o package.json criado pelo npm init
    const packageJsonRaw: string = fs.readFileSync("package.json", "utf-8");

    // Converte o texto JSON em um objeto JavaScript/TypeScript
    const packageJson: PackageJson = JSON.parse(packageJsonRaw);

    // Adiciona scripts desejados
    packageJson.scripts = {
        test: 'echo "Error: no test specified" && exit 1', // script de teste padrão
        build: "tsc",                                     // compila TS -> JS
        start: "tsc && node dist/index.js"               // compila e roda o JS gerado
    };

    fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));

    fs.mkdirSync("src");

    fs.writeFileSync("src/index.ts", `console.log("say hi for hello hi!");`);

    console.log(`\n✅ Projeto "${projectName}" criado com sucesso em "${projectPath}"`);
    console.log("👉 Para começar:");
    console.log(`cd ../${projectName}`);
    console.log("npm run build");
    console.log("npm start");
};



createTsProject();


//Presta atençao no que esse cara fala, ele ta falando bem baixo algumas coisas
//