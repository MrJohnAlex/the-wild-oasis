import Modal from "../../ui/Modal";
import CreateCabin from "./CreateCabin";
import Button from "../../ui/Button";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button variant="primary">Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabin />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// export default function AddCabin() {
//   const [showForm, setShowForm] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setShowForm(!showForm)}>Add new cabin</Button>
//       {showForm && (
//         <Row type="vertical">
//           <Modal onClose={() => setShowForm(false)}>
//             <CreateCabin onCloseModal={() => setShowForm(false)} />
//           </Modal>
//         </Row>
//       )}
//     </div>
//   );
// }
export default AddCabin;
