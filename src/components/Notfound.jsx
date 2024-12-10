import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f9f9f9',
            textAlign: 'center',
            color: '#333',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h2 style={{ fontSize: '2rem', margin: '10px 0' }}>Opss! Página não encontrada</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                Parece que você tentou acessar uma página que não existe.
            </p>
            <Link
                to="/"
                style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    color: '#fff',
                    backgroundColor: '#C92071',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s ease'
                }}
            >
                Voltar para a página inicial
            </Link>
        </div>
    );
};

export default Notfound;
