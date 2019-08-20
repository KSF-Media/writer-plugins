import {registerPlugin} from 'writer'
import PollPackage from './PollPackage'

(() => {
    if (registerPlugin) {
        registerPlugin(PollPackage)
    } else {
        console.error('registerPlugin method not available');
    }
})()
