import axios from 'axios';
import md5 from 'md5';

const BASE_URL = 'http://gateway.marvel.com/v1/public';

const defaultParams = () => {
  const ts = new Date().getTime();
  const publicKey = process.env.MARVEL_API_PUBLICKEY;
  const privateKey = process.env.MARVEL_API_PRIVATEKEY;
  const md5Hash = md5(`${ts}${privateKey}${publicKey}`);

  return {
    ts,
    apikey: publicKey,
    hash: md5Hash
  };
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: defaultParams()
});
