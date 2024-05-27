import React, { useState } from 'react';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';
import './App.css';

const App = () => {
  const [services, setServices] = useState([]);
  const [serviceToEdit, setServiceToEdit] = useState(null);

  const addService = (service) => {
    service.id = Date.now();
    setServices([...services, service]);
  };

  const editService = (updatedService) => {
    setServices(services.map(service => service.id === updatedService.id ? updatedService : service));
    setServiceToEdit(null);
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const clearEdit = () => {
    setServiceToEdit(null);
  };

  return (
    <div className="app-container">
      <h1>Gerenciador de Serviços</h1>
      <ServiceForm
        addService={addService}
        editService={editService}
        serviceToEdit={serviceToEdit}
        clearEdit={clearEdit}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        setServiceToEdit={setServiceToEdit}
      />
    </div>
  );
};

export default App;
