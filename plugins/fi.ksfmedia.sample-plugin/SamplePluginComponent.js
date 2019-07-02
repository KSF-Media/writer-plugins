const {Component} = substance
const {UIButton, UIToggle} = writer
import './scss/index.scss'

class SamplePluginComponent extends Component {
    constructor(...args) {
      super(...args)
    }
    render($$) {
        const el = $$('div').addClass('testclass'),
          label = $$('h2').append('test')

        el.append(label)

        return el
    }
}

export {SamplePluginComponent}
