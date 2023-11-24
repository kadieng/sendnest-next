import { toast } from 'react-hot-toast';
import { ToastSuccessProps } from '@/@types';

export const toastSuccess = ({ description }: ToastSuccessProps): void => {
  const toastOptions = {
    duration: 4000,
    // Other options can be added here if necessary
  };

  toast.success(description, toastOptions);
};

export const toastError = ({ description }: ToastSuccessProps) => {
  const toastOptions = {
    duration: 4000,
    // Other options can be added here if necessary
  };

  toast.error(description, toastOptions);
};
