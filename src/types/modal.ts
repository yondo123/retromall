export interface Modal {
  title: string;
  message: string;
  confirmMessage: string;
  cancelMessage: string;
  handleSuccess: () => void;
  handleCancel: () => void;
}
