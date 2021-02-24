import React, { useContext, useState } from 'react'
import { Button, Modal, Image, Icon } from 'semantic-ui-react'
import { StoreContext } from '../Store/StoreProvider';

const ModalImageViewer = () => {

const  { ModalOpen, setModalOpen, ModalImage } = useContext(StoreContext);
const  [open, setOpen] = useState(false);

    return (
           <Modal
           basic
           onOpen={() => setModalOpen(false)}
           onClose={() => setOpen(false)}
           open={ModalOpen || open}
           size='fullscreen'
          >
           <Modal.Content>
           <Image src={ModalImage} wrapped centered className='modalImage' />
           </Modal.Content>
           <Modal.Actions>
             <Button basic color='red' inverted onClick={() => {setOpen(false); setModalOpen(false);}}>
               <Icon name='remove' /> Exit
             </Button>
           </Modal.Actions>
          </Modal>

      )
}

export default ModalImageViewer