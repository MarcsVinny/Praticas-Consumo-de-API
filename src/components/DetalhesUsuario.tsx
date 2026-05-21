import React from 'react';
import type { User } from './CardUsuario';

/**
 * Props para os detalhes do usuário
 */
interface DetalhesUsuarioProps {
  usuario: User | null;
}

/**
 * Componente que mostra as informações detalhadas do usuário selecionado
 */
const DetalhesUsuario: React.FC<DetalhesUsuarioProps> = ({ usuario }) => {
  // Se não tiver usuário selecionado
  if (!usuario) {
    return (
      <div className="detalhes-usuario-vazio">
        <p>Selecione um usuário para ver os detalhes.</p>
      </div>
    );
  }

  // Renderiza as informações gerais
  return (
    <div className="detalhes-usuario-container">
      <h2>Informações do Usuário</h2>
      
      <div className="detalhes-header">
        <div className="avatar-placeholder">
          {usuario.name.charAt(0)}
        </div>
        <div>
          <h3>{usuario.name}</h3>
          <p className="username">@{usuario.username}</p>
        </div>
      </div>

      <div className="detalhes-grid">
        <div className="detalhe-item">
          <strong>E-mail:</strong>
          <span>{usuario.email}</span>
        </div>

        <div className="detalhe-item">
          <strong>Telefone:</strong>
          <span>{usuario.phone}</span>
        </div>

        <div className="detalhe-item">
          <strong>Website:</strong>
          <span>
            <a href={`https://${usuario.website}`} target="_blank" rel="noopener noreferrer">
              {usuario.website}
            </a>
          </span>
        </div>

        <div className="detalhe-item">
          <strong>Empresa:</strong>
          <span>{usuario.company.name}</span>
        </div>

        <div className="detalhe-item">
          <strong>Cidade (Endereço):</strong>
          <span>{usuario.address.city}</span>
        </div>
      </div>
    </div>
  );
};

export default DetalhesUsuario;
