
const CardController = {
    async card (req,res){
        res.render('pages/card')
    },

    async addCard(req,res){
        const{id,preco,nome} = req.body;

        const produto = {
            id:id,
            preco,
            nome
        }

        if(req.session.cart){
            req.session.cart.push(produto)
        }else{
            req.session.cart = [produto]
        }
        return res.redrect('/produtos?msg=cart_added_sucess');
    }
}

module.exports = CardController;