import React, { useState, useEffect } from 'react';

const ServiceForm = ({ addService, editService, serviceToEdit, clearEdit }) => {
  const [service, setService] = useState({ name: '', description: '' });

  useEffect(() => {
    if (serviceToEdit) {
      setService(serviceToEdit);
    }
  }, [serviceToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (serviceToEdit) {
      editService(service);
    } else {
      addService(service);
    }
    setService({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={service.name}
        onChange={handleChange}
        placeholder="Nome do Serviço"
        required
      />
      <input
        type="text"
        name="description"
        value={service.description}
        onChange={handleChange}
        placeholder="Descrição do Serviço"
        required
      />
      <button type="submit">{serviceToEdit ? 'Editar Serviço' : 'Adicionar Serviço'}</button>
      {serviceToEdit && <button type="button" onClick={clearEdit}>Cancelar Edição</button>}
    </form>
  );
};

export default ServiceForm;
