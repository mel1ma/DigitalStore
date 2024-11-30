import React from 'react';

const FilterGroup = () => {
    return (
        <div className="filters">
            <section className="filter-group">
                <h2>Filtrar por</h2>
                <hr/>
                <h3>Categoria</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="Esporte e lazer"  style={{ accentColor: '#C92071' }} />
                        <label htmlFor="Esporte e lazer">Esporte e lazer</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Casual" />
                        <label htmlFor="Casual">Casual</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Corrida" />
                        <label htmlFor="Corrida">Corrida</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Promoções" />
                        <label htmlFor="Promoções">Promoções</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Todos" />
                        <label htmlFor="Todos">Todos</label>
                    </li>
                </ul>
            </section>
            <section className="filter-group">
                <h3>Marca</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="Nike" />
                        <label htmlFor="Nike">Nike</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Adidas" />
                        <label htmlFor="Adidas">Adidas</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Puma" />
                        <label htmlFor="Puma">Puma</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Fila" />
                        <label htmlFor="Fila">Fila</label>
                    </li>
                </ul>
            </section>
            <section className="filter-group">
                <h3>Gênero</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="Masculino" />
                        <label htmlFor="Masculino">Masculino</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Feminino" />
                        <label htmlFor="Feminino">Feminino</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Unisex" />
                        <label htmlFor="Unisex">Unisex</label>
                    </li>
                    <li>
                        <input type="checkbox" id="Infantil" />
                        <label htmlFor="Infantil">Infantil</label>
                    </li>
                </ul>
            </section>
            <section className="filter-group">
                <h3>Preço</h3>
                <ul>
                    <li>
                        <input type="radio" id="low" name="price" />
                        <label htmlFor="low">Até $100</label>
                    </li>
                    <li>
                        <input type="radio" id="mid" name="price" />
                        <label htmlFor="mid">$101 - $500</label>
                    </li>
                    <li>
                        <input type="radio" id="high" name="price" />
                        <label htmlFor="high">Acima de $500</label>
                    </li>
                </ul>
            </section>
            
        </div>
    );
};

export default FilterGroup;
