import React from 'react';

/**
 * Interface para os dados do usuário da API JSONPlaceholder
 */
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

/**
 * Props do componente CardUsuario
 */
interface CardUsuarioProps {
  usuario: User;
  onClick: () => void;
  isSelected: boolean;
}

/**
 * Componente que exibe apenas o nome do usuário na lista
 */
const CardUsuario: React.FC<CardUsuarioProps> = ({ usuario, onClick, isSelected }) => {
  return (
    <div 
      className={`card-usuario ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      <h3>{usuario.name}</h3>
    </div>
  );
};

export default CardUsuario;
