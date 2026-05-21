import React, { useState, useEffect } from 'react';
import api from '../services/api';

/**
 * Interface para os dados das fotos da API
 */
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

/**
 * Componente da Galeria de Fotos (Atividade 2)
 */
const GaleriaFotos: React.FC = () => {
  // Estados da galeria
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Busca as fotos da API ao montar o componente
   */
  useEffect(() => {
    const carregarFotos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Consumindo a URL solicitada pelo professor usando Axios
        const resposta = await api.get<Photo[]>('/photos?_limit=10');
        
        setPhotos(resposta.data);
      } catch (err: any) {
        console.error('Erro ao buscar fotos:', err);
        setError('Erro ao carregar a galeria de fotos.');
      } finally {
        setLoading(false);
      }
    };

    carregarFotos();
  }, []);

  // Tratamento de loading e erro
  if (loading) {
    return (
      <div className="status-container">
        <div className="spinner"></div>
        <p>Carregando galeria...</p>
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

  // Grid de fotos
  return (
    <div className="galeria-container">
      <h2>Galeria de Fotos</h2>
      <p className="subtitulo">Exibindo 10 fotos da API (Atividade 2)</p>
      
      <div className="fotos-grid">
        {photos.map((foto) => (
          <div key={foto.id} className="foto-card">
            <div className="foto-imagem-wrapper">
              <img 
                // Limpa possíveis caracteres estranhos da URL e carrega
                src={foto.thumbnailUrl.replace(/[`\s]/g, '')} 
                alt={foto.title} 
                className="foto-imagem" 
                loading="lazy" 
                onError={(e) => {
                  // Fallback automático caso o via.placeholder falhe (comum em alguns navegadores)
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/150x150?text=Foto+${foto.id}`;
                }}
              />
            </div>
            <div className="foto-conteudo">
              <span className="foto-id"># {foto.id}</span>
              <p className="foto-titulo" title={foto.title}>{foto.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriaFotos;
