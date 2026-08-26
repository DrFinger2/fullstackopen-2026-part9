import {
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  Alert,
} from "@mui/material";

import AddEntryForm from "./AddEntryForm";
import { EntryFormValues, Diagnosis } from "../../types";
import Show from "../_common/Show";

interface Props {
  diagnoses: Diagnosis[];
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: EntryFormValues) => void;
  error?: string;
}

const AddEntryModal = ({
  diagnoses,
  modalOpen,
  onClose,
  onSubmit,
  error,
}: Props) => (
  <Dialog fullWidth={true} open={modalOpen} onClose={() => onClose()}>
    <DialogTitle>New entry</DialogTitle>
    <Divider />
    <DialogContent>
      <Show when={Boolean(error)}>
        <Alert severity="error">{error}</Alert>
        <br />
      </Show>
      <AddEntryForm
        onSubmit={onSubmit}
        onCancel={onClose}
        diagnoses={diagnoses}
      />
    </DialogContent>
  </Dialog>
);
export default AddEntryModal;
