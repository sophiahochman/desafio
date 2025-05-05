// fila_e_pilha.js
class FilaAtendimento {
    constructor() {
        this.fila = [];
    }

    entrarNaFila(nome) {
        this.fila.push(nome);
        console.log(`> ${nome} entrou na fila.`);
    }

    atender() {
        const atendido = this.fila.shift();
        if (atendido) {
            console.log(`> ${atendido} foi atendida.`);
        } else {
            console.log("> Nenhum aluno na fila.");
        }
    }

    proximo() {
        if (this.fila.length > 0) {
            console.log(`> Próxima a ser atendida: ${this.fila[0]}`);
        } else {
            console.log("> Fila vazia.");
        }
    }

    listarFila() {
        console.log("> Alunos na fila:", this.fila.length > 0 ? this.fila.join(", ") : "Nenhum");
    }
}

class PilhaDocumentos {
    constructor() {
        this.pilha = [];
    }

    adicionarDocumento(nome) {
        this.pilha.push(nome);
        console.log(`> Documento '${nome}' adicionado.`);
    }

    resolverDocumento() {
        const resolvido = this.pilha.pop();
        if (resolvido) {
            console.log(`> Documento '${resolvido}' resolvido.`);
        } else {
            console.log("> Nenhum documento pendente.");
        }
    }

    documentoNoTopo() {
        const topo = this.pilha[this.pilha.length - 1];
        if (topo) {
            console.log(`> Documento no topo: '${topo}'`);
        } else {
            console.log("> Pilha vazia.");
        }
    }

    listarDocumentos() {
        console.log("> Documentos pendentes:", this.pilha.length > 0 ? this.pilha.join(", ") : "Nenhum");
    }
}

// --- Simulação com novos nomes ---
const fila = new FilaAtendimento();
const pilha = new PilhaDocumentos();

fila.entrarNaFila("Sophia");
fila.entrarNaFila("Julia");

pilha.adicionarDocumento("Declaração de Matrícula");
pilha.adicionarDocumento("Histórico Escolar");

fila.atender(); // Sophia
pilha.resolverDocumento(); // Histórico Escolar

fila.entrarNaFila("Marcos");

// Exibe estado final
console.log("\n> Estado final da fila e pilha:");
fila.listarFila();
pilha.listarDocumentos();