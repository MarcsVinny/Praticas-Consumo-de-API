import { useState } from 'react';
import Usuarios from './pages/Usuarios';
import GaleriaFotos from './components/GaleriaFotos';

/**
 * Componente Principal da aplicação
 */
function App() {
  // Estado para controlar a aba ativa (Atividade 1 ou 2)
  const [abaAtiva, setAbaAtiva] = useState<'usuarios' | 'galeria'>('usuarios');

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1>Práticas de Consumo de API</h1>
          <p className="academic-badge">3º Módulo de ADS — Programação para Web</p>
        </div>
        
        <nav className="tab-navigation">
          <button
            type="button"
            className={`tab-btn ${abaAtiva === 'usuarios' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('usuarios')}
          >
            👤 Atividade 1: Usuários
          </button>
          <button
            type="button"
            className={`tab-btn ${abaAtiva === 'galeria' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('galeria')}
          >
            🖼️ Atividade 2: Galeria de Fotos
          </button>
        </nav>
      </header>

      <main className="app-main">
        {abaAtiva === 'usuarios' ? (
          <Usuarios />
        ) : (
          <GaleriaFotos />
        )}
      </main>

      <footer className="app-footer">
        <p>Atividade Acadêmica desenvolvida com React, TypeScript, Axios e CSS.</p>
        <p className="copyright">© 2026 — Análise e Desenvolvimento de Sistemas</p>
      </footer>
    </div>
  );
}

export default App;
