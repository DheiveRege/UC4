// Interface para tipar o package.json
export interface PackageJson {
    name?: string;               // Nome do pacote
    version?: string;            // Versão
    description?: string;        // Descrição
    main?: string;               // Arquivo principal
    scripts: {                   // Scripts npm
      test: string;
      build: string;
      start: string;
    };
    keywords?: string[];
    author?: string;
    license?: string;
    [key: string]: unknown;      // Permite outros campos extras
  }
  