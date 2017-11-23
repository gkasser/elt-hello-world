import {setupMounting} from 'elt'
import {Button} from 'elt-material'

setupMounting(document)

document.body.appendChild(<div>
        <div>Hello world !</div>
        <Button raised={true} click={e => console.log('yo')}>Yo</Button>
</div>)
