
const regioesDisponiveis = [0, 1, 2, 8, 9];
export function CalcularFrete(cep: string) {
    let regiao = parseInt(cep.substring(0, 1));

    if (!regioesDisponiveis.includes(regiao)) {
        return [];
    }

    let multiplicador = 1;
    switch (regiao) {
        case 0:
            multiplicador = 3
            break;
        case 1:
            multiplicador = 4
            break;
        case 2:
            multiplicador = 5
            break;
        case 8:
            multiplicador = 2
            break;
    }

    let valor = 0;
    let subregiao = parseInt(cep.substring(1, 5));
    if (subregiao > 0 && subregiao <= 2000) {
        valor = 10
    } else if (subregiao <= 5000) {
        valor = 20
    } else {
        valor = 30
    }
    let valorPadrao = valor * multiplicador;
    let arrayRetorno: any[] = [];
    for (let i = 1; i <= 3; i++) {
        let j = 1;
        if (i == 1) {
            j = 3;
        } else if (i == 2) {
            j = i;
        }
        arrayRetorno.push({ valor: (i * valorPadrao), dias: multiplicador * j });
    }
    return arrayRetorno;
}