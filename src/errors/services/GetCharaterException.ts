import { RequestExceptionParams } from '@/types/services/ExeptionParams';

export class GetCharacterException extends Error {
  public status: number;

  constructor({ message, status }: RequestExceptionParams) {
    super();
    this.message = message;
    this.status = status;
    this.name = 'GetCharacterException';
  }
}
