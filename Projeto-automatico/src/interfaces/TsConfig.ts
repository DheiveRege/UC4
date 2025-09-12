// Interface para tipar o tsconfig.json
export interface TsConfig {
    compilerOptions: {
      target: string;           // Versão JS alvo
      module: string;           // Tipo de módulo
      outDir: string;           // Pasta de saída do JS compilado
      rootDir: string;          // Pasta raiz dos arquivos TS
      strict: boolean;          // Ativa checagem de tipos rigorosa
      moduleResolution: string; // Como resolver módulos
      esModuleInterop: boolean; // Permite import fs from "fs"
    };
    include: string[];           // Quais pastas/arquivos incluir
    exclude: string[];           // Quais pastas/arquivos excluir
  }