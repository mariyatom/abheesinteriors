import  { Modal } from 'react-bootstrap'
import "./contactmodal.css";
import "./contactuser.css";
import Contactform from './contactform'


function Contactmodal(props) {
  
    
  return (
    <>
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered  className='contactusmodal'
  >
    <Modal.Header closeButton>
    </Modal.Header>
   <Contactform/>
  </Modal>
  </>
  )
}

export default Contactmodal