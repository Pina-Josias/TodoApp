import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const resetForm = () => {
    setFormValues(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return [formValues, handleInputChange, resetForm, handleSubmit];
};
