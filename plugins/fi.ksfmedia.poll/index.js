import {registerPlugin} from 'writer'
import {PollPackage} from './PollPackage'

export default () => {
    if (registerPlugin) {
        registerPlugin(PollPackage)
    } else {
        console.error('registerPlugin method not available');
    }
}
