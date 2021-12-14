
class Duck
    constructor: (name='Anonimous') ->
        @name = name
    quack: ->
        @name + ' Duck: Quack-quack!'

donald = new duck 'Donald'
console.log donald.quack()
