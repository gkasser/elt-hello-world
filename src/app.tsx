import {mount, o} from 'elt'
import {Button} from 'elt-material'

mount(document)

document.body.appendChild(<div>
        <div>Hello world !</div>
        <Button raised={true} click={e => console.log('yo')}>Yo</Button>
</div>)
