

import {
Block,
Back
} from './notfound.styles'
const NotFound = () => {
    
    return (
        <Block>
            <h1>404</h1>
            <h4>Not Found</h4>
            <p>The resouce request could not be found on this service!</p>
            <Back to={'/'}>Home Page </Back>
        </Block>
    )
}
export default NotFound;