import { Endpoints } from '@/types/enums/Endpoints';
import { GetCharacter } from '@/types/services/GetCharacter';

import { axiosInstance } from '..';

class CharactersService {
  public async getCharacter(nameStartsWith: string) {
    const response = await axiosInstance.get<GetCharacter>(
      Endpoints.CHARACTER,
      {
        params: {
          nameStartsWith
        }
      }
    );

    return response.data.data;
  }
}

export const characterService = new CharactersService();
