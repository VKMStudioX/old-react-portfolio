import React, { useEffect, useReducer, useContext, useState } from 'react'
import { Button, Grid, Modal, Image, Header, Icon } from 'semantic-ui-react'
import { StoreContext } from '../Store/StoreProvider';

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'CONFIG_CLOSE_ON_DIMMER_CLICK':
      return { ...state, closeOnDimmerClick: action.value }
    case 'CONFIG_CLOSE_ON_ESCAPE':
      return { ...state, closeOnEscape: action.value }
    case 'OPEN_MODAL':
      return { ...state, open: true }
    case 'CLOSE_MODAL':
      return { ...state, open: false }
    default:
      throw new Error()
  }
}

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
 <Image src={ModalImage} wrapped centered />
 </Modal.Content>
 <Modal.Actions>
   <Button basic color='red' inverted onClick={() => {setOpen(false); setModalOpen(false);}}>
     <Icon name='remove' /> Exit
   </Button>
 </Modal.Actions>
</Modal>





      )



//   return (
//     <Grid columns={1}>
//       {/* <Grid.Column>
//         <Checkbox
//           checked={closeOnEscape}
//           label={{ children: <code>closeOnEscape</code> }}
//           onChange={(e, { checked }) =>
//             dispatch({ type: 'CONFIG_CLOSE_ON_ESCAPE', value: checked })
//           }
//         />
//         <br />
//         <Checkbox
//           checked={closeOnDimmerClick}
//           label={{ children: <code>closeOnDimmerClick</code> }}
//           onChange={(e, { checked }) =>
//             dispatch({ type: 'CONFIG_CLOSE_ON_DIMMER_CLICK', value: checked })
//           }
//         />
//       </Grid.Column> */}

//       <Grid.Column>
//         <Modal
//           closeOnEscape={closeOnEscape}
//           closeOnDimmerClick={closeOnDimmerClick}
//           open={open}
//           onOpen={() => dispatch({ type: 'OPEN_MODAL' })}
//           onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
//         //   trigger={open}
//         >
//           <Modal.Header>Delete Your Account</Modal.Header>
//           <Modal.Content>
//             <p>Are you sure you want to delete your account</p>
//           </Modal.Content>
//           <Modal.Actions>
//             <Button onClick={() => dispatch({ type: 'CLOSE_MODAL' })} negative>
//               No
//             </Button>
//             <Button onClick={() => dispatch({ type: 'CLOSE_MODAL' })} positive>
//               Yes
//             </Button>
//           </Modal.Actions>
//         </Modal>
//       </Grid.Column>
//     </Grid>
//   )
}

export default ModalImageViewer