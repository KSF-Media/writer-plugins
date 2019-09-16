const PollConverter = {
    type: 'ksf-pollembed',
    tagName: 'object',

    matchElement: element => element.is('object[type="ksf-pollnode"]'),

    import: (node, element) => {
        node.id = element.attr('id')
        node.pollId = element.attr('pollId')
        node.pollBody = element.attr('pollBody')
    },

    export: (node, element, converter) => {
        var $$ = converter.$$
        element.attr({
            id: node.id,
            pollId: node.pollId,
            pollBody: converter.annotatedText([node.id, 'pollBody'])
        })
    }
}

export {PollConverter}