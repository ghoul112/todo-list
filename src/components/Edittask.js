
import React, { useState } from 'react'
import { Button,Modal } from 'react-bootstrap'
import { editTask } from '../redux/todoSlice/TodoSlice';
import { useDispatch } from 'react-redux';

const Edittask = ({id}) => {
    const [show, setShow] = useState(false);
    const dispatch=useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edited, setedited] = useState({
        title:"",
        description:"",}
    );
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Edit task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><input type='text' placeholder='enter task-title here' onChange={(e)=>{setedited({...edited,title:e.target.value});
    }}/>
        <input type='text' placeholder='enter task-description here' onChange={(e)=>{setedited({...edited,description:e.target.value});
    }}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            handleClose();
            dispatch(editTask({id:id,edited}))

          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edittask