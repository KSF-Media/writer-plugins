import {SamplePackage} from './SamplePackage'
const {registerPlugin} = writer

export default () => {
    if (registerPlugin) {
        registerPlugin(SamplePackage)
    } else {
        console.info("Register method not yet available");
    }
}
