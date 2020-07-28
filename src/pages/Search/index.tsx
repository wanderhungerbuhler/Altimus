import React, { useCallback, useRef, useState } from 'react';
import { FaCar } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Container, BoxCar, BoxCarDescription } from './styles';

import Menu from '../../components/Menu';
import Input from '../../components/Input';

interface SearchFormData {
  id?: number;
  placa?: string;
  marca?: string;
  ano?: number;
  km?: number;
  img?: string;
}

const Search: React.FC = () => {
  const car = [
    {
      id: 1,
      placa: '1234567',
      marca: 'Bugatti',
      ano: 2020,
      km: 0,
      img:
        'https://www.pngmart.com/files/10/Bugatti-Veyron-Transparent-PNG.png',
    },
    {
      id: 2,
      placa: '12345678',
      marca: 'BMW x5',
      ano: 2020,
      km: 0,
      img:
        'https://www.bmw.com.br/content/dam/bmw/common/all-models/x-series/x5/2019/models-and-equipment/bmw-x5-models-equipment-sd.jpg',
    },
    {
      id: 3,
      placa: '123456789',
      marca: 'BMW x1',
      ano: 2020,
      km: 0,
      img:
        'https://catalogo.webmotors.com.br/imagens/prod/348225/BMW_X1_2.0_16V_TURBO_ACTIVEFLEX_SDRIVE20I_GP_4P_AUTOMATICO_34822518330527984.png?s=fill&w=440&h=330&q=80&t=true',
    },
  ];

  const formRef = useRef<FormHandles>(null);

  const [veiculo, setVeiculo] = useState<SearchFormData>();

  const handleSearch = useCallback(
    async (data: SearchFormData) => {
      car.findIndex(e => {
        const resultado = e.placa === data.placa;

        if (resultado) {
          setVeiculo(e);
        }
      });
    },
    [car],
  );

  return (
    <>
      <Menu />
      <Container>
        <h1>Pesquise o veículo</h1>
        <Form ref={formRef} onSubmit={handleSearch}>
          <Input
            name="placa"
            icon={FaCar}
            type="text"
            placeholder="Placa do Carro"
          />
          <button type="submit">Pesquisar</button>

          {veiculo && (
            <BoxCar>
              <article>
                <img src={veiculo?.img} alt={veiculo?.marca} />
                <BoxCarDescription>
                  <h1>{veiculo?.marca}</h1>
                  <span>Placa: {veiculo?.placa}</span>
                  <p>Km: {veiculo?.km}</p>
                  <p>Ano: {veiculo?.ano}</p>
                </BoxCarDescription>
              </article>
            </BoxCar>
          )}
        </Form>
      </Container>
    </>
  );
};

export default Search;
