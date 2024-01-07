import { Endpoints } from '@/types/enums/Endpoints';
import { GetCharacter } from '@/types/services/GetCharacter';

import { axiosInstance } from '..';
import { AxiosError } from 'axios';
import { GetCharacterException } from '@/errors/services/GetCharaterException';
import { ResponseException } from '@/errors/services/ResponseException';

class CharactersService {
  public async getCharacter(nameStartsWith: string) {
    try {
      const response = await axiosInstance.get<GetCharacter>(
        Endpoints.CHARACTER,
        {
          params: {
            nameStartsWith
          }
        }
      );

      return response.data.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new GetCharacterException({
          message: e.message,
          status: e.status!
        });
      }

      throw new ResponseException(e);
    }
  }
}

export const characterService = new CharactersService();
