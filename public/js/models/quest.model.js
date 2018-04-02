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
     
        resp['Você já teve problema com análise de competências técnicas em um processo seletivo?'] =  $('input[name=pergunta1]:checked', '#myForm').val();
        resp['Qual foi o problema e como você lidou ou está lidando com isso?'] = $("#pergunta2").val();
        resp['Em sua opinião qual é a melhor forma de aplicar esse tipo de teste?'] = $("#pergunta3").val();
    ;
        return resp;
      }
}