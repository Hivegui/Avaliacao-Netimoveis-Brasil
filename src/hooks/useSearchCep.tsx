import { useState } from 'react';
import axios from 'axios';

const useCepSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [address, setAddress] = useState({
    cep: '',
    street: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const searchAddressByCep = async (cep) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { data } = response;
      setAddress({
        cep: data.cep,
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
      });
    } catch (error) {
      setError('Endereço não encontrado para o CEP fornecido.');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    address,
    searchAddressByCep,
  };
};

export default useCepSearch;