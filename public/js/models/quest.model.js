class QuestModel {
    constructor (nome, email, tipo){
        this.nome = nome;
        this.email = email;
        this.tipo = tipo;
        this.data_hora = UtilService.dataHora;
        this.ip = UtilService.ip;
        this.respostas = this.usarRespostas;
    }

    get usarRespostas() {

        const resp = {};
     
        resp['Você já teve problema com análise de competências técnicas em um processo seletivo?'] =  $("#pergunta1").val();
        resp['Como você lidou ou está lidando com isso?'] = $("#pergunta2").val();
        resp['Qual seria a solução ideal para resolver isso?'] = $("#pergunta3").val();
    ;
        return resp;
      }
}