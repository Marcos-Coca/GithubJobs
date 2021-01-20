/* eslint-disable no-unused-vars */
export enum ActionType {
    UPDATE_DESCRIPTION = 'update_description',
    UPDATE_LOCATION = 'pdate_location',
    UPDATE_FULL_TIME = 'update_full_time',
    UPDATE_PAGE = 'update_page',
  }

export type Action =
| { type: ActionType.UPDATE_DESCRIPTION; description: string }
| { type: ActionType.UPDATE_LOCATION; location: string }
| { type: ActionType.UPDATE_FULL_TIME; fullTime: boolean }
| { type: ActionType.UPDATE_PAGE; page: number };
