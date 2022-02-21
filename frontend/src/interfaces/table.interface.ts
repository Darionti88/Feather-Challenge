import { Dispatch, SetStateAction } from "react";

export interface TableFieldProps {
  editBoolean: boolean;
  editState: EditState;
  fieldData: string;
  newValueData: string;
  newValue: NewValue;
  setNewValue: Dispatch<SetStateAction<NewValue>>;
  setEdit: Dispatch<SetStateAction<EditState>>;
  policyNumber: string;
  handleSave: (field: string, fieldValue: string, policyNumber: string) => void;
  thisField: string;
}

export interface NewValue {
  provider: string;
  status: string;
  endDate: string;
}

export interface EditState {
  provider: boolean;
  status: boolean;
  endDate: boolean;
}
