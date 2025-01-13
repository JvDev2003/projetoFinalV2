import { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_URL;

const useDocumento = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const getDocumento = async (id: string) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${apiUrl}/documento/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      const dados = response.data;
      return dados;
    } catch (error: any) {
      setError(error.response?.data?.msg || error.message);
      console.log(`Error: ${error.response?.data?.msg || error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getDocumentos = async () => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${apiUrl}/documento`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      const dados = response.data;
      return dados;
    } catch (error: any) {
      setError(error.response?.data?.msg || error.message);
      console.log(`Error: ${error.response?.data?.msg || error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const createDocumento = async (nome: string, documento: string) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${apiUrl}/documento/`,
        { nome, documento },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      const dados = response.data;
      return dados;
    } catch (error: any) {
      setError(error.response?.data?.msg || error.message);
      console.log(`Error: ${error.response?.data?.msg || error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const editDocumento = async (id: string, nome: string, documento: string) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(
        `${apiUrl}/professor/${id}`,
        { nome, documento },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      const dados = response.data;
      return dados;
    } catch (error: any) {
      setError(error.response?.data?.msg || error.message);
      console.log(`Error: ${error.response?.data?.msg || error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteDocumento = async (id: string) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.delete(`${apiUrl}/documento/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      const dados = response.data;
      return dados;
    } catch (error: any) {
      setError(error.response?.data?.msg || error.message);
      console.log(`Error: ${error.response?.data?.msg || error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    getDocumentos,
    getDocumento,
    createDocumento,
    editDocumento,
    deleteDocumento,
    loading,
    error,
  };
};

export default useDocumento;
