const {Component} = substance
const {UIButton, UIToggle} = writer
import './scss/index.scss'

class SamplePluginComponent extends Component {
    constructor(...args) {
      super(...args)
      console.log('Testing Sample Plugin')
    }
    render($$) {
        const el = $$('div'),
          label = $$('h2').append('test')

        el.id = 'testplugindiv'
        el.append(label)

        return el
    }
}

export {SamplePluginComponent}
