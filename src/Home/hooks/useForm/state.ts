
export interface State {
    page: number;
    location: string;
    fullTime?: boolean;
    description: string;
  }

export const initialState: State = {
  page: 0,
  location: '',
  description: ''
}
