class QuestService {
    constructor() {         
        this.db = firebase.database();     
    }

    create(quest) {          
        let novoquest = Object.assign({}, quest);         
        this.db.ref().child("/quest").push(novoquest);     
    }
}