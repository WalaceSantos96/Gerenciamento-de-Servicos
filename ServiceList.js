import React from 'react';

const ServiceList = ({ services, deleteService, setServiceToEdit }) => {
  return (
    <div>
      {services.length === 0 ? (
        <p>Nenhum serviço disponível.</p>
      ) : (
        services.map((service) => (
          <div key={service.id} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button onClick={() => setServiceToEdit(service)}>Editar</button>
            <button onClick={() => deleteService(service.id)}>Excluir</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ServiceList;
