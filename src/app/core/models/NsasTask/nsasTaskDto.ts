import { Statuses } from "../../enums/statuses";

export interface NsasTaskDto {
  id?: number;
  title?: string;
  description?: string;
  dueDate?: string;
  status?: Statuses;
}
