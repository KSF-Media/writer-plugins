import {Tool} from 'substance'

class PollTool extends Tool {

    insertEmbedPoll(){
        console.log('insertEmbedPoll')
    }

    render($$) {
        const el = $$('button')
            .attr('title', this.getLabel('ksf-embed-poll'))
            .addClass('se-tool')
            .append($$('i').addClass('fa fa-question'))
            .on('click', () => {
                this.executeCommand('pollembed')
            });

        return el    
    }
}

export {PollTool}
