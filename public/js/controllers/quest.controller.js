class QuestController {
    constructor() {         
        this.questService = new QuestService();     
    }

    adiciona(event) {         
        event.preventDefault();           
        let nome = $('#inputNome').val();         
        let email = $('#inputEmail').val();         
        let tipo = $('input[name=inlineRadioOptions]:checked', '#myForm').val();         
        let quest = new QuestModel(nome, email, tipo);         
        this.questService.create(quest);
        
        $('#myForm')[0].reset();

        alert("Obrigado por ter participado da nossa pesquisa!");
    }

}