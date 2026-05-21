import React, { useState, useEffect } from 'react';
import api from '../services/api';
import CardUsuario from '../components/CardUsuario';
import type { User } from '../components/CardUsuario';
import DetalhesUsuario from '../components/DetalhesUsuario';

/**
 * Página principal para listar os usuários e mostrar detalhes
 */
const Usuarios: React.FC = () => {
  // Estados da página
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Hook para carregar os usuários da API assim que a página abre
   */
  useEffect(() => {
    const carregarUsuarios = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Chamada para a API usando axios
        const resposta = await api.get<User[]>('/users');
        
        setUsuarios(resposta.data);
      } catch (err: any) {
        console.error('Erro ao buscar usuários:', err);
        setError('Erro ao carregar a lista de usuários.');
      } finally {
        setLoading(false);
      }
    };

    carregarUsuarios();
  }, []);

  // Telas de carregamento e erro
  if (loading) {
    return (
      <div className="status-container">
        <div className="spinner"></div>
        <p>Carregando usuários...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container erro">
        <p className="erro-mensagem">{error}</p>
        <button className="btn-recarregar" onClick={() => window.location.reload()}>
          Tentar Novamente
        </button>
      </div>
    );
  }

  // Layout: Lista na esquerda e detalhes na direita
  return (
    <div className="usuarios-page-container">
      <div className="lista-usuarios-secao">
        <h2>Selecione um Usuário</h2>
        <div className="lista-usuarios-grid">
          {usuarios.map((usuario) => (
            <CardUsuario
              key={usuario.id}
              usuario={usuario}
              isSelected={usuarioSelecionado?.id === usuario.id}
              onClick={() => setUsuarioSelecionado(usuario)}
            />
          ))}
        </div>
      </div>

      <div className="detalhes-usuario-secao">
        <DetalhesUsuario usuario={usuarioSelecionado} />
      </div>
    </div>
  );
};

export default Usuarios;
