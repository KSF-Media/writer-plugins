import './scss/index.scss'
import {PollTool} from './PollTool'
import PollNode from './Nodes/PollNode'

import {PollSelectCommand} from './Commands/PollSelectCommand'
import {InsertPollNodeCommand} from './Commands/InsertPollNodeCommand'

import {PollConverter} from './Converters/PollConverter'

const PollPackage = {
    name: 'ksf-poll',
    id: 'fi.ksfmedia.poll',
    configure: function (config) {
        config.addContentMenuTopTool('pollselect', PollTool)

        config.addCommand('pollselect', PollSelectCommand)
        config.addCommand('insertpollnode', InsertPollNodeCommand)

        config.addNode(PollNode)

        config.addConverter(PollConverter)

        config.addLabel('ksf-embed-poll', {
            en: 'Embed poll',
            sv: 'Infoga webbfråga'
        })
    }
}

export {PollPackage}
