import { Dispatch, SetStateAction } from "react";

export interface TableFieldProps {
  editBoolean: boolean;
  editState: EditState;
  thisFieldValue: string;
  fieldValue: FieldValue;
  setFieldValue: Dispatch<SetStateAction<FieldValue>>;
  setEdit: Dispatch<SetStateAction<EditState>>;
  policyNumber: number;
  handleSave: (field: string, fieldValue: string, policyNumber: number) => void;
  thisField: string;
}

export interface FieldValue {
  provider: string;
  status: string;
  endDate: string;
}

export interface EditState {
  provider: boolean;
  status: boolean;
  endDate: boolean;
}
